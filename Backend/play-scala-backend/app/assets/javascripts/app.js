
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var Main = require('./components/Main.react');
var Home = require('./components/Home.react');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render((
	  	<Router history={hashHistory}>
		    <Route path="/" component={Main}>
		    	<IndexRoute component={Home}/>
		    </Route>
	   </Router>
), document.getElementById('todoapp'));