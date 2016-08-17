package controllers

import javax.inject._

import dao.AttendanceDAO
import models._
import play.api.libs.json.{JsError, Json}
import play.api.mvc._

@Singleton
class AttendanceController @Inject() extends Controller {
  implicit val attendanceWrites = Json.writes[Attendance]
  implicit val attendanceReads = Json.reads[Attendance]
  implicit val employeeWrites = Json.writes[Employee]
  implicit val employeeReads = Json.reads[Employee]

  //  def index = Action {
  //    Redirect(routes.AttendanceController.attendances)
  //  }

  def attendances = Action {
    Ok(Json.toJson(AttendanceDAO.all()))
  }

  def checkIn = Action(BodyParsers.parse.json) { implicit request =>
    val a = request.body.validate[Attendance]
    a.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      attendance => {
        if (AttendanceDAO.saveArrivalTime(attendance) == true)
          Ok(Json.toJson(attendance))
        else
          BadRequest(Json.obj("status" -> "Error"))
      }
    )
  }

  def checkOut = Action(BodyParsers.parse.json) { implicit request =>
    val a = request.body.validate[Attendance]
    a.fold(
      errors => {
        BadRequest(Json.obj("status" -> "Error", "message" -> JsError.toFlatJson(errors)))
      },
      attendance => {
        if (AttendanceDAO.saveDepartureTime(attendance) == true)
          Ok(Json.toJson(attendance))
        else
          BadRequest(Json.obj("status" -> "Error"))
      }
    )
  }

  def getAttendancesByManager(employeeID: String) = Action {
    Ok(Json.toJson(AttendanceDAO.getAttendanceListByManager(employeeID)))
  }

  //  def deleteAttendance(id: Long) = Action {
  //    Attendance.delete(id)
  //    Redirect(routes.AttendanceController.attendances)
  //  }

}
