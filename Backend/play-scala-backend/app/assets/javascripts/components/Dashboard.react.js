var React = require('react');
var Link = require('react-router').Link;


var Notification = React.createClass({

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
                            <li className="active">
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
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <a className="navbar-brand" href="#">Dashboard</a>
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
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Email Statistics</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"/> Open
                                                    <i className="fa fa-circle text-danger"/> Bounce
                                                    <i className="fa fa-circle text-warning"/> Unsubscribe
                                                </div>
                                                <hr/>
                                                <div className="stats">
                                                        <i className="fa fa-clock-o"/> Campaign sent 2 days ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Users Behavior</h4>
                                            <p className="category">24 Hours performance</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartHours" className="ct-chart"></div>
                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"/> Open
                                                    <i className="fa fa-circle text-danger"/> Click
                                                    <i className="fa fa-circle text-warning"/> Click Second Time
                                                </div>
                                                <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-history"/> Updated 3 minutes ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card ">
                                        <div className="header">
                                            <h4 className="title">2014 Sales</h4>
                                            <p className="category">All products including Taxes</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartActivity" className="ct-chart"></div>

                                            <div className="footer">
                                                <div className="legend">
                                                    <i className="fa fa-circle text-info"/> Tesla Model S
                                                    <i className="fa fa-circle text-danger"/> BMW 5 Series
                                                </div>
                                                <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-check"/> Data information certified
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card ">
                                        <div className="header">
                                            <h4 className="title">Tasks</h4>
                                            <p className="category">Backend development</p>
                                        </div>
                                        <div className="content">
                                            <div className="table-full-width">
                                                <table className="table">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <label className="checkbox">
                                                                <input type="checkbox" value="" data-toggle="checkbox"/>
                                                            </label>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"/>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="checkbox">
                                                                <input type="checkbox" value="" data-toggle="checkbox" checked=""/>
                                                            </label>
                                                        </td>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"/>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="checkbox">
                                                                <input type="checkbox" value="" data-toggle="checkbox" checked=""/>
                                                            </label>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"/>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="checkbox">
                                                                <input type="checkbox" value="" data-toggle="checkbox"/>
                                                            </label>
                                                        </td>
                                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"/>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="checkbox">
                                                                <input type="checkbox" value="" data-toggle="checkbox"/>
                                                            </label>
                                                        </td>
                                                        <td>Read "Following makes Medium better"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"/>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="checkbox">
                                                                <input type="checkbox" value="" data-toggle="checkbox"/>
                                                            </label>
                                                        </td>
                                                        <td>Unfollow 5 enemies from twitter</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                                <i className="fa fa-edit"/>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                <i className="fa fa-times"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="footer">
                                                <hr/>
                                                <div className="stats">
                                                    <i className="fa fa-history"/> Updated 3 minutes ago
                                                </div>
                                            </div>
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

module.exports = Notification;

