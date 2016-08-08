
var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
	<nav className="navbar navbar-inverse">
	    <div className="container">
	      <div className="navhbar-header">
	        <a href="#" className="navbar-brand">CityNow</a>
	      </div>
	      <ul className="nav navbar-nav navbar-right" style={{marginRight:'20px;0'}}>

	        <li><a href="#" style={{marginRight:'-20px;0'}}>Login</a></li>
	      </ul>
	    </div>
	</nav>
    );
  },
});

module.exports = Header;
