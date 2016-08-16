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