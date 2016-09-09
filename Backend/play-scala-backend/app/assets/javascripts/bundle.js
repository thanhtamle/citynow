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
                data['function'] = 'login';
                data['message'] = 'Login successfully!';
                _response = data;
                this.emitResponse();
            }.bind(this),
            error: function (xhr, status, err) {
                var data = {};
                data['function'] = 'login';
                data['message'] = 'Login error!';
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
		React.createElement(IndexRoute, { component: Login }),
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
    _onResponse: function () {
        var response = AccountApiRequest.getResponse();
        var classAlert = "error";

        if (response['function'] == 'login') {
            if (response['success'] == 1) {
                this.props.history.push('/dashboard');
            } else this.showLoginError(response['message'], classAlert);
        }
    },
    loginClicked: function () {
        var userName = document.getElementById('userName').value;
        var passWord = document.getElementById('passWord').value;

        var login = {};
        login["employeeID"] = userName;
        login["employeePassword"] = passWord;
        AccountApiRequest.login(JSON.stringify(login));
    },
    showLoginError: function (message, classAlert) {
        var element = React.createElement(
            'p',
            { className: classAlert },
            message,
            '   '
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
                    React.createElement('input', { id: 'userName', type: 'text', placeholder: 'Username', required: true }),
                    React.createElement('input', { id: 'passWord', type: 'password', placeholder: 'Password', required: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQWNjb3VudEFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQXR0ZW5kYW5jZUFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvUGVybWlzc2lvbkFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwcC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9EYXNoYm9hcmQucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvRm9vdGVyLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL0hvbWUucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTG9naW4ucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWFpbi5yZWFjdC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXAucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1RhYmxlLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1VzZXJQcm9maWxlLnJlYWN0LmpzIiwibm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQ0EsSUFBSSxlQUFlLFFBQVEsUUFBUixFQUFrQixZQUFyQztBQUNBLElBQUksU0FBUyxRQUFRLGVBQVIsQ0FBYjs7QUFFQSxJQUFJLGVBQWUsaUJBQW5CO0FB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QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLGlEQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSixpREFSQTtBQWVBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEosaURBZkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSixpREF0QkE7QUE2QkE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSixpREE3QkE7QUFvQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFESjtBQUVJ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LE9BQVAsR0FBaUIsV0FBakI7OztBQzFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdFbXBsb3llZS1DaGFuZ2UnO1xudmFyIFJFU1BPTlNFX0VWRU5UID0gJ0VtcGxveWVlLVJlc3BvbnNlJztcblxudmFyIGFsbEVtcGxveWVlTGlzdCA9IHt9O1xudmFyIF9yZXNwb25zZSA9IHt9O1xuXG52YXIgRW1wbG95ZWVBcGlSZXF1ZXN0ID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgICBnZXRBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFsbEVtcGxveWVlTGlzdDtcbiAgICB9LFxuICAgIGdldFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgfSxcbiAgICBsb2FkQWxsRW1wbG95ZWVMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0ganNSb3V0ZXMuY29udHJvbGxlcnMuRW1wbG95ZWVDb250cm9sbGVyLmVtcGxveWVlcygpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiByLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGxFbXBsb3llZUxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIEVtcGxveWVlQXBpUmVxdWVzdC5lbWl0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgICBhbGxFbXBsb3llZUxpc3QgPSB7fTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxvZ2luOiBmdW5jdGlvbiAoZW1wbG95ZWUpIHtcbiAgICAgICAgdmFyIHIgPSBqc1JvdXRlcy5jb250cm9sbGVycy5FbXBsb3llZUNvbnRyb2xsZXIubG9naW4oKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogci51cmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogZW1wbG95ZWUsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YVsnZnVuY3Rpb24nXSA9ICdsb2dpbic7XG4gICAgICAgICAgICAgICAgZGF0YVsnbWVzc2FnZSddID0gJ0xvZ2luIHN1Y2Nlc3NmdWxseSEnO1xuICAgICAgICAgICAgICAgIF9yZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICAgICAgZGF0YVsnZnVuY3Rpb24nXSA9ICdsb2dpbic7XG4gICAgICAgICAgICAgICAgZGF0YVsnbWVzc2FnZSddID0gJ0xvZ2luIGVycm9yISc7XG4gICAgICAgICAgICAgICAgX3Jlc3BvbnNlID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgICB9LFxuICAgIGVtaXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoUkVTUE9OU0VfRVZFTlQpO1xuICAgIH0sXG5cbiAgICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBhZGRSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbXBsb3llZUFwaVJlcXVlc3Q7XG4iLCJcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ0F0dGVuZGFuY2UtQ2hhbmdlJztcbnZhciBSRVNQT05TRV9FVkVOVCA9ICdBdHRlbmRhbmNlLVJlc3BvbnNlJztcblxudmFyIGFsbEF0dGVuZGFuY2VMaXN0ID0ge307XG52YXIgX3Jlc3BvbnNlID0ge307XG5cbnZhciBBdHRlbmRhbmNlQXBpUmVxdWVzdCA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gICAgZ2V0QWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhbGxBdHRlbmRhbmNlTGlzdDtcbiAgICB9LFxuICAgIGdldFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgfSxcbiAgICBsb2FkQWxsQXR0ZW5kYW5jZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBqc1JvdXRlcy5jb250cm9sbGVycy5BdHRlbmRhbmNlQ29udHJvbGxlci5hdHRlbmRhbmNlcygpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiByLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGxBdHRlbmRhbmNlTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgQXR0ZW5kYW5jZUFwaVJlcXVlc3QuZW1pdENoYW5nZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3QgPSB7fTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICAgfSxcbiAgICBlbWl0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KFJFU1BPTlNFX0VWRU5UKTtcbiAgICB9LFxuXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgYWRkUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZVJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0ZW5kYW5jZUFwaVJlcXVlc3Q7XG4iLCJcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ0VtcGxveWVlLUNoYW5nZSc7XG52YXIgUkVTUE9OU0VfRVZFTlQgPSAnRW1wbG95ZWUtUmVzcG9uc2UnO1xuXG52YXIgYWxsUGVybWlzc2lvbkxpc3QgPSB7fTtcbnZhciBfcmVzcG9uc2UgPSB7fTtcblxudmFyIFBlcm1pc3Npb25BcGlSZXF1ZXN0ID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgICBnZXRBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFsbFBlcm1pc3Npb25MaXN0O1xuICAgIH0sXG4gICAgZ2V0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIGxvYWRBbGxQZXJtaXNzaW9uTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IGpzUm91dGVzLmNvbnRyb2xsZXJzLlBlcm1pc3Npb25Db250cm9sbGVyLmdldEFsbFJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHIudXJsLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFsbFBlcm1pc3Npb25MaXN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICBQZXJtaXNzaW9uQXBpUmVxdWVzdC5lbWl0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgICBhbGxQZXJtaXNzaW9uTGlzdCA9IHt9O1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgICB9LFxuICAgIGVtaXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoUkVTUE9OU0VfRVZFTlQpO1xuICAgIH0sXG5cbiAgICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICBhZGRSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQZXJtaXNzaW9uQXBpUmVxdWVzdDtcbiIsIlxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlcjtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlO1xudmFyIEluZGV4Um91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5JbmRleFJvdXRlO1xudmFyIGhhc2hIaXN0b3J5ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuaGFzaEhpc3Rvcnk7XG52YXIgUm91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZTtcbnZhciBNYWluID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01haW4ucmVhY3QnKTtcbnZhciBIb21lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0hvbWUucmVhY3QnKTtcbnZhciBMb2dpbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Mb2dpbi5yZWFjdCcpO1xudmFyIERhc2hib2FyZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EYXNoYm9hcmQucmVhY3QnKTtcbnZhciBVc2VyUHJvZmlsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5yZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1RhYmxlLnJlYWN0Jyk7XG52YXIgTWFwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01hcC5yZWFjdCcpO1xudmFyIE5vdGlmaWNhdGlvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24ucmVhY3QnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5SZWFjdERPTS5yZW5kZXIoKFxuXHQgIFx0PFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG5cdFx0ICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0+XG5cdFx0ICAgIFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtMb2dpbn0vPlxuXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvdXNlclByb2ZpbGVcIiBjb21wb25lbnQ9e1VzZXJQcm9maWxlfS8+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL3RhYmxlXCIgY29tcG9uZW50PXtUYWJsZX0vPlxuXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9tYXBcIiBjb21wb25lbnQ9e01hcH0vPlxuXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9ub3RpZmljYXRpb25cIiBjb21wb25lbnQ9e05vdGlmaWNhdGlvbn0vPlxuXHRcdCAgICA8L1JvdXRlPlxuXHQgICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvYXBwJykpOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG5cblxudmFyIE5vdGlmaWNhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBkYXRhLWNvbG9yPVwicHVycGxlXCIgZGF0YS1pbWFnZT1cImFzc2V0cy9pbWFnZXMvc2lkZWJhci01LmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdHlOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydkYXNoYm9hcmQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWdyYXBoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGFzaGJvYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndXNlclByb2ZpbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLXVzZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd0YWJsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3Mtbm90ZTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRlbmRhbmNlIExpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydtYXAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW1hcC1tYXJrZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXBzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbm90aWZpY2F0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1iZWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvbi1leGFtcGxlLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+RGFzaGJvYXJkPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kYXNoYm9hcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nbG9iZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPjU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiA0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgbm90aWZpY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkVtYWlsIFN0YXRpc3RpY3M8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkxhc3QgQ2FtcGFpZ24gUGVyZm9ybWFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFydFByZWZlcmVuY2VzXCIgY2xhc3NOYW1lPVwiY3QtY2hhcnQgY3QtcGVyZmVjdC1mb3VydGhcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC1pbmZvXCIvPiBPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtZGFuZ2VyXCIvPiBCb3VuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC13YXJuaW5nXCIvPiBVbnN1YnNjcmliZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9jay1vXCIvPiBDYW1wYWlnbiBzZW50IDIgZGF5cyBhZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5Vc2VycyBCZWhhdmlvcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+MjQgSG91cnMgcGVyZm9ybWFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGFydEhvdXJzXCIgY2xhc3NOYW1lPVwiY3QtY2hhcnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtaW5mb1wiLz4gT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWRhbmdlclwiLz4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC13YXJuaW5nXCIvPiBDbGljayBTZWNvbmQgVGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhpc3RvcnlcIi8+IFVwZGF0ZWQgMyBtaW51dGVzIGFnb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj4yMDE0IFNhbGVzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5BbGwgcHJvZHVjdHMgaW5jbHVkaW5nIFRheGVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRBY3Rpdml0eVwiIGNsYXNzTmFtZT1cImN0LWNoYXJ0XCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtaW5mb1wiLz4gVGVzbGEgTW9kZWwgU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWRhbmdlclwiLz4gQk1XIDUgU2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIi8+IERhdGEgaW5mb3JtYXRpb24gY2VydGlmaWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPlRhc2tzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5CYWNrZW5kIGRldmVsb3BtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGRhdGEtdG9nZ2xlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2lnbiBjb250cmFjdCBmb3IgXCJXaGF0IGFyZSBjb25mZXJlbmNlIG9yZ2FuaXplcnMgYWZyYWlkIG9mP1wiPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MaW5lcyBGcm9tIEdyZWF0IFJ1c3NpYW4gTGl0ZXJhdHVyZT8gT3IgRS1tYWlscyBGcm9tIE15IEJvc3M/PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GbG9vZGVkOiBPbmUgeWVhciBsYXRlciwgYXNzZXNzaW5nIHdoYXQgd2FzIGxvc3QgYW5kIHdoYXQgd2FzIGZvdW5kIHdoZW4gYSByYXZhZ2luZyByYWluIHN3ZXB0IHRocm91Z2ggbWV0cm8gRGV0cm9pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGQtYWN0aW9ucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0IFRhc2tcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGRhdGEtdG9nZ2xlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3JlYXRlIDQgSW52aXNpYmxlIFVzZXIgRXhwZXJpZW5jZXMgeW91IE5ldmVyIEtuZXcgQWJvdXQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGQtYWN0aW9ucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0IFRhc2tcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGRhdGEtdG9nZ2xlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UmVhZCBcIkZvbGxvd2luZyBtYWtlcyBNZWRpdW0gYmV0dGVyXCI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGQtYWN0aW9ucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0IFRhc2tcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGRhdGEtdG9nZ2xlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VW5mb2xsb3cgNSBlbmVtaWVzIGZyb20gdHdpdHRlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZC1hY3Rpb25zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXQgVGFza1wiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oaXN0b3J5XCIvPiBVcGRhdGVkIDMgbWludXRlcyBhZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZjb3B5OyAyMDE2IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5DaXR5Tm93PC9hPiBDby5MdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb247XG5cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge2NvbXBvbmVudENsYXNzOiAncCd9O1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBNb2RhbCA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcCcpLk1vZGFsO1xudmFyIEVtcGxveWVlQXBpUmVxdWVzdCA9IHJlcXVpcmUoJy4uL2FwaVJlcXVlc3QvQWNjb3VudEFwaVJlcXVlc3QnKTtcbnZhciBBdHRlbmRhbmNlQXBpUmVxdWVzdCA9IHJlcXVpcmUoJy4uL2FwaVJlcXVlc3QvQXR0ZW5kYW5jZUFwaVJlcXVlc3QnKTtcbnZhciBQZXJtaXNzaW9uQXBpUmVxdWVzdCA9IHJlcXVpcmUoJy4uL2FwaVJlcXVlc3QvUGVybWlzc2lvbkFwaVJlcXVlc3QnKTtcblxuZnVuY3Rpb24gZ2V0RW1wbG95ZWVTdGF0ZSgpIHtcbiAgICB2YXIgYWxsID0gRW1wbG95ZWVBcGlSZXF1ZXN0LmdldEFsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbEVtcGxveWVlTGlzdDogYWxsXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEF0dGVuZGFuY2VTdGF0ZSgpIHtcbiAgICB2YXIgYWxsID0gQXR0ZW5kYW5jZUFwaVJlcXVlc3QuZ2V0QWxsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3Q6IGFsbFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBnZXRQZXJtaXNzaW9uU3RhdGUoKSB7XG4gICAgdmFyIGFsbCA9IFBlcm1pc3Npb25BcGlSZXF1ZXN0LmdldEFsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbFBlcm1pc3Npb25MaXN0OiBhbGxcbiAgICB9O1xufTtcblxudmFyIEhvbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRW1wbG95ZWVBcGlSZXF1ZXN0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgRW1wbG95ZWVBcGlSZXF1ZXN0LmxvYWRBbGxFbXBsb3llZUxpc3QoKTtcblxuICAgICAgICBBdHRlbmRhbmNlQXBpUmVxdWVzdC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgIEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmxvYWRBbGxBdHRlbmRhbmNlTGlzdCgpO1xuXG4gICAgICAgIFBlcm1pc3Npb25BcGlSZXF1ZXN0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgUGVybWlzc2lvbkFwaVJlcXVlc3QubG9hZEFsbFBlcm1pc3Npb25MaXN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsbEVtcGxveWVlTGlzdDogRW1wbG95ZWVBcGlSZXF1ZXN0LmdldEFsbCgpLFxuICAgICAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3Q6IEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmdldEFsbCgpLFxuICAgICAgICAgICAgYWxsUGVybWlzc2lvbkxpc3Q6IFBlcm1pc3Npb25BcGlSZXF1ZXN0LmdldEFsbCgpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBfb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRFbXBsb3llZVN0YXRlKCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKGdldEF0dGVuZGFuY2VTdGF0ZSgpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRQZXJtaXNzaW9uU3RhdGUoKSk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFsbEVtcGxveWVlTGlzdCA9IHRoaXMuc3RhdGUuYWxsRW1wbG95ZWVMaXN0O1xuICAgICAgICB2YXIgYWxsQXR0ZW5kYW5jZUxpc3QgPSB0aGlzLnN0YXRlLmFsbEF0dGVuZGFuY2VMaXN0O1xuICAgICAgICB2YXIgYWxsUGVybWlzc2lvbkxpc3QgPSB0aGlzLnN0YXRlLmFsbFBlcm1pc3Npb25MaXN0O1xuXG4gICAgICAgIHZhciBlbXBsb3llZUJvZHkgPSBbXTtcbiAgICAgICAgdmFyIGF0dGVuZGFuY2VCb2R5ID0gW107XG4gICAgICAgIHZhciBwZXJtaXNzaW9uQm9keSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxFbXBsb3llZUxpc3QpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYWxsRW1wbG95ZWVMaXN0W2tleV07XG4gICAgICAgICAgICBlbXBsb3llZUJvZHkucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaWQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydlbXBsb3llZU5hbWUnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVFbWFpbCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydhZG1pbiddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydwZXJtaXNzaW9uJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2RlbGV0ZUZsYWcnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD1cIiNoaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250Pjxmb250PkRlbGV0ZTwvZm9udD48L2ZvbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFsbEF0dGVuZGFuY2VMaXN0KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbEF0dGVuZGFuY2VMaXN0W2tleV07XG4gICAgICAgICAgICBhdHRlbmRhbmNlQm9keS5wdXNoKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpZCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydlbXBsb3llZUlEJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2Fycml2YWxUaW1lJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2RlcGFydHVyZVRpbWUnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZmluaXNoJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ21hbmFnZXJFbXBsb3llZUlEJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2RlbGV0ZUZsYWcnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD1cIiNoaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250Pjxmb250PkRlbGV0ZTwvZm9udD48L2ZvbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFsbFBlcm1pc3Npb25MaXN0KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbFBlcm1pc3Npb25MaXN0W2tleV07XG4gICAgICAgICAgICBwZXJtaXNzaW9uQm9keS5wdXNoKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpZCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydlbXBsb3llZUlEJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2lzUGVybWlzc2lvbiddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpc1Blcm1pc3Npb24nXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD1cIiNoaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb250Pjxmb250PkdyYW50ZWQ8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5EZWxldGU8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7cGFkZGluZzogJzEzcHgnLCBmb250c2l6ZTogJzE4cHgnfX0+RGFzaGJvYXJkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjZW1wbG95ZWVcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkVtcGxveWVlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2F0dGVuZGFuY2VcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkF0dGVuZGFuY2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjcGVybWlzc2lvblwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+UGVybWlzc2lvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJlbXBsb3llZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5sZWZ0OiAnNTBweCd9fT5BbGwgZW1wbG95ZWUgbGlzdDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM3RkZGRDQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3toZWlnaHQ6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5JRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVJRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVOYW1lPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5FbXBsb3llZUVtYWlsPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5BZG1pbjwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+UGVybWlzc2lvbjwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RGVsZXRlRmxhZzwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wbG95ZWVCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBcIiBpZD1cImF0dGVuZGFuY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2lubGVmdDogJzUwcHgnfX0+QWxsIGF0dGVuZGFuY2UgbGlzdDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM3RkZGRDQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3toZWlnaHQ6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5JRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVJRDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+QXJyaXZhbFRpbWU8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlcGFydHVyZVRpbWU8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkZpbmlzaDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+TWFuYWdlckVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlbGV0ZUZsYWc8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgXCIgaWQ9XCJwZXJtaXNzaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbmxlZnQ6ICc1MHB4J319PkFsbCBwZXJtaXNzaW9uIGxpc3Q8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZGRkQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+SUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PklzUGVybWlzc2lvbjwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RGVsZXRlRmxhZzwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25Cb2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcbnZhciBBY2NvdW50QXBpUmVxdWVzdCA9IHJlcXVpcmUoJy4uL2FwaVJlcXVlc3QvQWNjb3VudEFwaVJlcXVlc3QnKTtcblxudmFyIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ2luRXJyb3JBbGVydDogXCJcIlxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICAgICAgICBBY2NvdW50QXBpUmVxdWVzdC5hZGRSZXNwb25zZUxpc3RlbmVyKHRoaXMuX29uUmVzcG9uc2UpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICAgICAgICBBY2NvdW50QXBpUmVxdWVzdC5yZW1vdmVSZXNwb25zZUxpc3RlbmVyKHRoaXMuX29uUmVzcG9uc2UpO1xuICAgIH0sXG4gICAgX29uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9LFxuICAgIF9vblJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IEFjY291bnRBcGlSZXF1ZXN0LmdldFJlc3BvbnNlKCk7XG4gICAgICAgIHZhciBjbGFzc0FsZXJ0ID0gXCJlcnJvclwiO1xuXG4gICAgICAgIGlmIChyZXNwb25zZVsnZnVuY3Rpb24nXSA9PSAnbG9naW4nKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VbJ3N1Y2Nlc3MnXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpbkVycm9yKHJlc3BvbnNlWydtZXNzYWdlJ10sIGNsYXNzQWxlcnQpO1xuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGxvZ2luQ2xpY2tlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKS52YWx1ZTtcbiAgICAgICAgdmFyIHBhc3NXb3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3NXb3JkJykudmFsdWU7XG5cbiAgICAgICAgdmFyIGxvZ2luID0ge307XG4gICAgICAgIGxvZ2luIFtcImVtcGxveWVlSURcIl0gPSB1c2VyTmFtZTtcbiAgICAgICAgbG9naW4gW1wiZW1wbG95ZWVQYXNzd29yZFwiXSA9IHBhc3NXb3JkO1xuICAgICAgICBBY2NvdW50QXBpUmVxdWVzdC5sb2dpbihKU09OLnN0cmluZ2lmeShsb2dpbikpO1xuICAgIH0sXG4gICAgc2hvd0xvZ2luRXJyb3I6IGZ1bmN0aW9uIChtZXNzYWdlLCBjbGFzc0FsZXJ0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gPHAgY2xhc3NOYW1lPXtjbGFzc0FsZXJ0fT57bWVzc2FnZX0gICA8L3A+O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dpbkVycm9yQWxlcnQ6IGVsZW1lbnR9KVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9e3RoaXMubG9naW5DbGlja2VkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj48aDE+Q2l0eU5vdzwvaDE+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvZ2luRXJyb3JBbGVydH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3NXb3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpbjtcblxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb290ZXIgPSByZXF1aXJlKCcuL0Zvb3Rlci5yZWFjdCcpO1xuXG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW47XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG5cbnZhciBNYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1jb2xvcj1cInB1cnBsZVwiIGRhdGEtaW1hZ2U9XCJhc3NldHMvaW1hZ2VzL3NpZGViYXItNS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIiBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaXR5Tm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnZGFzaGJvYXJkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ncmFwaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhc2hib2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3VzZXJQcm9maWxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy11c2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndGFibGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW5vdGUyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0ZW5kYW5jZSBMaXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbWFwJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1tYXAtbWFya2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFwczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J25vdGlmaWNhdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtYmVsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvbi1leGFtcGxlLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TWFwczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxuXG52YXIgTm90aWZpY2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtY29sb3I9XCJwdXJwbGVcIiBkYXRhLWltYWdlPVwiYXNzZXRzL2ltYWdlcy9zaWRlYmFyLTUuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCIgY2xhc3NOYW1lPVwic2ltcGxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eU5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J2Rhc2hib2FyZCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtZ3JhcGhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXNoYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd1c2VyUHJvZmlsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtdXNlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3RhYmxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ub3RlMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0dGVuZGFuY2UgTGlzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J21hcCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtbWFwLW1hcmtlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hcHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydub3RpZmljYXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWJlbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZpZ2F0aW9uLWV4YW1wbGUtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kYXNoYm9hcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nbG9iZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPjU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiAzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5vdGlmaWNhdGlvbiA0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgbm90aWZpY2F0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7IDIwMTYgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPkNpdHlOb3c8L2E+IENvLkx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb247XG5cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG5cblxudmFyIFRhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtY29sb3I9XCJwdXJwbGVcIiBkYXRhLWltYWdlPVwiYXNzZXRzL2ltYWdlcy9zaWRlYmFyLTUuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCIgY2xhc3NOYW1lPVwic2ltcGxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eU5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J2Rhc2hib2FyZCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtZ3JhcGhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXNoYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd1c2VyUHJvZmlsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtdXNlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3RhYmxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ub3RlMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0dGVuZGFuY2UgTGlzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J21hcCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtbWFwLW1hcmtlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hcHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydub3RpZmljYXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWJlbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb24tZXhhbXBsZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkF0dGVuZGFuY2UgTGlzdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+U3RyaXBlZCBUYWJsZSB3aXRoIEhvdmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5IZXJlIGlzIGEgc3VidGl0bGUgZm9yIHRoaXMgdGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TYWxhcnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRha290YSBSaWNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDM2LDczODwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5pZ2VyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3VkLVR1cm5ob3V0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NaW5lcnZhIEhvb3BlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQyMyw3ODk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DdXJhw6dhbzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNpbmFhaS1XYWFzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TYWdlIFJvZHJpZ3VlejwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ1NiwxNDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OZXRoZXJsYW5kczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJhaWxldXg8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBoaWxpcCBDaGFuZXk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kMzgsNzM1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+S29yZWEsIFNvdXRoPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3ZlcmxhbmQgUGFyazwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD41PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RG9yaXMgR3JlZW5lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDYzLDU0MjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk1hbGF3aTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZlbGRraXJjaGVuIGluIEvDpHJudGVuPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjY8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXNvbiBQb3J0ZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNzgsNjE1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2hpbGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HbG91Y2VzdGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtcGxhaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5UYWJsZSBvbiBQbGFpbiBCYWNrZ3JvdW5kPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5IZXJlIGlzIGEgc3VidGl0bGUgZm9yIHRoaXMgdGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRhYmxlLXJlc3BvbnNpdmUgdGFibGUtZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2FsYXJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYWtvdGEgUmljZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQzNiw3Mzg8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OaWdlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk91ZC1UdXJuaG91dDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWluZXJ2YSBIb29wZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kMjMsNzg5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3VyYcOnYW88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TaW5hYWktV2FhczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2FnZSBSb2RyaWd1ZXo8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNTYsMTQyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmV0aGVybGFuZHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWlsZXV4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QaGlsaXAgQ2hhbmV5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDM4LDczNTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPktvcmVhLCBTb3V0aDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk92ZXJsYW5kIFBhcms8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRvcmlzIEdyZWVuZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ2Myw1NDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYWxhd2k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GZWxka2lyY2hlbiBpbiBLw6RybnRlbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD42PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWFzb24gUG9ydGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDc4LDYxNTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNoaWxlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+R2xvdWNlc3RlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAxNiA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+Q2l0eU5vdzwvYT4gQ28uTHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlO1xuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG5cbnZhciBVc2VyUHJvZmlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBkYXRhLWNvbG9yPVwicHVycGxlXCIgZGF0YS1pbWFnZT1cImFzc2V0cy9pbWFnZXMvc2lkZWJhci01LmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdHlOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydkYXNoYm9hcmQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWdyYXBoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGFzaGJvYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndXNlclByb2ZpbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLXVzZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd0YWJsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3Mtbm90ZTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRlbmRhbmNlIExpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydtYXAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW1hcC1tYXJrZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXBzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbm90aWZpY2F0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1iZWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvbi1leGFtcGxlLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXQgUHJvZmlsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbXBhbnkgKGRpc2FibGVkKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiB2YWx1ZT1cIkNyZWF0aXZlIENvZGUgSW5jLlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9XCJtaWNoYWVsMjNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgdmFsdWU9XCJNaWtlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIHZhbHVlPVwiQW5kcmV3XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJIb21lIEFkZHJlc3NcIiB2YWx1ZT1cIkJsZCBNaWhhaWwgS29nYWxuaWNlYW51LCBuci4gOCBCbCAxLCBTYyAxLCBBcCAwOVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9XCJNaWtlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgdmFsdWU9XCJBbmRyZXdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGFsIENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlpJUCBDb2RlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFib3V0IE1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiSGVyZSBjYW4gYmUgeW91ciBkZXNjcmlwdGlvblwiIHZhbHVlPVwiTWlrZVwiPkxhbWJvcmdoaW5pIE1lcmN5LCBZb3VyIGNoaWNrIHNoZSBzbyB0aGlyc3R5LCBJJ20gaW4gdGhhdCB0d28gc2VhdCBMYW1iby48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWZpbGwgcHVsbC1yaWdodFwiPlVwZGF0ZSBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3VudW5zcGxhc2guaW1naXgubmV0L3Bob3RvLTE0MzE1Nzg1MDA1MjYtNGQ5NjEzMDE1NDY0P2ZpdD1jcm9wJmZtPWpwZyZoPTMwMCZxPTc1Jnc9NDAwXCIgYWx0PVwiLi4uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhciBib3JkZXItZ3JheVwiIHNyYz1cImFzc2V0cy9pbWFnZXMvZmFjZXMvZmFjZS0zLmpwZ1wiIGFsdD1cIi4uLlwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPk1pa2UgQW5kcmV3PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5taWNoYWVsMjQ8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiB0ZXh0LWNlbnRlclwiPlwiTGFtYm9yZ2hpbmkgTWVyY3k8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBjaGljayBzaGUgc28gdGhpcnN0eTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJJ20gaW4gdGhhdCB0d28gc2VhdCBMYW1ib1wiPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaW1wbGVcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmVcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpbXBsZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpbXBsZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzLXNxdWFyZVwiLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZjb3B5OyAyMDE2IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5DaXR5Tm93PC9hPiBDby5MdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyUHJvZmlsZTtcblxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIl19
