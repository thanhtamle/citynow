package dao

import models.{Permission, Permissions}
import slick.driver.PostgresDriver.api._
import slick.lifted.TableQuery
import utils.DBManager

object PermissionDAO {

  private val DBManager = new DBManager()
  private val permissions = TableQuery[Permissions]

  def all(): Seq[Permission] = {
    DBManager.run(permissions.result)
  }

  def update(employeeID: String) {
    val q = for {c <- permissions if c.employeeID === employeeID} yield c.isPermission
    val updateAction = q.update(true)
    DBManager.run(updateAction)
  }

  def delete(id: Long) {
    val q = for {c <- permissions if c.id === id} yield c.deleteFlag
    val updateAction = q.update(true)
    DBManager.run(updateAction)
  }

  def addPermission(permission: Permission): Boolean = {
    if (isExistPermission(permission.employeeID) == null) {
      val insertQuery = permissions returning permissions.map(_.id) into ((item, id) => item.copy(id = id))
      val action = insertQuery += permission
      DBManager.run(action)
      return true
    }
    return false
  }

  def isExistPermission(employeeID: String): Permission = {
    var item = DBManager.run(permissions.filter(_.employeeID === employeeID).result.headOption)
    item match {
      case Some(f) =>
        return item.get
      case None =>
        return null
    }
  }

  def getPermissionByEmployeeID(employeeID: String): Permission = {
    var item = DBManager.run(permissions.filter(_.employeeID === employeeID).result.headOption)
    item match {
      case Some(f) =>
        return item.get
      case None =>
        return null
    }
  }
}
