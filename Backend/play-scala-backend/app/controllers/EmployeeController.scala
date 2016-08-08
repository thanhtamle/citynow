package controllers

import javax.inject._

import dao.{EmployeeDAO, PermissionDAO}
import models._
import play.api.libs.json.{JsError, Json}
import play.api.mvc._

@Singleton
class EmployeeController @Inject() extends Controller {
  implicit val employeeWrites = Json.writes[Employee]
  implicit val employeeReads = Json.reads[Employee]
  implicit val LoginModelWrites = Json.writes[LoginModel]
  implicit val LoginModelReads = Json.reads[LoginModel]
  implicit val permissionWrites = Json.writes[Permission]
  implicit val permissionReads = Json.reads[Permission]

  def employees = Action {
    Ok(Json.toJson(EmployeeDAO.all()))
  }

  def getEmployee(employeeID: String) = Action {
    Ok(Json.toJson(EmployeeDAO.getEmployeeByEmployeeID(employeeID)))
  }

  def register = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[Employee]
    e.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      employee => {
        if (EmployeeDAO.register(employee) == true)
          Ok(Json.toJson(employee))
        else
          BadRequest(Json.obj("status" -> "Error"))
      }
    )
  }

  def login = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[LoginModel]
    e.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      loginModel => {
        var employee: Employee = EmployeeDAO.login(loginModel)
        if (employee != null)
          Ok(Json.toJson(employee))
        else
          BadRequest(Json.obj("status" -> "Error"))
      }
    )
  }

  def requestPermission = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[Permission]
    e.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      permission => {
        if (PermissionDAO.addPermission(permission) == true)
          Ok(Json.toJson(permission))
        else
          BadRequest(Json.obj("status" -> "Error"))
      }
    )
  }

  def updatePermission = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[Permission]
    e.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      permission => {
        PermissionDAO.update(permission.employeeID)
        EmployeeDAO.updatePermission(permission.employeeID)
        Ok(Json.toJson(permission))
      }
    )
  }

  def getAllRequestPermission = Action {
    Ok(Json.toJson(PermissionDAO.all()))
  }

  def deleteEmployee(id: Long) = Action {
    EmployeeDAO.delete(id)
    Ok(Json.toJson(EmployeeDAO.all()))
  }
}
