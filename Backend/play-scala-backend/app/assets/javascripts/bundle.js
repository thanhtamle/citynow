(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
    login: function (employee) {
        var r = jsRoutes.controllers.EmployeeController.login();
        $.ajax({
            url: r.url,
            dataType: 'json',
            data: employee,
            type: "post",
            cache: false,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                data['function'] = 'registerDepartment';
                _response = data;
                this.emitResponse();
            }.bind(this),
            error: function (xhr, status, err) {
                var data = {};
                data['function'] = 'registerDepartment';
                data['message'] = 'Register department error!';
                _response = data;
                this.emitResponse();
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

},{"events":14,"object-assign":"object-assign"}],2:[function(require,module,exports){

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

},{"events":14,"object-assign":"object-assign"}],3:[function(require,module,exports){

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

},{"events":14,"object-assign":"object-assign"}],4:[function(require,module,exports){

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

ReactDOM.render(React.createElement(
	Router,
	{ history: hashHistory },
	React.createElement(
		Route,
		{ path: '/', component: Main },
		React.createElement(IndexRoute, { component: Home }),
		React.createElement(Route, { path: '/login', component: Login }),
		React.createElement(Route, { path: '/dashboard', component: Dashboard }),
		React.createElement(Route, { path: '/userProfile', component: UserProfile }),
		React.createElement(Route, { path: '/table', component: Table }),
		React.createElement(Route, { path: '/map', component: Map }),
		React.createElement(Route, { path: '/notification', component: Notification })
	)
), document.getElementById('todoapp'));

},{"./components/Dashboard.react":5,"./components/Home.react":7,"./components/Login.react":8,"./components/Main.react":9,"./components/Map.react":10,"./components/Notification.react":11,"./components/Table.react":12,"./components/UserProfile.react":13,"react":"react","react-dom":"react-dom","react-router":"react-router"}],5:[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Notification = React.createClass({
    displayName: 'Notification',


    render: function () {

        return React.createElement(
            'div',
            { className: 'wrapper' },
            React.createElement(
                'div',
                { className: 'sidebar', 'data-color': 'purple', 'data-image': 'assets/images/sidebar-5.jpg' },
                React.createElement(
                    'div',
                    { className: 'sidebar-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'logo' },
                        React.createElement(
                            'a',
                            { href: 'http://www.citynow.jp', className: 'simple-text' },
                            'CityNow'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'nav' },
                        React.createElement(
                            'li',
                            { className: 'active' },
                            React.createElement(
                                Link,
                                { to: 'dashboard' },
                                React.createElement('i', { className: 'pe-7s-graph' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Dashboard'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'userProfile' },
                                React.createElement('i', { className: 'pe-7s-user' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'User Profile'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'table' },
                                React.createElement('i', { className: 'pe-7s-note2' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Attendance List'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'map' },
                                React.createElement('i', { className: 'pe-7s-map-marker' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Maps'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'notification' },
                                React.createElement('i', { className: 'pe-7s-bell' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Notifications'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'main-panel' },
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-fixed' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'navbar-header' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#navigation-example-2' },
                                React.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' })
                            ),
                            React.createElement(
                                'a',
                                { className: 'navbar-brand', href: '#' },
                                'Dashboard'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-left' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-dashboard' })
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-globe' }),
                                        React.createElement('b', { className: 'caret' }),
                                        React.createElement(
                                            'span',
                                            { className: 'notification' },
                                            '5'
                                        )
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 1'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 2'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 3'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 4'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another notification'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        React.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-right' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        'Account'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        'Dropdown',
                                        React.createElement('b', { className: 'caret' })
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement('li', { className: 'divider' }),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Separated link'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Log out'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'Email Statistics'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'category' },
                                            'Last Campaign Performance'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content' },
                                        React.createElement('div', { id: 'chartPreferences', className: 'ct-chart ct-perfect-fourth' }),
                                        React.createElement(
                                            'div',
                                            { className: 'footer' },
                                            React.createElement(
                                                'div',
                                                { className: 'legend' },
                                                React.createElement('i', { className: 'fa fa-circle text-info' }),
                                                ' Open',
                                                React.createElement('i', { className: 'fa fa-circle text-danger' }),
                                                ' Bounce',
                                                React.createElement('i', { className: 'fa fa-circle text-warning' }),
                                                ' Unsubscribe'
                                            ),
                                            React.createElement('hr', null),
                                            React.createElement(
                                                'div',
                                                { className: 'stats' },
                                                React.createElement('i', { className: 'fa fa-clock-o' }),
                                                ' Campaign sent 2 days ago'
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-8' },
                                React.createElement(
                                    'div',
                                    { className: 'card' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'Users Behavior'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'category' },
                                            '24 Hours performance'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content' },
                                        React.createElement('div', { id: 'chartHours', className: 'ct-chart' }),
                                        React.createElement(
                                            'div',
                                            { className: 'footer' },
                                            React.createElement(
                                                'div',
                                                { className: 'legend' },
                                                React.createElement('i', { className: 'fa fa-circle text-info' }),
                                                ' Open',
                                                React.createElement('i', { className: 'fa fa-circle text-danger' }),
                                                ' Click',
                                                React.createElement('i', { className: 'fa fa-circle text-warning' }),
                                                ' Click Second Time'
                                            ),
                                            React.createElement('hr', null),
                                            React.createElement(
                                                'div',
                                                { className: 'stats' },
                                                React.createElement('i', { className: 'fa fa-history' }),
                                                ' Updated 3 minutes ago'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-6' },
                                React.createElement(
                                    'div',
                                    { className: 'card ' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            '2014 Sales'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'category' },
                                            'All products including Taxes'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content' },
                                        React.createElement('div', { id: 'chartActivity', className: 'ct-chart' }),
                                        React.createElement(
                                            'div',
                                            { className: 'footer' },
                                            React.createElement(
                                                'div',
                                                { className: 'legend' },
                                                React.createElement('i', { className: 'fa fa-circle text-info' }),
                                                ' Tesla Model S',
                                                React.createElement('i', { className: 'fa fa-circle text-danger' }),
                                                ' BMW 5 Series'
                                            ),
                                            React.createElement('hr', null),
                                            React.createElement(
                                                'div',
                                                { className: 'stats' },
                                                React.createElement('i', { className: 'fa fa-check' }),
                                                ' Data information certified'
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-6' },
                                React.createElement(
                                    'div',
                                    { className: 'card ' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'Tasks'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'category' },
                                            'Backend development'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content' },
                                        React.createElement(
                                            'div',
                                            { className: 'table-full-width' },
                                            React.createElement(
                                                'table',
                                                { className: 'table' },
                                                React.createElement(
                                                    'tbody',
                                                    null,
                                                    React.createElement(
                                                        'tr',
                                                        null,
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            React.createElement(
                                                                'label',
                                                                { className: 'checkbox' },
                                                                React.createElement('input', { type: 'checkbox', value: '', 'data-toggle': 'checkbox' })
                                                            )
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            'Sign contract for "What are conference organizers afraid of?"'
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            { className: 'td-actions text-right' },
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Edit Task', className: 'btn btn-info btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-edit' })
                                                            ),
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Remove', className: 'btn btn-danger btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-times' })
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'tr',
                                                        null,
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            React.createElement(
                                                                'label',
                                                                { className: 'checkbox' },
                                                                React.createElement('input', { type: 'checkbox', value: '', 'data-toggle': 'checkbox', checked: '' })
                                                            )
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            'Lines From Great Russian Literature? Or E-mails From My Boss?'
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            { className: 'td-actions text-right' },
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Edit Task', className: 'btn btn-info btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-edit' })
                                                            ),
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Remove', className: 'btn btn-danger btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-times' })
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'tr',
                                                        null,
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            React.createElement(
                                                                'label',
                                                                { className: 'checkbox' },
                                                                React.createElement('input', { type: 'checkbox', value: '', 'data-toggle': 'checkbox', checked: '' })
                                                            )
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            { className: 'td-actions text-right' },
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Edit Task', className: 'btn btn-info btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-edit' })
                                                            ),
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Remove', className: 'btn btn-danger btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-times' })
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'tr',
                                                        null,
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            React.createElement(
                                                                'label',
                                                                { className: 'checkbox' },
                                                                React.createElement('input', { type: 'checkbox', value: '', 'data-toggle': 'checkbox' })
                                                            )
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            'Create 4 Invisible User Experiences you Never Knew About'
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            { className: 'td-actions text-right' },
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Edit Task', className: 'btn btn-info btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-edit' })
                                                            ),
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Remove', className: 'btn btn-danger btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-times' })
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'tr',
                                                        null,
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            React.createElement(
                                                                'label',
                                                                { className: 'checkbox' },
                                                                React.createElement('input', { type: 'checkbox', value: '', 'data-toggle': 'checkbox' })
                                                            )
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            'Read "Following makes Medium better"'
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            { className: 'td-actions text-right' },
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Edit Task', className: 'btn btn-info btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-edit' })
                                                            ),
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Remove', className: 'btn btn-danger btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-times' })
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'tr',
                                                        null,
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            React.createElement(
                                                                'label',
                                                                { className: 'checkbox' },
                                                                React.createElement('input', { type: 'checkbox', value: '', 'data-toggle': 'checkbox' })
                                                            )
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            null,
                                                            'Unfollow 5 enemies from twitter'
                                                        ),
                                                        React.createElement(
                                                            'td',
                                                            { className: 'td-actions text-right' },
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Edit Task', className: 'btn btn-info btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-edit' })
                                                            ),
                                                            React.createElement(
                                                                'button',
                                                                { type: 'button', rel: 'tooltip', title: 'Remove', className: 'btn btn-danger btn-simple btn-xs' },
                                                                React.createElement('i', { className: 'fa fa-times' })
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'footer' },
                                            React.createElement('hr', null),
                                            React.createElement(
                                                'div',
                                                { className: 'stats' },
                                                React.createElement('i', { className: 'fa fa-history' }),
                                                ' Updated 3 minutes ago'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'footer',
                    { className: 'footer' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'nav',
                            { className: 'pull-left' },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Home'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: 'http://www.citynow.jp' },
                                        'Company'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Blog'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'copyright pull-right' },
                            '© 2016 ',
                            React.createElement(
                                'a',
                                { href: 'http://www.citynow.jp' },
                                'CityNow'
                            ),
                            ' Co.Ltd'
                        )
                    )
                )
            )
        );
    }
});

module.exports = Notification;

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
var React = require('react');

var Footer = React.createClass({
    displayName: 'Footer',

    getDefaultProps() {
        return { componentClass: 'p' };
    },
    render: function () {
        return React.createElement('div', null);
    }
});

module.exports = Footer;

},{"react":"react"}],7:[function(require,module,exports){
var React = require('react');
var Modal = require('react-bootstrap').Modal;
var EmployeeApiRequest = require('../apiRequest/AccountApiRequest');
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

},{"../apiRequest/AccountApiRequest":1,"../apiRequest/AttendanceApiRequest":2,"../apiRequest/PermissionApiRequest":3,"react":"react","react-bootstrap":"react-bootstrap"}],8:[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;
var AccountApiRequest = require('../apiRequest/AccountApiRequest');

var Login = React.createClass({
    displayName: 'Login',


    getInitialState: function () {

        return {
            loginErrorAlert: ""
        };
    },
    componentDidMount: function () {
        AccountApiRequest.addChangeListener(this._onChange);
        AccountApiRequest.addResponseListener(this._onResponse);
    },
    componentWillUnmount: function () {
        AccountApiRequest.removeChangeListener(this._onChange);
        AccountApiRequest.removeResponseListener(this._onResponse);
    },
    _onChange: function () {},
    _onResponse: function () {},
    loginClicked: function () {
        var userName = document.getElementById('userName').value;
        var passWord = document.getElementById('passWord').value;
    },
    showLoginError: function () {
        var element = React.createElement(
            'p',
            { className: 'error' },
            'Error'
        );
        this.setState({ loginErrorAlert: element });
    },
    render: function () {

        return React.createElement(
            'div',
            { className: 'login-page' },
            React.createElement(
                'div',
                { className: 'form' },
                React.createElement(
                    'form',
                    { className: 'login-form', onSubmit: this.loginClicked },
                    React.createElement(
                        'p',
                        { className: 'message' },
                        React.createElement(
                            'h1',
                            null,
                            'CityNow'
                        )
                    ),
                    React.createElement('br', null),
                    this.state.loginErrorAlert,
                    React.createElement('br', null),
                    React.createElement('input', { id: 'userName', type: 'text', placeholder: 'Username' }),
                    React.createElement('input', { id: 'passWord', type: 'password', placeholder: 'Password' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'login'
                    )
                )
            )
        );
    }
});

module.exports = Login;

},{"../apiRequest/AccountApiRequest":1,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
var React = require('react');
var Footer = require('./Footer.react');

var Main = React.createClass({
    displayName: 'Main',


    render: function () {
        return React.createElement(
            'div',
            null,
            this.props.children,
            React.createElement(Footer, null)
        );
    }
});

module.exports = Main;

},{"./Footer.react":6,"react":"react"}],10:[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Map = React.createClass({
    displayName: 'Map',


    render: function () {

        return React.createElement(
            'div',
            { className: 'wrapper' },
            React.createElement(
                'div',
                { className: 'sidebar', 'data-color': 'purple', 'data-image': 'assets/images/sidebar-5.jpg' },
                React.createElement(
                    'div',
                    { className: 'sidebar-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'logo' },
                        React.createElement(
                            'a',
                            { href: 'http://www.citynow.jp', className: 'simple-text' },
                            'CityNow'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'nav' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'dashboard' },
                                React.createElement('i', { className: 'pe-7s-graph' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Dashboard'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'userProfile' },
                                React.createElement('i', { className: 'pe-7s-user' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'User Profile'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'table' },
                                React.createElement('i', { className: 'pe-7s-note2' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Attendance List'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'active' },
                            React.createElement(
                                Link,
                                { to: 'map' },
                                React.createElement('i', { className: 'pe-7s-map-marker' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Maps'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'notification' },
                                React.createElement('i', { className: 'pe-7s-bell' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Notifications'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'main-panel' },
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-fixed' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'navbar-header' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse',
                                    'data-target': '#navigation-example-2' },
                                React.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' })
                            ),
                            React.createElement(
                                'a',
                                { className: 'navbar-brand', href: '#' },
                                'Maps'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-left' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-dashboard' })
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-globe' }),
                                        React.createElement('b', { className: 'caret' }),
                                        React.createElement(
                                            'span',
                                            { className: 'notification' },
                                            '5'
                                        )
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 1'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 2'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 3'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 4'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another notification'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        React.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-right' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        'Account'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        'Dropdown',
                                        React.createElement('b', { className: 'caret' })
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement('li', { className: 'divider' }),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Separated link'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Log out'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { id: 'map' })
            )
        );
    }
});

module.exports = Map;

},{"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Notification = React.createClass({
    displayName: 'Notification',


    render: function () {

        return React.createElement(
            'div',
            { className: 'wrapper' },
            React.createElement(
                'div',
                { className: 'sidebar', 'data-color': 'purple', 'data-image': 'assets/images/sidebar-5.jpg' },
                React.createElement(
                    'div',
                    { className: 'sidebar-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'logo' },
                        React.createElement(
                            'a',
                            { href: 'http://www.citynow.jp', className: 'simple-text' },
                            'CityNow'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'nav' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'dashboard' },
                                React.createElement('i', { className: 'pe-7s-graph' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Dashboard'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'userProfile' },
                                React.createElement('i', { className: 'pe-7s-user' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'User Profile'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'table' },
                                React.createElement('i', { className: 'pe-7s-note2' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Attendance List'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'map' },
                                React.createElement('i', { className: 'pe-7s-map-marker' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Maps'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'active' },
                            React.createElement(
                                Link,
                                { to: 'notification' },
                                React.createElement('i', { className: 'pe-7s-bell' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Notifications'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'main-panel' },
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-fixed' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'navbar-header' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#navigation-example-2' },
                                React.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' })
                            ),
                            React.createElement(
                                'a',
                                { className: 'navbar-brand', href: '#' },
                                'Notifications'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-left' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-dashboard' })
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-globe' }),
                                        React.createElement('b', { className: 'caret' }),
                                        React.createElement(
                                            'span',
                                            { className: 'notification' },
                                            '5'
                                        )
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 1'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 2'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 3'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 4'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another notification'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        React.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-right' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        'Account'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        'Dropdown',
                                        React.createElement('b', { className: 'caret' })
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement('li', { className: 'divider' }),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Separated link'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Log out'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'footer',
                    { className: 'footer' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'nav',
                            { className: 'pull-left' },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Home'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: 'http://www.citynow.jp' },
                                        'Company'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Blog'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'copyright pull-right' },
                            '© 2016 ',
                            React.createElement(
                                'a',
                                { href: 'http://www.citynow.jp' },
                                'CityNow'
                            ),
                            ' Co.Ltd'
                        )
                    )
                )
            )
        );
    }
});

module.exports = Notification;

},{"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var Table = React.createClass({
    displayName: 'Table',


    render: function () {

        return React.createElement(
            'div',
            { className: 'wrapper' },
            React.createElement(
                'div',
                { className: 'sidebar', 'data-color': 'purple', 'data-image': 'assets/images/sidebar-5.jpg' },
                React.createElement(
                    'div',
                    { className: 'sidebar-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'logo' },
                        React.createElement(
                            'a',
                            { href: 'http://www.citynow.jp', className: 'simple-text' },
                            'CityNow'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'nav' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'dashboard' },
                                React.createElement('i', { className: 'pe-7s-graph' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Dashboard'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'userProfile' },
                                React.createElement('i', { className: 'pe-7s-user' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'User Profile'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'active' },
                            React.createElement(
                                Link,
                                { to: 'table' },
                                React.createElement('i', { className: 'pe-7s-note2' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Attendance List'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'map' },
                                React.createElement('i', { className: 'pe-7s-map-marker' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Maps'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'notification' },
                                React.createElement('i', { className: 'pe-7s-bell' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Notifications'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'main-panel' },
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-fixed' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'navbar-header' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse',
                                    'data-target': '#navigation-example-2' },
                                React.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' })
                            ),
                            React.createElement(
                                'a',
                                { className: 'navbar-brand', href: '#' },
                                'Attendance List'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-left' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-dashboard' })
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-globe' }),
                                        React.createElement('b', { className: 'caret' }),
                                        React.createElement(
                                            'span',
                                            { className: 'notification' },
                                            '5'
                                        )
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 1'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 2'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 3'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 4'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another notification'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        React.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-right' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        'Account'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        'Dropdown',
                                        React.createElement('b', { className: 'caret' })
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement('li', { className: 'divider' }),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Separated link'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Log out'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12' },
                                React.createElement(
                                    'div',
                                    { className: 'card' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'Striped Table with Hover'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'category' },
                                            'Here is a subtitle for this table'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content table-responsive table-full-width' },
                                        React.createElement(
                                            'table',
                                            { className: 'table table-hover table-striped' },
                                            React.createElement(
                                                'thead',
                                                null,
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'ID'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Name'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Salary'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Country'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'City'
                                                )
                                            ),
                                            React.createElement(
                                                'tbody',
                                                null,
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '1'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Dakota Rice'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$36,738'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Niger'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Oud-Turnhout'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '2'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Minerva Hooper'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$23,789'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Curaçao'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Sinaai-Waas'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '3'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Sage Rodriguez'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$56,142'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Netherlands'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Baileux'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '4'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Philip Chaney'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$38,735'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Korea, South'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Overland Park'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '5'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Doris Greene'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$63,542'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Malawi'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Feldkirchen in Kärnten'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '6'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Mason Porter'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$78,615'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Chile'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Gloucester'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-12' },
                                React.createElement(
                                    'div',
                                    { className: 'card card-plain' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'Table on Plain Background'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'category' },
                                            'Here is a subtitle for this table'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content table-responsive table-full-width' },
                                        React.createElement(
                                            'table',
                                            { className: 'table table-hover' },
                                            React.createElement(
                                                'thead',
                                                null,
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'ID'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Name'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Salary'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Country'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'City'
                                                )
                                            ),
                                            React.createElement(
                                                'tbody',
                                                null,
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '1'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Dakota Rice'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$36,738'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Niger'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Oud-Turnhout'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '2'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Minerva Hooper'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$23,789'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Curaçao'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Sinaai-Waas'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '3'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Sage Rodriguez'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$56,142'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Netherlands'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Baileux'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '4'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Philip Chaney'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$38,735'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Korea, South'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Overland Park'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '5'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Doris Greene'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$63,542'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Malawi'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Feldkirchen in Kärnten'
                                                    )
                                                ),
                                                React.createElement(
                                                    'tr',
                                                    null,
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '6'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Mason Porter'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        '$78,615'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Chile'
                                                    ),
                                                    React.createElement(
                                                        'td',
                                                        null,
                                                        'Gloucester'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'footer',
                    { className: 'footer' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'nav',
                            { className: 'pull-left' },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Home'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: 'http://www.citynow.jp' },
                                        'Company'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Blog'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'copyright pull-right' },
                            '© 2016 ',
                            React.createElement(
                                'a',
                                { href: 'http://www.citynow.jp' },
                                'CityNow'
                            ),
                            ' Co.Ltd'
                        )
                    )
                )
            )
        );
    }
});

module.exports = Table;

},{"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var UserProfile = React.createClass({
    displayName: 'UserProfile',


    render: function () {

        return React.createElement(
            'div',
            { className: 'wrapper' },
            React.createElement(
                'div',
                { className: 'sidebar', 'data-color': 'purple', 'data-image': 'assets/images/sidebar-5.jpg' },
                React.createElement(
                    'div',
                    { className: 'sidebar-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'logo' },
                        React.createElement(
                            'a',
                            { href: 'http://www.citynow.jp', className: 'simple-text' },
                            'CityNow'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'nav' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'dashboard' },
                                React.createElement('i', { className: 'pe-7s-graph' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Dashboard'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'active' },
                            React.createElement(
                                Link,
                                { to: 'userProfile' },
                                React.createElement('i', { className: 'pe-7s-user' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'User Profile'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'table' },
                                React.createElement('i', { className: 'pe-7s-note2' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Attendance List'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'map' },
                                React.createElement('i', { className: 'pe-7s-map-marker' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Maps'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                Link,
                                { to: 'notification' },
                                React.createElement('i', { className: 'pe-7s-bell' }),
                                React.createElement(
                                    'p',
                                    null,
                                    'Notifications'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'main-panel' },
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-default navbar-fixed' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'navbar-header' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#navigation-example-2' },
                                React.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' }),
                                React.createElement('span', { className: 'icon-bar' })
                            ),
                            React.createElement(
                                'a',
                                { className: 'navbar-brand', href: '#' },
                                'Profile'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-left' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-dashboard' })
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        React.createElement('i', { className: 'fa fa-globe' }),
                                        React.createElement('b', { className: 'caret' }),
                                        React.createElement(
                                            'span',
                                            { className: 'notification' },
                                            '5'
                                        )
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 1'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 2'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 3'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Notification 4'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another notification'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        React.createElement('i', { className: 'fa fa-search' })
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-right' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '' },
                                        'Account'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'dropdown' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                        'Dropdown',
                                        React.createElement('b', { className: 'caret' })
                                    ),
                                    React.createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Another action'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Something'
                                            )
                                        ),
                                        React.createElement('li', { className: 'divider' }),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'Separated link'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Log out'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-8' },
                                React.createElement(
                                    'div',
                                    { className: 'card' },
                                    React.createElement(
                                        'div',
                                        { className: 'header' },
                                        React.createElement(
                                            'h4',
                                            { className: 'title' },
                                            'Edit Profile'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content' },
                                        React.createElement(
                                            'form',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-5' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'Company (disabled)'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', disabled: true, placeholder: 'Company', value: 'Creative Code Inc.' })
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-3' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'Username'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Username', value: 'michael23' })
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-4' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            { 'for': 'exampleInputEmail1' },
                                                            'Email address'
                                                        ),
                                                        React.createElement('input', { type: 'email', className: 'form-control', placeholder: 'Email' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-6' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'First Name'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Company', value: 'Mike' })
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-6' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'Last Name'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Last Name', value: 'Andrew' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-12' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'Address'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Home Address', value: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-4' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'City'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'City', value: 'Mike' })
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-4' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'Country'
                                                        ),
                                                        React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Country', value: 'Andrew' })
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-4' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'Postal Code'
                                                        ),
                                                        React.createElement('input', { type: 'number', className: 'form-control', placeholder: 'ZIP Code' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-12' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'form-group' },
                                                        React.createElement(
                                                            'label',
                                                            null,
                                                            'About Me'
                                                        ),
                                                        React.createElement(
                                                            'textarea',
                                                            { rows: '5', className: 'form-control', placeholder: 'Here can be your description', value: 'Mike' },
                                                            'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'button',
                                                { type: 'submit', className: 'btn btn-info btn-fill pull-right' },
                                                'Update Profile'
                                            ),
                                            React.createElement('div', { className: 'clearfix' })
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card card-user' },
                                    React.createElement(
                                        'div',
                                        { className: 'image' },
                                        React.createElement('img', { src: 'https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400', alt: '...' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'content' },
                                        React.createElement(
                                            'div',
                                            { className: 'author' },
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                React.createElement('img', { className: 'avatar border-gray', src: 'assets/images/faces/face-3.jpg', alt: '...' }),
                                                React.createElement(
                                                    'h4',
                                                    { className: 'title' },
                                                    'Mike Andrew',
                                                    React.createElement('br', null),
                                                    React.createElement(
                                                        'small',
                                                        null,
                                                        'michael24'
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'description text-center' },
                                            '"Lamborghini Mercy',
                                            React.createElement('br', null),
                                            'Your chick she so thirsty',
                                            React.createElement('br', null),
                                            'I\'m in that two seat Lambo"',
                                            React.createElement('br', null)
                                        )
                                    ),
                                    React.createElement('hr', null),
                                    React.createElement(
                                        'div',
                                        { className: 'text-center' },
                                        React.createElement(
                                            'button',
                                            { href: '#', className: 'btn btn-simple' },
                                            React.createElement('i', { className: 'fa fa-facebook-square' })
                                        ),
                                        React.createElement(
                                            'button',
                                            { href: '#', className: 'btn btn-simple' },
                                            React.createElement('i', { className: 'fa fa-twitter' })
                                        ),
                                        React.createElement(
                                            'button',
                                            { href: '#', className: 'btn btn-simple' },
                                            React.createElement('i', { className: 'fa fa-google-plus-square' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'footer',
                    { className: 'footer' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'nav',
                            { className: 'pull-left' },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Home'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: 'http://www.citynow.jp' },
                                        'Company'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'a',
                                        { href: '#' },
                                        'Blog'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'copyright pull-right' },
                            '© 2016 ',
                            React.createElement(
                                'a',
                                { href: 'http://www.citynow.jp' },
                                'CityNow'
                            ),
                            ' Co.Ltd'
                        )
                    )
                )
            )
        );
    }
});

module.exports = UserProfile;

},{"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQWNjb3VudEFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQXR0ZW5kYW5jZUFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvUGVybWlzc2lvbkFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwcC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9EYXNoYm9hcmQucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvRm9vdGVyLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL0hvbWUucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTG9naW4ucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWFpbi5yZWFjdC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXAucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1RhYmxlLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1VzZXJQcm9maWxlLnJlYWN0LmpzIiwibm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQ0EsSUFBSSxlQUFlLFFBQVEsUUFBUixFQUFrQixZQUFyQztBQUNBLElBQUksU0FBUyxRQUFRLGVBQVIsQ0FBYjs7QUFFQSxJQUFJLGVBQWUsaUJBQW5CO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ0VtcGxveWVlLUNoYW5nZSc7XG52YXIgUkVTUE9OU0VfRVZFTlQgPSAnRW1wbG95ZWUtUmVzcG9uc2UnO1xuXG52YXIgYWxsRW1wbG95ZWVMaXN0ID0ge307XG52YXIgX3Jlc3BvbnNlID0ge307XG5cbnZhciBFbXBsb3llZUFwaVJlcXVlc3QgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICAgIGdldEFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWxsRW1wbG95ZWVMaXN0O1xuICAgIH0sXG4gICAgZ2V0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIGxvYWRBbGxFbXBsb3llZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBqc1JvdXRlcy5jb250cm9sbGVycy5FbXBsb3llZUNvbnRyb2xsZXIuZW1wbG95ZWVzKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHIudXJsLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsbEVtcGxveWVlTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgRW1wbG95ZWVBcGlSZXF1ZXN0LmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICAgICAgICAgIGFsbEVtcGxveWVlTGlzdCA9IHt9O1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbG9naW46IGZ1bmN0aW9uIChlbXBsb3llZSkge1xuICAgICAgICB2YXIgciA9IGpzUm91dGVzLmNvbnRyb2xsZXJzLkVtcGxveWVlQ29udHJvbGxlci5sb2dpbigpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiByLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBlbXBsb3llZSxcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhWydmdW5jdGlvbiddID0gJ3JlZ2lzdGVyRGVwYXJ0bWVudCc7XG4gICAgICAgICAgICAgICAgX3Jlc3BvbnNlID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBkYXRhWydmdW5jdGlvbiddID0gJ3JlZ2lzdGVyRGVwYXJ0bWVudCc7XG4gICAgICAgICAgICAgICAgZGF0YVsnbWVzc2FnZSddID0gJ1JlZ2lzdGVyIGRlcGFydG1lbnQgZXJyb3IhJztcbiAgICAgICAgICAgICAgICBfcmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc3BvbnNlKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgIH0sXG4gICAgZW1pdFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChSRVNQT05TRV9FVkVOVCk7XG4gICAgfSxcblxuICAgIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGFkZFJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtcGxveWVlQXBpUmVxdWVzdDtcbiIsIlxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnQXR0ZW5kYW5jZS1DaGFuZ2UnO1xudmFyIFJFU1BPTlNFX0VWRU5UID0gJ0F0dGVuZGFuY2UtUmVzcG9uc2UnO1xuXG52YXIgYWxsQXR0ZW5kYW5jZUxpc3QgPSB7fTtcbnZhciBfcmVzcG9uc2UgPSB7fTtcblxudmFyIEF0dGVuZGFuY2VBcGlSZXF1ZXN0ID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgICBnZXRBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFsbEF0dGVuZGFuY2VMaXN0O1xuICAgIH0sXG4gICAgZ2V0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIGxvYWRBbGxBdHRlbmRhbmNlTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IGpzUm91dGVzLmNvbnRyb2xsZXJzLkF0dGVuZGFuY2VDb250cm9sbGVyLmF0dGVuZGFuY2VzKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHIudXJsLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICBBdHRlbmRhbmNlQXBpUmVxdWVzdC5lbWl0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgICBhbGxBdHRlbmRhbmNlTGlzdCA9IHt9O1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgICB9LFxuICAgIGVtaXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoUkVTUE9OU0VfRVZFTlQpO1xuICAgIH0sXG5cbiAgICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBhZGRSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdHRlbmRhbmNlQXBpUmVxdWVzdDtcbiIsIlxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnRW1wbG95ZWUtQ2hhbmdlJztcbnZhciBSRVNQT05TRV9FVkVOVCA9ICdFbXBsb3llZS1SZXNwb25zZSc7XG5cbnZhciBhbGxQZXJtaXNzaW9uTGlzdCA9IHt9O1xudmFyIF9yZXNwb25zZSA9IHt9O1xuXG52YXIgUGVybWlzc2lvbkFwaVJlcXVlc3QgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICAgIGdldEFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWxsUGVybWlzc2lvbkxpc3Q7XG4gICAgfSxcbiAgICBnZXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3Jlc3BvbnNlO1xuICAgIH0sXG4gICAgbG9hZEFsbFBlcm1pc3Npb25MaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0ganNSb3V0ZXMuY29udHJvbGxlcnMuUGVybWlzc2lvbkNvbnRyb2xsZXIuZ2V0QWxsUmVxdWVzdFBlcm1pc3Npb24oKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogci51cmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxsUGVybWlzc2lvbkxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIFBlcm1pc3Npb25BcGlSZXF1ZXN0LmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICAgICAgICAgIGFsbFBlcm1pc3Npb25MaXN0ID0ge307XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgIH0sXG4gICAgZW1pdFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChSRVNQT05TRV9FVkVOVCk7XG4gICAgfSxcblxuICAgIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGFkZFJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcm1pc3Npb25BcGlSZXF1ZXN0O1xuIiwiXG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGVyO1xudmFyIFJvdXRlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGU7XG52YXIgSW5kZXhSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkluZGV4Um91dGU7XG52YXIgaGFzaEhpc3RvcnkgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5oYXNoSGlzdG9yeTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlO1xudmFyIE1haW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTWFpbi5yZWFjdCcpO1xudmFyIEhvbWUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSG9tZS5yZWFjdCcpO1xudmFyIExvZ2luID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0xvZ2luLnJlYWN0Jyk7XG52YXIgRGFzaGJvYXJkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0Rhc2hib2FyZC5yZWFjdCcpO1xudmFyIFVzZXJQcm9maWxlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLnJlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvVGFibGUucmVhY3QnKTtcbnZhciBNYXAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTWFwLnJlYWN0Jyk7XG52YXIgTm90aWZpY2F0aW9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5yZWFjdCcpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cblJlYWN0RE9NLnJlbmRlcigoXG5cdCAgXHQ8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cblx0XHQgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufT5cblx0XHQgICAgXHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufS8+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL3VzZXJQcm9maWxlXCIgY29tcG9uZW50PXtVc2VyUHJvZmlsZX0vPlxuXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi90YWJsZVwiIGNvbXBvbmVudD17VGFibGV9Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvbWFwXCIgY29tcG9uZW50PXtNYXB9Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvbm90aWZpY2F0aW9uXCIgY29tcG9uZW50PXtOb3RpZmljYXRpb259Lz5cblx0XHQgICAgPC9Sb3V0ZT5cblx0ICAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb2FwcCcpKTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG5cbnZhciBOb3RpZmljYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1jb2xvcj1cInB1cnBsZVwiIGRhdGEtaW1hZ2U9XCJhc3NldHMvaW1hZ2VzL3NpZGViYXItNS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIiBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaXR5Tm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnZGFzaGJvYXJkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ncmFwaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhc2hib2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3VzZXJQcm9maWxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy11c2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndGFibGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW5vdGUyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0ZW5kYW5jZSBMaXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbWFwJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1tYXAtbWFya2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFwczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J25vdGlmaWNhdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtYmVsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb24tZXhhbXBsZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5FbWFpbCBTdGF0aXN0aWNzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5MYXN0IENhbXBhaWduIFBlcmZvcm1hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRQcmVmZXJlbmNlc1wiIGNsYXNzTmFtZT1cImN0LWNoYXJ0IGN0LXBlcmZlY3QtZm91cnRoXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtaW5mb1wiLz4gT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWRhbmdlclwiLz4gQm91bmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtd2FybmluZ1wiLz4gVW5zdWJzY3JpYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvY2stb1wiLz4gQ2FtcGFpZ24gc2VudCAyIGRheXMgYWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VXNlcnMgQmVoYXZpb3I8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPjI0IEhvdXJzIHBlcmZvcm1hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRIb3Vyc1wiIGNsYXNzTmFtZT1cImN0LWNoYXJ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWluZm9cIi8+IE9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC1kYW5nZXJcIi8+IENsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtd2FybmluZ1wiLz4gQ2xpY2sgU2Vjb25kIFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oaXN0b3J5XCIvPiBVcGRhdGVkIDMgbWludXRlcyBhZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+MjAxNCBTYWxlczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+QWxsIHByb2R1Y3RzIGluY2x1ZGluZyBUYXhlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoYXJ0QWN0aXZpdHlcIiBjbGFzc05hbWU9XCJjdC1jaGFydFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWluZm9cIi8+IFRlc2xhIE1vZGVsIFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC1kYW5nZXJcIi8+IEJNVyA1IFNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIvPiBEYXRhIGluZm9ybWF0aW9uIGNlcnRpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5UYXNrczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+QmFja2VuZCBkZXZlbG9wbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1mdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNpZ24gY29udHJhY3QgZm9yIFwiV2hhdCBhcmUgY29uZmVyZW5jZSBvcmdhbml6ZXJzIGFmcmFpZCBvZj9cIjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZC1hY3Rpb25zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXQgVGFza1wiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgZGF0YS10b2dnbGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGluZXMgRnJvbSBHcmVhdCBSdXNzaWFuIExpdGVyYXR1cmU/IE9yIEUtbWFpbHMgRnJvbSBNeSBCb3NzPzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZC1hY3Rpb25zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXQgVGFza1wiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgZGF0YS10b2dnbGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Rmxvb2RlZDogT25lIHllYXIgbGF0ZXIsIGFzc2Vzc2luZyB3aGF0IHdhcyBsb3N0IGFuZCB3aGF0IHdhcyBmb3VuZCB3aGVuIGEgcmF2YWdpbmcgcmFpbiBzd2VwdCB0aHJvdWdoIG1ldHJvIERldHJvaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNyZWF0ZSA0IEludmlzaWJsZSBVc2VyIEV4cGVyaWVuY2VzIHlvdSBOZXZlciBLbmV3IEFib3V0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJlYWQgXCJGb2xsb3dpbmcgbWFrZXMgTWVkaXVtIGJldHRlclwiPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVuZm9sbG93IDUgZW5lbWllcyBmcm9tIHR3aXR0ZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGQtYWN0aW9ucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0IFRhc2tcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGlzdG9yeVwiLz4gVXBkYXRlZCAzIG1pbnV0ZXMgYWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAxNiA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+Q2l0eU5vdzwvYT4gQ28uTHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uO1xuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtjb21wb25lbnRDbGFzczogJ3AnfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTW9kYWwgPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAnKS5Nb2RhbDtcbnZhciBFbXBsb3llZUFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L0FjY291bnRBcGlSZXF1ZXN0Jyk7XG52YXIgQXR0ZW5kYW5jZUFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L0F0dGVuZGFuY2VBcGlSZXF1ZXN0Jyk7XG52YXIgUGVybWlzc2lvbkFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L1Blcm1pc3Npb25BcGlSZXF1ZXN0Jyk7XG5cbmZ1bmN0aW9uIGdldEVtcGxveWVlU3RhdGUoKSB7XG4gICAgdmFyIGFsbCA9IEVtcGxveWVlQXBpUmVxdWVzdC5nZXRBbGwoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxFbXBsb3llZUxpc3Q6IGFsbFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBnZXRBdHRlbmRhbmNlU3RhdGUoKSB7XG4gICAgdmFyIGFsbCA9IEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmdldEFsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0OiBhbGxcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0UGVybWlzc2lvblN0YXRlKCkge1xuICAgIHZhciBhbGwgPSBQZXJtaXNzaW9uQXBpUmVxdWVzdC5nZXRBbGwoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxQZXJtaXNzaW9uTGlzdDogYWxsXG4gICAgfTtcbn07XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEVtcGxveWVlQXBpUmVxdWVzdC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgIEVtcGxveWVlQXBpUmVxdWVzdC5sb2FkQWxsRW1wbG95ZWVMaXN0KCk7XG5cbiAgICAgICAgQXR0ZW5kYW5jZUFwaVJlcXVlc3QuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICAgICAgICBBdHRlbmRhbmNlQXBpUmVxdWVzdC5sb2FkQWxsQXR0ZW5kYW5jZUxpc3QoKTtcblxuICAgICAgICBQZXJtaXNzaW9uQXBpUmVxdWVzdC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgIFBlcm1pc3Npb25BcGlSZXF1ZXN0LmxvYWRBbGxQZXJtaXNzaW9uTGlzdCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGxFbXBsb3llZUxpc3Q6IEVtcGxveWVlQXBpUmVxdWVzdC5nZXRBbGwoKSxcbiAgICAgICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0OiBBdHRlbmRhbmNlQXBpUmVxdWVzdC5nZXRBbGwoKSxcbiAgICAgICAgICAgIGFsbFBlcm1pc3Npb25MaXN0OiBQZXJtaXNzaW9uQXBpUmVxdWVzdC5nZXRBbGwoKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX29uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RW1wbG95ZWVTdGF0ZSgpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRBdHRlbmRhbmNlU3RhdGUoKSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0UGVybWlzc2lvblN0YXRlKCkpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbGxFbXBsb3llZUxpc3QgPSB0aGlzLnN0YXRlLmFsbEVtcGxveWVlTGlzdDtcbiAgICAgICAgdmFyIGFsbEF0dGVuZGFuY2VMaXN0ID0gdGhpcy5zdGF0ZS5hbGxBdHRlbmRhbmNlTGlzdDtcbiAgICAgICAgdmFyIGFsbFBlcm1pc3Npb25MaXN0ID0gdGhpcy5zdGF0ZS5hbGxQZXJtaXNzaW9uTGlzdDtcblxuICAgICAgICB2YXIgZW1wbG95ZWVCb2R5ID0gW107XG4gICAgICAgIHZhciBhdHRlbmRhbmNlQm9keSA9IFtdO1xuICAgICAgICB2YXIgcGVybWlzc2lvbkJvZHkgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsRW1wbG95ZWVMaXN0KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbEVtcGxveWVlTGlzdFtrZXldO1xuICAgICAgICAgICAgZW1wbG95ZWVCb2R5LnB1c2goXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2lkJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2VtcGxveWVlSUQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVOYW1lJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2VtcGxveWVlRW1haWwnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnYWRtaW4nXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsncGVybWlzc2lvbiddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydkZWxldGVGbGFnJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5EZWxldGU8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxBdHRlbmRhbmNlTGlzdCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxBdHRlbmRhbmNlTGlzdFtrZXldO1xuICAgICAgICAgICAgYXR0ZW5kYW5jZUJvZHkucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaWQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydhcnJpdmFsVGltZSddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydkZXBhcnR1cmVUaW1lJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2ZpbmlzaCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydtYW5hZ2VyRW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydkZWxldGVGbGFnJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5EZWxldGU8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxQZXJtaXNzaW9uTGlzdCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxQZXJtaXNzaW9uTGlzdFtrZXldO1xuICAgICAgICAgICAgcGVybWlzc2lvbkJvZHkucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaWQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpc1Blcm1pc3Npb24nXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaXNQZXJtaXNzaW9uJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5HcmFudGVkPC9mb250PjwvZm9udD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxpbmtcIiBkYXRhLXRvZ2dsZT0nbW9kYWwnIGRhdGEtdGFyZ2V0PVwiI2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQ+PGZvbnQ+RGVsZXRlPC9mb250PjwvZm9udD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3BhZGRpbmc6ICcxM3B4JywgZm9udHNpemU6ICcxOHB4J319PkRhc2hib2FyZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiI2VtcGxveWVlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5FbXBsb3llZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNhdHRlbmRhbmNlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5BdHRlbmRhbmNlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3Blcm1pc3Npb25cIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlBlcm1pc3Npb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwiZW1wbG95ZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2lubGVmdDogJzUwcHgnfX0+QWxsIGVtcGxveWVlIGxpc3Q8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZGRkQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+SUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlTmFtZTwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVFbWFpbDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+QWRtaW48L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PlBlcm1pc3Npb248L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlbGV0ZUZsYWc8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcGxveWVlQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgXCIgaWQ9XCJhdHRlbmRhbmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbmxlZnQ6ICc1MHB4J319PkFsbCBhdHRlbmRhbmNlIGxpc3Q8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZGRkQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+SUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkFycml2YWxUaW1lPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5EZXBhcnR1cmVUaW1lPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5GaW5pc2g8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250Pk1hbmFnZXJFbXBsb3llZUlEPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5EZWxldGVGbGFnPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0ZW5kYW5jZUJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIFwiIGlkPVwicGVybWlzc2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5sZWZ0OiAnNTBweCd9fT5BbGwgcGVybWlzc2lvbiBsaXN0PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzdGRkZENCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2hlaWdodDogJzMwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PklEPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5FbXBsb3llZUlEPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5Jc1Blcm1pc3Npb248L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlbGV0ZUZsYWc8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzaW9uQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG52YXIgQWNjb3VudEFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L0FjY291bnRBcGlSZXF1ZXN0Jyk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2dpbkVycm9yQWxlcnQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFjY291bnRBcGlSZXF1ZXN0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QuYWRkUmVzcG9uc2VMaXN0ZW5lcih0aGlzLl9vblJlc3BvbnNlKTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFjY291bnRBcGlSZXF1ZXN0LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcih0aGlzLl9vblJlc3BvbnNlKTtcbiAgICB9LFxuICAgIF9vbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICBfb25SZXNwb25zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICBsb2dpbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJykudmFsdWU7XG4gICAgICAgIHZhciBwYXNzV29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzV29yZCcpLnZhbHVlO1xuXG5cbiAgICB9LFxuICAgIHNob3dMb2dpbkVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gPHAgY2xhc3NOYW1lPVwiZXJyb3JcIj5FcnJvcjwvcD47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luRXJyb3JBbGVydDogZWxlbWVudH0pXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5sb2dpbkNsaWNrZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPjxoMT5DaXR5Tm93PC9oMT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9naW5FcnJvckFsZXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBpZD1cInBhc3NXb3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbjtcblxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb290ZXIgPSByZXF1aXJlKCcuL0Zvb3Rlci5yZWFjdCcpO1xuXG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW47XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG5cbnZhciBNYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1jb2xvcj1cInB1cnBsZVwiIGRhdGEtaW1hZ2U9XCJhc3NldHMvaW1hZ2VzL3NpZGViYXItNS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIiBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaXR5Tm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnZGFzaGJvYXJkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ncmFwaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhc2hib2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3VzZXJQcm9maWxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy11c2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndGFibGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW5vdGUyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0ZW5kYW5jZSBMaXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbWFwJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1tYXAtbWFya2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFwczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J25vdGlmaWNhdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtYmVsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvbi1leGFtcGxlLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TWFwczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxuXG52YXIgTm90aWZpY2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtY29sb3I9XCJwdXJwbGVcIiBkYXRhLWltYWdlPVwiYXNzZXRzL2ltYWdlcy9zaWRlYmFyLTUuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCIgY2xhc3NOYW1lPVwic2ltcGxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eU5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J2Rhc2hib2FyZCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtZ3JhcGhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXNoYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd1c2VyUHJvZmlsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtdXNlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3RhYmxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ub3RlMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0dGVuZGFuY2UgTGlzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J21hcCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtbWFwLW1hcmtlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hcHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydub3RpZmljYXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWJlbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZpZ2F0aW9uLWV4YW1wbGUtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kYXNoYm9hcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nbG9iZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPjU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiA0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgbm90aWZpY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7IDIwMTYgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPkNpdHlOb3c8L2E+IENvLkx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb247XG5cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG5cblxudmFyIFRhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtY29sb3I9XCJwdXJwbGVcIiBkYXRhLWltYWdlPVwiYXNzZXRzL2ltYWdlcy9zaWRlYmFyLTUuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCIgY2xhc3NOYW1lPVwic2ltcGxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eU5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J2Rhc2hib2FyZCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtZ3JhcGhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXNoYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd1c2VyUHJvZmlsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtdXNlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3RhYmxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ub3RlMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0dGVuZGFuY2UgTGlzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J21hcCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtbWFwLW1hcmtlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hcHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydub3RpZmljYXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWJlbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb24tZXhhbXBsZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkF0dGVuZGFuY2UgTGlzdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+U3RyaXBlZCBUYWJsZSB3aXRoIEhvdmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5IZXJlIGlzIGEgc3VidGl0bGUgZm9yIHRoaXMgdGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TYWxhcnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRha290YSBSaWNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDM2LDczODwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5pZ2VyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3VkLVR1cm5ob3V0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NaW5lcnZhIEhvb3BlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQyMyw3ODk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DdXJhw6dhbzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNpbmFhaS1XYWFzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TYWdlIFJvZHJpZ3VlejwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ1NiwxNDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OZXRoZXJsYW5kczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJhaWxldXg8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBoaWxpcCBDaGFuZXk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kMzgsNzM1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+S29yZWEsIFNvdXRoPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3ZlcmxhbmQgUGFyazwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD41PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RG9yaXMgR3JlZW5lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDYzLDU0MjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk1hbGF3aTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZlbGRraXJjaGVuIGluIEvDpHJudGVuPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjY8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXNvbiBQb3J0ZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNzgsNjE1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2hpbGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HbG91Y2VzdGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtcGxhaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5UYWJsZSBvbiBQbGFpbiBCYWNrZ3JvdW5kPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5IZXJlIGlzIGEgc3VidGl0bGUgZm9yIHRoaXMgdGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2FsYXJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYWtvdGEgUmljZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQzNiw3Mzg8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OaWdlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk91ZC1UdXJuaG91dDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWluZXJ2YSBIb29wZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kMjMsNzg5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3VyYcOnYW88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TaW5hYWktV2FhczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2FnZSBSb2RyaWd1ZXo8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNTYsMTQyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmV0aGVybGFuZHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWlsZXV4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QaGlsaXAgQ2hhbmV5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDM4LDczNTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPktvcmVhLCBTb3V0aDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk92ZXJsYW5kIFBhcms8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRvcmlzIEdyZWVuZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ2Myw1NDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYWxhd2k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GZWxka2lyY2hlbiBpbiBLw6RybnRlbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD42PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWFzb24gUG9ydGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDc4LDYxNTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNoaWxlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+R2xvdWNlc3RlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAxNiA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+Q2l0eU5vdzwvYT4gQ28uTHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlO1xuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG5cbnZhciBVc2VyUHJvZmlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBkYXRhLWNvbG9yPVwicHVycGxlXCIgZGF0YS1pbWFnZT1cImFzc2V0cy9pbWFnZXMvc2lkZWJhci01LmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdHlOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydkYXNoYm9hcmQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWdyYXBoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGFzaGJvYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndXNlclByb2ZpbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLXVzZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd0YWJsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3Mtbm90ZTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRlbmRhbmNlIExpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydtYXAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW1hcC1tYXJrZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXBzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbm90aWZpY2F0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1iZWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvbi1leGFtcGxlLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXQgUHJvZmlsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbXBhbnkgKGRpc2FibGVkKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiB2YWx1ZT1cIkNyZWF0aXZlIENvZGUgSW5jLlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9XCJtaWNoYWVsMjNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgdmFsdWU9XCJNaWtlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIHZhbHVlPVwiQW5kcmV3XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJIb21lIEFkZHJlc3NcIiB2YWx1ZT1cIkJsZCBNaWhhaWwgS29nYWxuaWNlYW51LCBuci4gOCBCbCAxLCBTYyAxLCBBcCAwOVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9XCJNaWtlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgdmFsdWU9XCJBbmRyZXdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGFsIENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlpJUCBDb2RlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFib3V0IE1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiSGVyZSBjYW4gYmUgeW91ciBkZXNjcmlwdGlvblwiIHZhbHVlPVwiTWlrZVwiPkxhbWJvcmdoaW5pIE1lcmN5LCBZb3VyIGNoaWNrIHNoZSBzbyB0aGlyc3R5LCBJJ20gaW4gdGhhdCB0d28gc2VhdCBMYW1iby48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWZpbGwgcHVsbC1yaWdodFwiPlVwZGF0ZSBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3VudW5zcGxhc2guaW1naXgubmV0L3Bob3RvLTE0MzE1Nzg1MDA1MjYtNGQ5NjEzMDE1NDY0P2ZpdD1jcm9wJmZtPWpwZyZoPTMwMCZxPTc1Jnc9NDAwXCIgYWx0PVwiLi4uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhciBib3JkZXItZ3JheVwiIHNyYz1cImFzc2V0cy9pbWFnZXMvZmFjZXMvZmFjZS0zLmpwZ1wiIGFsdD1cIi4uLlwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPk1pa2UgQW5kcmV3PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5taWNoYWVsMjQ8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiB0ZXh0LWNlbnRlclwiPlwiTGFtYm9yZ2hpbmkgTWVyY3k8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBjaGljayBzaGUgc28gdGhpcnN0eTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJJ20gaW4gdGhhdCB0d28gc2VhdCBMYW1ib1wiPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaW1wbGVcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmVcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpbXBsZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpbXBsZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzLXNxdWFyZVwiLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZjb3B5OyAyMDE2IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5DaXR5Tm93PC9hPiBDby5MdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyUHJvZmlsZTtcblxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIl19
