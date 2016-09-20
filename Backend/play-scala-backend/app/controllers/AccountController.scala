package controllers

import javax.inject._

import dao.{AccountDAO, AccountTypeDAO, PermissionDAO}
import models._
import play.api.mvc._
import play.api.libs.json._

@Singleton
class AccountController @Inject() extends Controller {
  implicit val employeeWrites = Json.writes[Account]
  implicit val employeeReads = Json.reads[Account]
  implicit val LoginModelWrites = Json.writes[LoginModel]
  implicit val LoginModelReads = Json.reads[LoginModel]
  implicit val permissionWrites = Json.writes[Permission]
  implicit val permissionReads = Json.reads[Permission]
  implicit val accountTypeWrites = Json.format[AccountType]


  implicit val ResponseWrites = new Writes[Response] {
    def writes(response: Response) = Json.obj(
      "success" -> response.success,
      "message" -> response.message,
      "data" -> response.data
    )
  }

  def getAllAccountList = Action {
    Ok(Json.toJson(AccountDAO.all()))
  }

  def getAccount(accountID: String) = Action {
    val account = AccountDAO.getAccountByID(accountID)
    val accountType = AccountTypeDAO.getAccountTypeByID(account.accountTypeID)
    val obj = Json.obj("item" -> account, "accountType" -> accountType)
    Ok(Json.toJson(obj))
  }

  def register = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[Account]
    e.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      account => {
        if (AccountDAO.register(account))
          Ok(Json.toJson(account))
        else
          BadRequest(Json.obj("status" -> "Error"))
      }
    )
  }

  def login = Action(BodyParsers.parse.json) { implicit request =>
    val e = request.body.validate[LoginModel]
    e.fold(
      errors => {
        BadRequest(Json.toJson(Response(0, "Login error!", null)))
      },
      loginModel => {
        val account: Account = AccountDAO.login(loginModel)
        if (account != null)
          Ok(Json.toJson(Response(1, "Login successfully!", null)))
        else
          BadRequest(Json.toJson(Response(0, "Username or Password is not correct!!", null)))
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

  def deleteEmployee(id: Long) = Action {
    AccountDAO.delete(id)
    Ok(Json.toJson(AccountDAO.all()))
  }
}
