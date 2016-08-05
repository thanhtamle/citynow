package controllers

import javax.inject._

import dao.EmployeeDAO
import play.api.mvc._

class HomeController @Inject() extends Controller {

  def index = Action {
    Ok(views.html.index(EmployeeDAO.all()))
  }

}
