package controllers

import javax.inject._

import dao.{AccountDAO, PermissionDAO}
import models._
import play.api.libs.json.{JsError, Json}
import play.api.mvc._

@Singleton
class PermissionController @Inject() extends Controller {
  implicit val permissionWrites = Json.writes[Permission]
  implicit val permissionReads = Json.reads[Permission]

  def requestPermission = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[Permission]
    e.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      permission => {
        if (PermissionDAO.addPermission(permission))
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
        AccountDAO.updatePermission(permission.employeeID)
        Ok(Json.toJson(permission))
      }
    )
  }

  def getAllRequestPermission = Action {
    Ok(Json.toJson(PermissionDAO.all()))
  }
}
