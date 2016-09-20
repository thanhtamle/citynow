package models

import slick.driver.PostgresDriver.api._

case class Account(id: Long, accountID: String, accountPassword: String, accountName: String, accountEmail: String, accountTypeID: Long, permission: Boolean, deleteFlag: Boolean)

class Accounts(tag: Tag) extends Table[Account](tag, "account") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def accountID = column[String]("accountID")

  def accountPassword = column[String]("accountPassword")

  def accountName = column[String]("accountName")

  def accountEmail = column[String]("accountEmail")

  def accountTypeID = column[Long]("accountTypeID")

  def permission = column[Boolean]("permission")

  def deleteFlag = column[Boolean]("deleteFlag")

  override def * = (id, accountID, accountPassword, accountName, accountEmail, accountTypeID, permission, deleteFlag) <> (Account.tupled, Account.unapply)
}