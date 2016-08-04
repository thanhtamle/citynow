package dao

import models.{Employee, Employees, LoginModel}
import slick.driver.PostgresDriver.api._
import slick.lifted.TableQuery
import utils.DBManager


object EmployeeDAO {

  private val DBManager = new DBManager()
  private val employees = TableQuery[Employees]

  def all(): Seq[Employee] = {
    DBManager.run(employees.result)
  }

  def register(employee: Employee): Boolean = {
    if (isExistEmployee(employee.employeeID) == null) {
      DBManager.run((employees returning employees.map(_.id)).insertOrUpdate(employee))
      return true
    }
    return false
  }

  def isExistEmployee(employeeID: String): Employee = {
    var item = DBManager.run(employees.filter(_.employeeID === employeeID).result.headOption)
    item match {
      case Some(f) =>
        return item.get
      case None =>
        return null
    }
  }

  def getEmployeeByEmployeeID(employeeID: String): Employee = {
    isExistEmployee(employeeID)
  }

  def login(loginModel: LoginModel): Employee = {
    var item = DBManager.run(employees.filter(_.employeeID === loginModel.employeeID).filter(_.employeePassword === loginModel.employeePassword).result.headOption)
    item match {
      case Some(f) =>
        return item.get
      case None =>
        return null
    }
  }

  def updatePermission(employeeID: String) {
    val q = for {c <- employees if c.employeeID === employeeID} yield c.permission
    val updateAction = q.update(true)
    DBManager.run(updateAction)
  }

  def delete(id: Long) {
    val q = for { c <- employees if c.id === id } yield c.deleteFlag
    val updateAction = q.update(true)
    DBManager.run(updateAction)
  }
}
