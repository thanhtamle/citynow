var React = require('react');
var Link = require('react-router').Link;


var Table = React.createClass({

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
                            <li className="active">
                                <Link to={'table'}>
                                    <i className="pe-7s-note2"/>
                                    <p>Attendance List</p>
                                </Link>
                            </li>
                            <li>
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
                                <a className="navbar-brand" href="#">Attendance List</a>
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

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Striped Table with Hover</h4>
                                            <p className="category">Here is a subtitle for this table</p>
                                        </div>
                                        <div className="content table-responsive table-full-width">
                                            <table className="table table-hover table-striped">
                                                <thead>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Dakota Rice</td>
                                                    <td>$36,738</td>
                                                    <td>Niger</td>
                                                    <td>Oud-Turnhout</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Minerva Hooper</td>
                                                    <td>$23,789</td>
                                                    <td>Curaçao</td>
                                                    <td>Sinaai-Waas</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Sage Rodriguez</td>
                                                    <td>$56,142</td>
                                                    <td>Netherlands</td>
                                                    <td>Baileux</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Philip Chaney</td>
                                                    <td>$38,735</td>
                                                    <td>Korea, South</td>
                                                    <td>Overland Park</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Doris Greene</td>
                                                    <td>$63,542</td>
                                                    <td>Malawi</td>
                                                    <td>Feldkirchen in Kärnten</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Mason Porter</td>
                                                    <td>$78,615</td>
                                                    <td>Chile</td>
                                                    <td>Gloucester</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="card card-plain">
                                        <div className="header">
                                            <h4 className="title">Table on Plain Background</h4>
                                            <p className="category">Here is a subtitle for this table</p>
                                        </div>
                                        <div className="content table-responsive table-full-width">
                                            <table className="table table-hover">
                                                <thead>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Dakota Rice</td>
                                                    <td>$36,738</td>
                                                    <td>Niger</td>
                                                    <td>Oud-Turnhout</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Minerva Hooper</td>
                                                    <td>$23,789</td>
                                                    <td>Curaçao</td>
                                                    <td>Sinaai-Waas</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Sage Rodriguez</td>
                                                    <td>$56,142</td>
                                                    <td>Netherlands</td>
                                                    <td>Baileux</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Philip Chaney</td>
                                                    <td>$38,735</td>
                                                    <td>Korea, South</td>
                                                    <td>Overland Park</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Doris Greene</td>
                                                    <td>$63,542</td>
                                                    <td>Malawi</td>
                                                    <td>Feldkirchen in Kärnten</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Mason Porter</td>
                                                    <td>$78,615</td>
                                                    <td>Chile</td>
                                                    <td>Gloucester</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <footer className="footer">
                        <div className="container-fluid">
                            <nav className="pull-left">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.citynow.jp">
                                            Company
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <p className="copyright pull-right">
                                &copy; 2016 <a href="http://www.citynow.jp">CityNow</a> Co.Ltd
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    },
});

module.exports = Table;

