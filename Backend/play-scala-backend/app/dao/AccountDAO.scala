package dao

import models._
import slick.driver.PostgresDriver.api._
import slick.lifted.TableQuery
import utils.DBManager


object AccountDAO {

  private val DBManager = new DBManager()
  private val accounts = TableQuery[Accounts]

  def all(): Seq[Account] = {
    DBManager.run(accounts.result)
  }

  def register(account: Account): Boolean = {
    if (isExistEmployee(account.accountID) == null) {
      val insertQuery = accounts returning accounts.map(_.id) into ((item, id) => item.copy(id = id))
      val action = insertQuery += account
      DBManager.run(action)
      return true
    }
    false
  }

  def isExistEmployee(accountID: String): Account = {
    val item = DBManager.run(accounts.filter(_.accountID === accountID).result.headOption)
    item match {
      case Some(f) =>
        item.get
      case None =>
        null
    }
  }

  def getAccountByID(accountID: String): Account = {
    isExistEmployee(accountID)
  }

  def login(loginModel: LoginModel): Account = {
    val item = DBManager.run(accounts.filter(_.accountID === loginModel.accountID).filter(_.accountPassword === loginModel.accountPassword).result.headOption)
    item match {
      case Some(f) =>
        item.get
      case None =>
        null
    }
  }

  def updatePermission(accountID: String) {
    val q = for {c <- accounts if c.accountID === accountID} yield c.permission
    val updateAction = q.update(true)
    DBManager.run(updateAction)
  }

  def delete(id: Long) {
    val q = for {c <- accounts if c.id === id} yield c.deleteFlag
    val updateAction = q.update(true)
    DBManager.run(updateAction)
  }
}
