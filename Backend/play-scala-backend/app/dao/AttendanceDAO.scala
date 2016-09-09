package dao

import models.{Attendance, Attendances}
import slick.driver.PostgresDriver.api._
import slick.lifted.TableQuery
import utils.DBManager

object AttendanceDAO {

  private val DBManager = new DBManager()
  private val attendances = TableQuery[Attendances]

  def all(): Seq[Attendance] = {
    DBManager.run(attendances.result)
  }

  def getAttendanceToCheckInCheckout(employeeID: String, managerEmployeeID: String): Attendance = {
    val item = DBManager.run(attendances.filter(_.employeeID === employeeID).filter(_.finish === false).filter(_.managerEmployeeID === managerEmployeeID).result.headOption)
    item match {
      case Some(f) =>
        return item.get
      case None =>
        return null
    }
  }

  def saveArrivalTime(attendance: Attendance): Boolean = {
    val item = getAttendanceToCheckInCheckout(attendance.employeeID, attendance.managerEmployeeID)
    if (item == null) {
      DBManager.run((attendances returning attendances.map(_.id)).insertOrUpdate(attendance))
      return true
    }
    return false
  }

  def saveDepartureTime(attendance: Attendance): Boolean = {
    val item = getAttendanceToCheckInCheckout(attendance.employeeID, attendance.managerEmployeeID)
    if (item != null) {
      val q = for {c <- attendances if c.employeeID === attendance.employeeID if c.managerEmployeeID === attendance.managerEmployeeID} yield (c.departureTime, c.finish)
      val updateAction = q.update(attendance.departureTime, attendance.finish)
      DBManager.run(updateAction)
      return true
    }
    return false
  }

  def getAttendanceListByManager(employeeID: String): Seq[Attendance] = {
    val query = attendances.filter(_.managerEmployeeID === employeeID).result
    val result = DBManager.run(query)
    return result
  }
}
