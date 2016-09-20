
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var Main = require('./components/Main.react');
var Home = require('./components/Home.react');
var Login = require('./components/Login.react');
var Dashboard = require('./components/Dashboard.react');
var UserProfile = require('./components/UserProfile.react');
var Table = require('./components/Table.react');
var Map = require('./components/Map.react');
var Notification = require('./components/Notification.react');

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render((
	  	<Router history={hashHistory}>
		    <Route path="/" component={Main}>
		    	<IndexRoute component={Login}/>
				<Route path="/login" component={Login}/>
				<Route path="/dashboard" component={Dashboard}/>
				<Route path="/userProfile" component={UserProfile}/>
				<Route path="/table" component={Table}/>
				<Route path="/map" component={Map}/>
				<Route path="/notification" component={Notification}/>
		    </Route>
	   </Router>
), document.getElementById('todoapp'));