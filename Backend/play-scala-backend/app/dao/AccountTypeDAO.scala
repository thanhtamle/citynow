package dao

import models.{AccountType, AccountTypes}
import slick.driver.PostgresDriver.api._
import slick.lifted.TableQuery
import utils.DBManager

/**
  * Created by thanh-tamle on 9/15/16.
  */

object AccountTypeDAO {

  private val DBManager = new DBManager()
  private val accountTypes = TableQuery[AccountTypes]

  def getAccountTypeByID(id: Long): AccountType = {
    val item = DBManager.run(accountTypes.filter(_.id === id).result.headOption)
    item match {
      case Some(f) =>
        item.get
      case None =>
        null
    }
  }

}
