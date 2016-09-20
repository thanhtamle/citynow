var React = require('react');
var Link = require('react-router').Link;


var Map = React.createClass({

    render: function () {

        return (
            <div className="wrapper">
                <div className="sidebar" data-color="purple" data-image="assets/images/sidebar-5.jpg">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a href="http://www.citynow.jp" className="simple-text">
                                CityNow
                            </a>
                        </div>

                        <ul className="nav">
                            <li>
                                <Link to={'dashboard'}>
                                    <i className="pe-7s-graph"/>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'userProfile'}>
                                    <i className="pe-7s-user"/>
                                    <p>User Profile</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'table'}>
                                    <i className="pe-7s-note2"/>
                                    <p>Attendance List</p>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to={'map'}>
                                    <i className="pe-7s-map-marker"/>
                                    <p>Maps</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'notification'}>
                                    <i className="pe-7s-bell"/>
                                    <p>Notifications</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="main-panel">
                    <nav className="navbar navbar-default navbar-fixed">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#navigation-example-2">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <a className="navbar-brand" href="#">Maps</a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-left">
                                    <li>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-dashboard"/>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-globe"/>
                                            <b className="caret"/>
                                            <span className="notification">5</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Notification 1</a></li>
                                            <li><a href="#">Notification 2</a></li>
                                            <li><a href="#">Notification 3</a></li>
                                            <li><a href="#">Notification 4</a></li>
                                            <li><a href="#">Another notification</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa fa-search"/>
                                        </a>
                                    </li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="">
                                            Account
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Dropdown
                                            <b className="caret"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something</a></li>
                                            <li className="divider"/>
                                            <li><a href="#">Separated link</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Log out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div id="map"></div>

                </div>


            </div>

        );
    },
});

module.exports = Map;

