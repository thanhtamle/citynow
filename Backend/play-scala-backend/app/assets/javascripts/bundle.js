(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'Attendance-Change';
var RESPONSE_EVENT = 'Attendance-Response';

var allAttendanceList = {};
var _response = {};

var AttendanceApiRequest = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return allAttendanceList;
    },
    getResponse: function () {
        return _response;
    },
    loadAllAttendanceList: function () {
        var r = jsRoutes.controllers.AttendanceController.attendances();
        $.ajax({
            url: r.url,
            dataType: 'json',
            type: "get",
            cache: false,
            success: function (data) {
                allAttendanceList = data;
                AttendanceApiRequest.emitChange();
            }.bind(this),
            error: function (xhr, status, err) {
                allAttendanceList = {};
            }.bind(this)
        });
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    emitResponse: function () {
        this.emit(RESPONSE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    addResponseListener: function (callback) {
        this.on(RESPONSE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    removeResponseListener: function (callback) {
        this.removeListener(RESPONSE_EVENT, callback);
    }
});

module.exports = AttendanceApiRequest;

},{"events":9,"object-assign":"object-assign"}],2:[function(require,module,exports){

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'Employee-Change';
var RESPONSE_EVENT = 'Employee-Response';

var allEmployeeList = {};
var _response = {};

var EmployeeApiRequest = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return allEmployeeList;
    },
    getResponse: function () {
        return _response;
    },
    loadAllEmployeeList: function () {
        var r = jsRoutes.controllers.EmployeeController.employees();
        $.ajax({
            url: r.url,
            dataType: 'json',
            type: "get",
            cache: false,
            success: function (data) {
                allEmployeeList = data;
                EmployeeApiRequest.emitChange();
            }.bind(this),
            error: function (xhr, status, err) {
                allEmployeeList = {};
            }.bind(this)
        });
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    emitResponse: function () {
        this.emit(RESPONSE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    addResponseListener: function (callback) {
        this.on(RESPONSE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    removeResponseListener: function (callback) {
        this.removeListener(RESPONSE_EVENT, callback);
    }
});

module.exports = EmployeeApiRequest;

},{"events":9,"object-assign":"object-assign"}],3:[function(require,module,exports){

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'Employee-Change';
var RESPONSE_EVENT = 'Employee-Response';

var allPermissionList = {};
var _response = {};

var PermissionApiRequest = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return allPermissionList;
    },
    getResponse: function () {
        return _response;
    },
    loadAllPermissionList: function () {
        var r = jsRoutes.controllers.PermissionController.getAllRequestPermission();
        $.ajax({
            url: r.url,
            dataType: 'json',
            type: "get",
            cache: false,
            success: function (data) {
                allPermissionList = data;
                PermissionApiRequest.emitChange();
            }.bind(this),
            error: function (xhr, status, err) {
                allPermissionList = {};
            }.bind(this)
        });
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    emitResponse: function () {
        this.emit(RESPONSE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    addResponseListener: function (callback) {
        this.on(RESPONSE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    removeResponseListener: function (callback) {
        this.removeListener(RESPONSE_EVENT, callback);
    }
});

module.exports = PermissionApiRequest;

},{"events":9,"object-assign":"object-assign"}],4:[function(require,module,exports){

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var Main = require('./components/Main.react');
var Home = require('./components/Home.react');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(
	Router,
	{ history: hashHistory },
	React.createElement(
		Route,
		{ path: '/', component: Main },
		React.createElement(IndexRoute, { component: Home })
	)
), document.getElementById('todoapp'));

},{"./components/Home.react":7,"./components/Main.react":8,"react":"react","react-dom":"react-dom","react-router":"react-router"}],5:[function(require,module,exports){

var React = require('react');

var Footer = React.createClass({
  displayName: 'Footer',

  getDefaultProps() {
    return { componentClass: 'p' };
  },
  render: function () {
    return React.createElement('div', { className: 'footer text-center' });
  }
});

module.exports = Footer;

},{"react":"react"}],6:[function(require,module,exports){

var React = require('react');

var Header = React.createClass({
		displayName: "Header",


		render: function () {
				return React.createElement(
						"nav",
						{ className: "navbar navbar-inverse" },
						React.createElement(
								"div",
								{ className: "container" },
								React.createElement(
										"div",
										{ className: "navhbar-header" },
										React.createElement(
												"a",
												{ href: "#", className: "navbar-brand" },
												"CityNow"
										)
								),
								React.createElement(
										"ul",
										{ className: "nav navbar-nav navbar-right", style: { marginRight: '20px;0' } },
										React.createElement(
												"li",
												null,
												React.createElement(
														"a",
														{ href: "#", style: { marginRight: '-20px;0' } },
														"Login"
												)
										)
								)
						)
				);
		}
});

module.exports = Header;

},{"react":"react"}],7:[function(require,module,exports){
var React = require('react');
var Modal = require('react-bootstrap').Modal;
var EmployeeApiRequest = require('../apiRequest/EmployeeApiRequest');
var AttendanceApiRequest = require('../apiRequest/AttendanceApiRequest');
var PermissionApiRequest = require('../apiRequest/PermissionApiRequest');

function getEmployeeState() {
    var all = EmployeeApiRequest.getAll();
    return {
        allEmployeeList: all
    };
};

function getAttendanceState() {
    var all = AttendanceApiRequest.getAll();
    return {
        allAttendanceList: all
    };
};

function getPermissionState() {
    var all = PermissionApiRequest.getAll();
    return {
        allPermissionList: all
    };
};

var Home = React.createClass({
    displayName: 'Home',


    getInitialState: function () {
        EmployeeApiRequest.addChangeListener(this._onChange);
        EmployeeApiRequest.loadAllEmployeeList();

        AttendanceApiRequest.addChangeListener(this._onChange);
        AttendanceApiRequest.loadAllAttendanceList();

        PermissionApiRequest.addChangeListener(this._onChange);
        PermissionApiRequest.loadAllPermissionList();

        return {
            allEmployeeList: EmployeeApiRequest.getAll(),
            allAttendanceList: AttendanceApiRequest.getAll(),
            allPermissionList: PermissionApiRequest.getAll()
        };
    },
    _onChange: function () {
        this.setState(getEmployeeState());
        this.setState(getAttendanceState());
        this.setState(getPermissionState());
    },
    render: function () {
        var allEmployeeList = this.state.allEmployeeList;
        var allAttendanceList = this.state.allAttendanceList;
        var allPermissionList = this.state.allPermissionList;

        var employeeBody = [];
        var attendanceBody = [];
        var permissionBody = [];

        for (var key in allEmployeeList) {
            var item = allEmployeeList[key];
            employeeBody.push(React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['id']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['employeeID']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['employeeName']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['employeeEmail']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['admin']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['permission']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['deleteFlag']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary btn-link', 'data-toggle': 'modal', 'data-target': '#history' },
                            React.createElement(
                                'font',
                                null,
                                React.createElement(
                                    'font',
                                    null,
                                    'Delete'
                                )
                            )
                        )
                    )
                )
            ));
        }

        for (var key in allAttendanceList) {
            var item = allAttendanceList[key];
            attendanceBody.push(React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['id']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['employeeID']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['arrivalTime']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['departureTime']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['finish']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['managerEmployeeID']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['deleteFlag']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary btn-link', 'data-toggle': 'modal', 'data-target': '#history' },
                            React.createElement(
                                'font',
                                null,
                                React.createElement(
                                    'font',
                                    null,
                                    'Delete'
                                )
                            )
                        )
                    )
                )
            ));
        }

        for (var key in allPermissionList) {
            var item = allPermissionList[key];
            permissionBody.push(React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['id']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['employeeID']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['isPermission']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'font',
                        null,
                        React.createElement(
                            'font',
                            null,
                            item['isPermission']
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary btn-link', 'data-toggle': 'modal', 'data-target': '#history' },
                            React.createElement(
                                'font',
                                null,
                                React.createElement(
                                    'font',
                                    null,
                                    'Granted'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary btn-link', 'data-toggle': 'modal', 'data-target': '#history' },
                            React.createElement(
                                'font',
                                null,
                                React.createElement(
                                    'font',
                                    null,
                                    'Delete'
                                )
                            )
                        )
                    )
                )
            ));
        }

        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                { className: 'nav nav-tabs' },
                React.createElement(
                    'li',
                    { style: { padding: '13px', fontsize: '18px' } },
                    'Dashboard'
                ),
                React.createElement(
                    'li',
                    { className: 'active' },
                    React.createElement(
                        'a',
                        { href: '#employee', 'data-toggle': 'tab' },
                        'Employee'
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#attendance', 'data-toggle': 'tab' },
                        'Attendance'
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#permission', 'data-toggle': 'tab' },
                        'Permission'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'tab-content' },
                React.createElement(
                    'div',
                    { className: 'tab-pane active', id: 'employee' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-xs-10' },
                            React.createElement(
                                'h4',
                                { style: { marginleft: '50px' } },
                                'All employee list'
                            ),
                            React.createElement(
                                'table',
                                { className: 'table table-striped table-bordered' },
                                React.createElement(
                                    'thead',
                                    { style: { backgroundColor: '#7FFFD4' } },
                                    React.createElement(
                                        'tr',
                                        { style: { height: '30px' } },
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'ID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'EmployeeID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'EmployeeName'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'EmployeeEmail'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'Admin'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'Permission'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'DeleteFlag'
                                                )
                                            )
                                        ),
                                        React.createElement('th', null)
                                    )
                                ),
                                React.createElement(
                                    'tbody',
                                    null,
                                    employeeBody
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'tab-pane ', id: 'attendance' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-xs-10' },
                            React.createElement(
                                'h4',
                                { style: { marginleft: '50px' } },
                                'All attendance list'
                            ),
                            React.createElement(
                                'table',
                                { className: 'table table-striped table-bordered' },
                                React.createElement(
                                    'thead',
                                    { style: { backgroundColor: '#7FFFD4' } },
                                    React.createElement(
                                        'tr',
                                        { style: { height: '30px' } },
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'ID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'EmployeeID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'ArrivalTime'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'DepartureTime'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'Finish'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'ManagerEmployeeID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'DeleteFlag'
                                                )
                                            )
                                        ),
                                        React.createElement('th', null)
                                    )
                                ),
                                React.createElement(
                                    'tbody',
                                    null,
                                    attendanceBody
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'tab-pane ', id: 'permission' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-xs-10' },
                            React.createElement(
                                'h4',
                                { style: { marginleft: '50px' } },
                                'All permission list'
                            ),
                            React.createElement(
                                'table',
                                { className: 'table table-striped table-bordered' },
                                React.createElement(
                                    'thead',
                                    { style: { backgroundColor: '#7FFFD4' } },
                                    React.createElement(
                                        'tr',
                                        { style: { height: '30px' } },
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'ID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'EmployeeID'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'IsPermission'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'th',
                                            null,
                                            React.createElement(
                                                'font',
                                                null,
                                                React.createElement(
                                                    'font',
                                                    null,
                                                    'DeleteFlag'
                                                )
                                            )
                                        ),
                                        React.createElement('th', null),
                                        React.createElement('th', null)
                                    )
                                ),
                                React.createElement(
                                    'tbody',
                                    null,
                                    permissionBody
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = Home;

},{"../apiRequest/AttendanceApiRequest":1,"../apiRequest/EmployeeApiRequest":2,"../apiRequest/PermissionApiRequest":3,"react":"react","react-bootstrap":"react-bootstrap"}],8:[function(require,module,exports){
var React = require('react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');

var Main = React.createClass({
  displayName: 'Main',


  /**
   * @return {object}
   */
  render: function () {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(Header, null),
      this.props.children,
      React.createElement(Footer, null)
    );
  }
});

module.exports = Main;

},{"./Footer.react":5,"./Header.react":6,"react":"react"}],9:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQXR0ZW5kYW5jZUFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvRW1wbG95ZWVBcGlSZXF1ZXN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcGlSZXF1ZXN0L1Blcm1pc3Npb25BcGlSZXF1ZXN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHAuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvRm9vdGVyLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL0hlYWRlci5yZWFjdC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9Ib21lLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01haW4ucmVhY3QuanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQSxJQUFJLGVBQWUsUUFBUSxRQUFSLEVBQWtCLFlBQXJDO0FBQ0EsSUFBSSxTQUFTLFFBQVEsZUFBUixDQUFiOztBQUVBLElBQUksZUFBZSxtQkFBbkI7QUFDQSxJQUFJLGlCQUFpQixxQkFBckI7O0FBRUEsSUFBSSxvQkFBb0IsRUFBeEI7QUFDQSxJQUFJLFlBQVksRUFBaEI7O0FBRUEsSUFBSSx1QkFBdUIsT0FBTyxFQUFQLEVBQVcsYUFBYSxTQUF4QixFQUFtQzs7QUFFMUQsWUFBUSxZQUFZO0FBQ2hCLGVBQU8saUJBQVA7QUFDSCxLQUp5RDtBQUsxRCxpQkFBYSxZQUFZO0FBQ3JCLGVBQU8sU0FBUDtBQUNILEtBUHlEO0FBUTFELDJCQUF1QixZQUFZO0FBQy9CLFlBQUksSUFBSSxTQUFTLFdBQVQsQ0FBcUIsb0JBQXJCLENBQTBD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdBdHRlbmRhbmNlLUNoYW5nZSc7XG52YXIgUkVTUE9OU0VfRVZFTlQgPSAnQXR0ZW5kYW5jZS1SZXNwb25zZSc7XG5cbnZhciBhbGxBdHRlbmRhbmNlTGlzdCA9IHt9O1xudmFyIF9yZXNwb25zZSA9IHt9O1xuXG52YXIgQXR0ZW5kYW5jZUFwaVJlcXVlc3QgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICAgIGdldEFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWxsQXR0ZW5kYW5jZUxpc3Q7XG4gICAgfSxcbiAgICBnZXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3Jlc3BvbnNlO1xuICAgIH0sXG4gICAgbG9hZEFsbEF0dGVuZGFuY2VMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0ganNSb3V0ZXMuY29udHJvbGxlcnMuQXR0ZW5kYW5jZUNvbnRyb2xsZXIuYXR0ZW5kYW5jZXMoKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogci51cmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICAgICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0ID0ge307XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgIH0sXG4gICAgZW1pdFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChSRVNQT05TRV9FVkVOVCk7XG4gICAgfSxcblxuICAgIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGFkZFJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dGVuZGFuY2VBcGlSZXF1ZXN0O1xuIiwiXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdFbXBsb3llZS1DaGFuZ2UnO1xudmFyIFJFU1BPTlNFX0VWRU5UID0gJ0VtcGxveWVlLVJlc3BvbnNlJztcblxudmFyIGFsbEVtcGxveWVlTGlzdCA9IHt9O1xudmFyIF9yZXNwb25zZSA9IHt9O1xuXG52YXIgRW1wbG95ZWVBcGlSZXF1ZXN0ID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgICBnZXRBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFsbEVtcGxveWVlTGlzdDtcbiAgICB9LFxuICAgIGdldFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgfSxcbiAgICBsb2FkQWxsRW1wbG95ZWVMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0ganNSb3V0ZXMuY29udHJvbGxlcnMuRW1wbG95ZWVDb250cm9sbGVyLmVtcGxveWVlcygpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiByLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGxFbXBsb3llZUxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIEVtcGxveWVlQXBpUmVxdWVzdC5lbWl0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgICBhbGxFbXBsb3llZUxpc3QgPSB7fTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICAgfSxcbiAgICBlbWl0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KFJFU1BPTlNFX0VWRU5UKTtcbiAgICB9LFxuXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgYWRkUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZVJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW1wbG95ZWVBcGlSZXF1ZXN0O1xuIiwiXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdFbXBsb3llZS1DaGFuZ2UnO1xudmFyIFJFU1BPTlNFX0VWRU5UID0gJ0VtcGxveWVlLVJlc3BvbnNlJztcblxudmFyIGFsbFBlcm1pc3Npb25MaXN0ID0ge307XG52YXIgX3Jlc3BvbnNlID0ge307XG5cbnZhciBQZXJtaXNzaW9uQXBpUmVxdWVzdCA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gICAgZ2V0QWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhbGxQZXJtaXNzaW9uTGlzdDtcbiAgICB9LFxuICAgIGdldFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgfSxcbiAgICBsb2FkQWxsUGVybWlzc2lvbkxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBqc1JvdXRlcy5jb250cm9sbGVycy5QZXJtaXNzaW9uQ29udHJvbGxlci5nZXRBbGxSZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiByLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGxQZXJtaXNzaW9uTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgUGVybWlzc2lvbkFwaVJlcXVlc3QuZW1pdENoYW5nZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxsUGVybWlzc2lvbkxpc3QgPSB7fTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICAgfSxcbiAgICBlbWl0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KFJFU1BPTlNFX0VWRU5UKTtcbiAgICB9LFxuXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgYWRkUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZVJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVybWlzc2lvbkFwaVJlcXVlc3Q7XG4iLCJcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZXI7XG52YXIgUm91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZTtcbnZhciBJbmRleFJvdXRlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuSW5kZXhSb3V0ZTtcbnZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLmhhc2hIaXN0b3J5O1xudmFyIFJvdXRlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGU7XG52YXIgTWFpbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NYWluLnJlYWN0Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ib21lLnJlYWN0Jyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cblJlYWN0RE9NLnJlbmRlcigoXG5cdCAgXHQ8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cblx0XHQgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufT5cblx0XHQgICAgXHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9Lz5cblx0XHQgICAgPC9Sb3V0ZT5cblx0ICAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb2FwcCcpKTsiLCJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4geyBjb21wb25lbnRDbGFzczogJ3AnIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXIgdGV4dC1jZW50ZXJcIj4gXG4gICAgICBcbiAgICAgPC9kaXY+XG4gICApO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIj5cblx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aGJhci1oZWFkZXJcIj5cblx0ICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkNpdHlOb3c8L2E+XG5cdCAgICAgIDwvZGl2PlxuXHQgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5SaWdodDonMjBweDswJ319PlxuXG5cdCAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgc3R5bGU9e3ttYXJnaW5SaWdodDonLTIwcHg7MCd9fT5Mb2dpbjwvYT48L2xpPlxuXHQgICAgICA8L3VsPlxuXHQgICAgPC9kaXY+XG5cdDwvbmF2PlxuICAgICk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE1vZGFsID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwJykuTW9kYWw7XG52YXIgRW1wbG95ZWVBcGlSZXF1ZXN0ID0gcmVxdWlyZSgnLi4vYXBpUmVxdWVzdC9FbXBsb3llZUFwaVJlcXVlc3QnKTtcbnZhciBBdHRlbmRhbmNlQXBpUmVxdWVzdCA9IHJlcXVpcmUoJy4uL2FwaVJlcXVlc3QvQXR0ZW5kYW5jZUFwaVJlcXVlc3QnKTtcbnZhciBQZXJtaXNzaW9uQXBpUmVxdWVzdCA9IHJlcXVpcmUoJy4uL2FwaVJlcXVlc3QvUGVybWlzc2lvbkFwaVJlcXVlc3QnKTtcblxuZnVuY3Rpb24gZ2V0RW1wbG95ZWVTdGF0ZSgpIHtcbiAgICB2YXIgYWxsID0gRW1wbG95ZWVBcGlSZXF1ZXN0LmdldEFsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbEVtcGxveWVlTGlzdDogYWxsXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEF0dGVuZGFuY2VTdGF0ZSgpIHtcbiAgICB2YXIgYWxsID0gQXR0ZW5kYW5jZUFwaVJlcXVlc3QuZ2V0QWxsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3Q6IGFsbFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBnZXRQZXJtaXNzaW9uU3RhdGUoKSB7XG4gICAgdmFyIGFsbCA9IFBlcm1pc3Npb25BcGlSZXF1ZXN0LmdldEFsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbFBlcm1pc3Npb25MaXN0OiBhbGxcbiAgICB9O1xufTtcblxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRW1wbG95ZWVBcGlSZXF1ZXN0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgRW1wbG95ZWVBcGlSZXF1ZXN0LmxvYWRBbGxFbXBsb3llZUxpc3QoKTtcblxuICAgICAgICBBdHRlbmRhbmNlQXBpUmVxdWVzdC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgIEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmxvYWRBbGxBdHRlbmRhbmNlTGlzdCgpO1xuXG4gICAgICAgIFBlcm1pc3Npb25BcGlSZXF1ZXN0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgUGVybWlzc2lvbkFwaVJlcXVlc3QubG9hZEFsbFBlcm1pc3Npb25MaXN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsbEVtcGxveWVlTGlzdDogRW1wbG95ZWVBcGlSZXF1ZXN0LmdldEFsbCgpLFxuICAgICAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3Q6IEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmdldEFsbCgpLFxuICAgICAgICAgICAgYWxsUGVybWlzc2lvbkxpc3Q6IFBlcm1pc3Npb25BcGlSZXF1ZXN0LmdldEFsbCgpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBfb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRFbXBsb3llZVN0YXRlKCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKGdldEF0dGVuZGFuY2VTdGF0ZSgpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRQZXJtaXNzaW9uU3RhdGUoKSk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFsbEVtcGxveWVlTGlzdCA9IHRoaXMuc3RhdGUuYWxsRW1wbG95ZWVMaXN0O1xuICAgICAgICB2YXIgYWxsQXR0ZW5kYW5jZUxpc3QgPSB0aGlzLnN0YXRlLmFsbEF0dGVuZGFuY2VMaXN0O1xuICAgICAgICB2YXIgYWxsUGVybWlzc2lvbkxpc3QgPSB0aGlzLnN0YXRlLmFsbFBlcm1pc3Npb25MaXN0O1xuXG4gICAgICAgIHZhciBlbXBsb3llZUJvZHkgPSBbXTtcbiAgICAgICAgdmFyIGF0dGVuZGFuY2VCb2R5ID0gW107XG4gICAgICAgIHZhciBwZXJtaXNzaW9uQm9keSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxFbXBsb3llZUxpc3QpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYWxsRW1wbG95ZWVMaXN0W2tleV07XG4gICAgICAgICAgICBlbXBsb3llZUJvZHkucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaWQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydlbXBsb3llZU5hbWUnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVFbWFpbCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydhZG1pbiddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydwZXJtaXNzaW9uJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2RlbGV0ZUZsYWcnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD1cIiNoaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250Pjxmb250PkRlbGV0ZTwvZm9udD48L2ZvbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFsbEF0dGVuZGFuY2VMaXN0KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbEF0dGVuZGFuY2VMaXN0W2tleV07XG4gICAgICAgICAgICBhdHRlbmRhbmNlQm9keS5wdXNoKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpZCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydlbXBsb3llZUlEJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2Fycml2YWxUaW1lJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2RlcGFydHVyZVRpbWUnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZmluaXNoJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ21hbmFnZXJFbXBsb3llZUlEJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2RlbGV0ZUZsYWcnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD1cIiNoaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250Pjxmb250PkRlbGV0ZTwvZm9udD48L2ZvbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFsbFBlcm1pc3Npb25MaXN0KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbFBlcm1pc3Npb25MaXN0W2tleV07XG4gICAgICAgICAgICBwZXJtaXNzaW9uQm9keS5wdXNoKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpZCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydlbXBsb3llZUlEJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2lzUGVybWlzc2lvbiddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpc1Blcm1pc3Npb24nXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD1cIiNoaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250Pjxmb250PkdyYW50ZWQ8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5EZWxldGU8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7cGFkZGluZzogJzEzcHgnLCBmb250c2l6ZTogJzE4cHgnfX0+RGFzaGJvYXJkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjZW1wbG95ZWVcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkVtcGxveWVlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2F0dGVuZGFuY2VcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkF0dGVuZGFuY2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjcGVybWlzc2lvblwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+UGVybWlzc2lvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJlbXBsb3llZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5sZWZ0OiAnNTBweCd9fT5BbGwgZW1wbG95ZWUgbGlzdDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM3RkZGRDQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3toZWlnaHQ6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5JRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVJRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVOYW1lPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5FbXBsb3llZUVtYWlsPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5BZG1pbjwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+UGVybWlzc2lvbjwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RGVsZXRlRmxhZzwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wbG95ZWVCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBcIiBpZD1cImF0dGVuZGFuY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2lubGVmdDogJzUwcHgnfX0+QWxsIGF0dGVuZGFuY2UgbGlzdDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM3RkZGRDQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3toZWlnaHQ6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5JRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVJRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+QXJyaXZhbFRpbWU8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlcGFydHVyZVRpbWU8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkZpbmlzaDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+TWFuYWdlckVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlbGV0ZUZsYWc8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgXCIgaWQ9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbmxlZnQ6ICc1MHB4J319PkFsbCBwZXJtaXNzaW9uIGxpc3Q8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZGRkQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+SUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PklzUGVybWlzc2lvbjwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RGVsZXRlRmxhZzwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25Cb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL0hlYWRlci5yZWFjdCcpO1xudmFyIEZvb3RlciA9IHJlcXVpcmUoJy4vRm9vdGVyLnJlYWN0Jyk7XG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICBcdCAgICA8SGVhZGVyLz4gICAgICAgIFxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICBcdCAgICA8Rm9vdGVyLz5cblx0ICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIl19
