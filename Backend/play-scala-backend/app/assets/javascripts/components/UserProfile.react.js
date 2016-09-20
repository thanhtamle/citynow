var React = require('react');
var Link = require('react-router').Link;


var UserProfile = React.createClass({

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
                            <li className="active">
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
                                <a className="navbar-brand" href="#">Profile</a>
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
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Edit Profile</h4>
                                        </div>
                                        <div className="content">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label>Company (disabled)</label>
                                                            <input type="text" className="form-control" disabled placeholder="Company" value="Creative Code Inc."/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label>Username</label>
                                                            <input type="text" className="form-control" placeholder="Username" value="michael23"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label for="exampleInputEmail1">Email address</label>
                                                            <input type="email" className="form-control" placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" className="form-control" placeholder="Company" value="Mike"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" className="form-control" placeholder="Last Name" value="Andrew"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address</label>
                                                            <input type="text" className="form-control" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>City</label>
                                                            <input type="text" className="form-control" placeholder="City" value="Mike"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <input type="text" className="form-control" placeholder="Country" value="Andrew"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Postal Code</label>
                                                            <input type="number" className="form-control" placeholder="ZIP Code"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>About Me</label>
                                                            <textarea rows="5" className="form-control" placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button>
                                                <div className="clearfix"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-user">
                                        <div className="image">
                                            <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
                                        </div>
                                        <div className="content">
                                            <div className="author">
                                                <a href="#">
                                                    <img className="avatar border-gray" src="assets/images/faces/face-3.jpg" alt="..."/>

                                                    <h4 className="title">Mike Andrew<br />
                                                        <small>michael24</small>
                                                    </h4>
                                                </a>
                                            </div>
                                            <p className="description text-center">"Lamborghini Mercy<br/>
                                                Your chick she so thirsty<br/>
                                                I'm in that two seat Lambo"<br/>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div className="text-center">
                                            <button href="#" className="btn btn-simple"><i className="fa fa-facebook-square"/></button>
                                            <button href="#" className="btn btn-simple"><i className="fa fa-twitter"/></button>
                                            <button href="#" className="btn btn-simple"><i className="fa fa-google-plus-square"/></button>
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

module.exports = UserProfile;

