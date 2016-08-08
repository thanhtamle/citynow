package models

import slick.driver.PostgresDriver.api._

case class Permission(id: Long, employeeID: String, isPermission: Boolean, deleteFlag: Boolean)

class Permissions(tag: Tag) extends Table[Permission](tag, "permission") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def employeeID = column[String]("employeeID")

  def isPermission = column[Boolean]("isPermission")

  def deleteFlag = column[Boolean]("deleteFlag")

  override def * = (id, employeeID, isPermission, deleteFlag) <> (Permission.tupled, Permission.unapply)
}