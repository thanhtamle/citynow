package models

import slick.driver.PostgresDriver.api._

case class Employee(id: Long, employeeID: String, employeePassword: String, employeeName: String, employeeEmail: String, admin: Boolean, permission: Boolean, deleteFlag: Boolean)

class Employees(tag: Tag) extends Table[Employee](tag, "employee") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def employeeID = column[String]("employeeID")

  def employeePassword = column[String]("employeePassword")

  def employeeName = column[String]("employeeName")

  def employeeEmail = column[String]("employeeEmail")

  def admin = column[Boolean]("admin")

  def permission = column[Boolean]("permission")

  def deleteFlag = column[Boolean]("deleteFlag")

  override def * = (id, employeeID, employeePassword, employeeName, employeeEmail, admin, permission, deleteFlag) <> (Employee.tupled, Employee.unapply)
}