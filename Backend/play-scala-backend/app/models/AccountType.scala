package models

import slick.driver.PostgresDriver.api._
import play.api.libs.json.Json

/**
  * Created by thanh-tamle on 9/15/16.
  */

case class AccountType(id: Long, accountType: String, deleteFlag: Boolean) {
  implicit val accountTypeWrites = Json.format[AccountType]
}

class AccountTypes(tag: Tag) extends Table[AccountType](tag, "account_type") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def accountType = column[String]("accountType")

  def deleteFlag = column[Boolean]("deleteFlag")

  override def * = (id, accountType, deleteFlag) <> (AccountType.tupled, AccountType.unapply)
}