package controllers

import javax.inject._

import akka.actor.ActorSystem
import play.api.libs.ws.WSClient
import play.api.mvc._
import play.api.routing.JavaScriptReverseRouter
import play.twirl.api.Html

class HomeController @Inject()(actorSystem: ActorSystem, ws: WSClient) extends Controller {

  def index = Action { implicit request =>
    Ok(views.html.index(Html("")))
  }

  def javascriptRoutes = Action { implicit request =>
    Ok(
      JavaScriptReverseRouter("jsRoutes")(
        routes.javascript.EmployeeController.employees,
        routes.javascript.EmployeeController.login,
        routes.javascript.AttendanceController.attendances,
        routes.javascript.PermissionController.getAllRequestPermission
      )
    ).as("text/javascript")
  }

}
