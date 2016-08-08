package models

import slick.driver.PostgresDriver.api._

case class Attendance(id: Long, employeeID: String, arrivalTime: String, departureTime: String, finish: Boolean, managerEmployeeID: String, deleteFlag: Boolean)

class Attendances(tag: Tag) extends Table[Attendance](tag, "attendance") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def employeeID = column[String]("employeeID")

  def arrivalTime = column[String]("arrivalTime")

  def departureTime = column[String]("departureTime")

  def finish = column[Boolean]("finish")

  def managerEmployeeID = column[String]("managerEmployeeID")

  def deleteFlag = column[Boolean]("deleteFlag")

  override def * = (id, employeeID, arrivalTime, departureTime, finish, managerEmployeeID, deleteFlag) <> (Attendance.tupled, Attendance.unapply)
}

//object Attendance {

//  def all(): List[Attendance] = DB.withConnection { implicit c =>
//    SQL("select * from attendance").as(attendance *)
//  }
//
//  def getAttendanceListByManager(managerEmployeeID: String): List[Attendance] = {
//    var result: List[Attendance] = DB.withConnection { implicit c =>
//      SQL("select * from attendance where managerEmployeeID = {managerEmployeeID}").on(
//        'managerEmployeeID -> managerEmployeeID
//      ).as(attendance *) }
//
//    return result
//  }
//
//  def getAttendanceHaveNotCheckoutYet(employeeID: String): Attendance = {
//    var result: List[Attendance] = DB.withConnection { implicit c =>
//      SQL("select * from attendance where employeeID = {employeeID} and finish = {finish}").on(
//        'employeeID -> employeeID,
//        'finish -> false
//      ).as(attendance *) }
//
//    if (result.size > 0) {
//      return result(0)
//    }
//
//    return null
//  }
//
//  def getAttendanceToCheckInCheckout(employeeID: String, managerEmployeeID: String): Attendance = {
//
//    var result: List[Attendance] = DB.withConnection { implicit c =>
//      SQL("select * from attendance where employeeID = {employeeID} and finish = {finish} and " +
//        "managerEmployeeID = {managerEmployeeID}").on(
//        'employeeID -> employeeID,
//        'finish -> false,
//        'managerEmployeeID -> managerEmployeeID
//      ).as(attendance *) }
//
//    if (result.size > 0) {
//      return result(0)
//    }
//
//    return null
//  }
//
//  def saveArrivalTime(employeeID: String, arrivalTime: String, managerEmployeeID: String) : Boolean = {
//
//    var attendance: Attendance = getAttendanceToCheckInCheckout(employeeID, managerEmployeeID)
//
//    if(attendance == null) {
//      DB.withConnection { implicit c =>
//        SQL("insert into attendance (employeeID, arrivalTime, departureTime, finish, managerEmployeeID) " +
//          "values ({employeeID}, {arrivalTime}, {departureTime}, {finish}, {managerEmployeeID})").on(
//          'employeeID -> employeeID, 'arrivalTime -> arrivalTime, 'departureTime -> "", 'finish -> false,
//          'managerEmployeeID -> managerEmployeeID
//        ).executeUpdate()
//      }
//      return true
//    }
//    return false
//  }
//
//  def saveDepartureTime(employeeID: String, departureTime: String, managerEmployeeID: String) : Boolean =  {
//    var attendance: Attendance = getAttendanceToCheckInCheckout(employeeID, managerEmployeeID)
//
//    if(attendance != null) {
//      DB.withConnection{implicit c =>
//        SQL("update attendance set departureTime=({departureTime}), finish=({finish}) where id={id}").on(
//          'departureTime -> departureTime,
//          'finish -> true,
//          'id -> attendance.id
//        ).executeUpdate()
//      }
//      return true
//    }
//    return false
//  }
//
//  def delete(id: Long) {
//    DB.withConnection { implicit c =>
//      SQL("delete from attendance where id = {id}").on(
//        'id -> id
//      ).executeUpdate()
//    }
//  }
//
//
//  val attendance = {
//    get[Long]("id") ~
//      get[String]("employeeID") ~
//      get[String]("arrivalTime") ~
//      get[String]("departureTime") ~
//      get[Boolean]("finish") ~
//      get[String]("managerEmployeeID") map {
//
//      case id~employeeID~arrivalTime~departureTime~finish~managerEmployeeID => Attendance(id, employeeID, arrivalTime, departureTime, finish, managerEmployeeID)
//    }
//  }
//}