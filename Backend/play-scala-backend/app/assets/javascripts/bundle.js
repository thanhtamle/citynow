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

window.onhashchange = function () {

    window.history.go();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQWNjb3VudEFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvQXR0ZW5kYW5jZUFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwaVJlcXVlc3QvUGVybWlzc2lvbkFwaVJlcXVlc3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwcC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9EYXNoYm9hcmQucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvRm9vdGVyLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL0hvbWUucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTG9naW4ucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWFpbi5yZWFjdC5qcyIsImFwcC9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXAucmVhY3QuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1RhYmxlLnJlYWN0LmpzIiwiYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL1VzZXJQcm9maWxlLnJlYWN0LmpzIiwibm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQ0EsSUFBSSxlQUFlLFFBQVEsUUFBUixFQUFrQixZQUFyQztBQUNBLElBQUksU0FBUyxRQUFRLGVBQVIsQ0FBYjs7QUFFQSxJQUFJLGVBQWUsaUJBQW5CO0FB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QUE7QUFBQTtBQUxBLDZDQURKO0FBUUk7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSixpREFEQTtBQVFBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEosaURBUkE7QUFlQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLGlEQWZBO0FBc0JBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEosaURBdEJBO0FBNkJBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFwQko7QUFESjtBQXBNSjtBQTVDSixTQURKO0FBK1FIO0FBblIrQixDQUFsQixDQUFsQjs7QUFzUkEsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7QUMxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBDSEFOR0VfRVZFTlQgPSAnRW1wbG95ZWUtQ2hhbmdlJztcbnZhciBSRVNQT05TRV9FVkVOVCA9ICdFbXBsb3llZS1SZXNwb25zZSc7XG5cbnZhciBhbGxFbXBsb3llZUxpc3QgPSB7fTtcbnZhciBfcmVzcG9uc2UgPSB7fTtcblxudmFyIEVtcGxveWVlQXBpUmVxdWVzdCA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gICAgZ2V0QWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhbGxFbXBsb3llZUxpc3Q7XG4gICAgfSxcbiAgICBnZXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3Jlc3BvbnNlO1xuICAgIH0sXG4gICAgbG9hZEFsbEVtcGxveWVlTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IGpzUm91dGVzLmNvbnRyb2xsZXJzLkVtcGxveWVlQ29udHJvbGxlci5lbXBsb3llZXMoKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogci51cmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxsRW1wbG95ZWVMaXN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICBFbXBsb3llZUFwaVJlcXVlc3QuZW1pdENoYW5nZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxsRW1wbG95ZWVMaXN0ID0ge307XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBsb2dpbjogZnVuY3Rpb24gKGVtcGxveWVlKSB7XG4gICAgICAgIHZhciByID0ganNSb3V0ZXMuY29udHJvbGxlcnMuRW1wbG95ZWVDb250cm9sbGVyLmxvZ2luKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHIudXJsLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IGVtcGxveWVlLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGFbJ2Z1bmN0aW9uJ10gPSAnbG9naW4nO1xuICAgICAgICAgICAgICAgIGRhdGFbJ21lc3NhZ2UnXSA9ICdMb2dpbiBzdWNjZXNzZnVsbHkhJztcbiAgICAgICAgICAgICAgICBfcmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc3BvbnNlKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGRhdGFbJ2Z1bmN0aW9uJ10gPSAnbG9naW4nO1xuICAgICAgICAgICAgICAgIGRhdGFbJ21lc3NhZ2UnXSA9ICdMb2dpbiBlcnJvciEnO1xuICAgICAgICAgICAgICAgIF9yZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICAgfSxcbiAgICBlbWl0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KFJFU1BPTlNFX0VWRU5UKTtcbiAgICB9LFxuXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgYWRkUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZVJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRW1wbG95ZWVBcGlSZXF1ZXN0O1xuIiwiXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdBdHRlbmRhbmNlLUNoYW5nZSc7XG52YXIgUkVTUE9OU0VfRVZFTlQgPSAnQXR0ZW5kYW5jZS1SZXNwb25zZSc7XG5cbnZhciBhbGxBdHRlbmRhbmNlTGlzdCA9IHt9O1xudmFyIF9yZXNwb25zZSA9IHt9O1xuXG52YXIgQXR0ZW5kYW5jZUFwaVJlcXVlc3QgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICAgIGdldEFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWxsQXR0ZW5kYW5jZUxpc3Q7XG4gICAgfSxcbiAgICBnZXRSZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3Jlc3BvbnNlO1xuICAgIH0sXG4gICAgbG9hZEFsbEF0dGVuZGFuY2VMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0ganNSb3V0ZXMuY29udHJvbGxlcnMuQXR0ZW5kYW5jZUNvbnRyb2xsZXIuYXR0ZW5kYW5jZXMoKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogci51cmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxsQXR0ZW5kYW5jZUxpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICAgICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0ID0ge307XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgIH0sXG4gICAgZW1pdFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdChSRVNQT05TRV9FVkVOVCk7XG4gICAgfSxcblxuICAgIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGFkZFJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfSxcbiAgICByZW1vdmVSZXNwb25zZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihSRVNQT05TRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dGVuZGFuY2VBcGlSZXF1ZXN0O1xuIiwiXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdFbXBsb3llZS1DaGFuZ2UnO1xudmFyIFJFU1BPTlNFX0VWRU5UID0gJ0VtcGxveWVlLVJlc3BvbnNlJztcblxudmFyIGFsbFBlcm1pc3Npb25MaXN0ID0ge307XG52YXIgX3Jlc3BvbnNlID0ge307XG5cbnZhciBQZXJtaXNzaW9uQXBpUmVxdWVzdCA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gICAgZ2V0QWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhbGxQZXJtaXNzaW9uTGlzdDtcbiAgICB9LFxuICAgIGdldFJlc3BvbnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgfSxcbiAgICBsb2FkQWxsUGVybWlzc2lvbkxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBqc1JvdXRlcy5jb250cm9sbGVycy5QZXJtaXNzaW9uQ29udHJvbGxlci5nZXRBbGxSZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiByLnVybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhbGxQZXJtaXNzaW9uTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgUGVybWlzc2lvbkFwaVJlcXVlc3QuZW1pdENoYW5nZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxsUGVybWlzc2lvbkxpc3QgPSB7fTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICAgfSxcbiAgICBlbWl0UmVzcG9uc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KFJFU1BPTlNFX0VWRU5UKTtcbiAgICB9LFxuXG4gICAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgYWRkUmVzcG9uc2VMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oUkVTUE9OU0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIHJlbW92ZVJlc3BvbnNlTGlzdGVuZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFJFU1BPTlNFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVybWlzc2lvbkFwaVJlcXVlc3Q7XG4iLCJcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZXI7XG52YXIgUm91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZTtcbnZhciBJbmRleFJvdXRlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuSW5kZXhSb3V0ZTtcbnZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLmhhc2hIaXN0b3J5O1xudmFyIFJvdXRlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGU7XG52YXIgTWFpbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NYWluLnJlYWN0Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ib21lLnJlYWN0Jyk7XG52YXIgTG9naW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTG9naW4ucmVhY3QnKTtcbnZhciBEYXNoYm9hcmQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGFzaGJvYXJkLnJlYWN0Jyk7XG52YXIgVXNlclByb2ZpbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvVXNlclByb2ZpbGUucmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9UYWJsZS5yZWFjdCcpO1xudmFyIE1hcCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NYXAucmVhY3QnKTtcbnZhciBOb3RpZmljYXRpb24gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnJlYWN0Jyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxuUmVhY3RET00ucmVuZGVyKChcblx0ICBcdDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuXHRcdCAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59PlxuXHRcdCAgICBcdDxJbmRleFJvdXRlIGNvbXBvbmVudD17TG9naW59Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufS8+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGNvbXBvbmVudD17RGFzaGJvYXJkfS8+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL3VzZXJQcm9maWxlXCIgY29tcG9uZW50PXtVc2VyUHJvZmlsZX0vPlxuXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi90YWJsZVwiIGNvbXBvbmVudD17VGFibGV9Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvbWFwXCIgY29tcG9uZW50PXtNYXB9Lz5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvbm90aWZpY2F0aW9uXCIgY29tcG9uZW50PXtOb3RpZmljYXRpb259Lz5cblx0XHQgICAgPC9Sb3V0ZT5cblx0ICAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb2FwcCcpKTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG53aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICB3aW5kb3cuaGlzdG9yeS5nbygpXG59XG5cbnZhciBOb3RpZmljYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1jb2xvcj1cInB1cnBsZVwiIGRhdGEtaW1hZ2U9XCJhc3NldHMvaW1hZ2VzL3NpZGViYXItNS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIiBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaXR5Tm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnZGFzaGJvYXJkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ncmFwaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhc2hib2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3VzZXJQcm9maWxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy11c2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndGFibGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW5vdGUyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0ZW5kYW5jZSBMaXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbWFwJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1tYXAtbWFya2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFwczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J25vdGlmaWNhdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtYmVsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb24tZXhhbXBsZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5FbWFpbCBTdGF0aXN0aWNzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5MYXN0IENhbXBhaWduIFBlcmZvcm1hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRQcmVmZXJlbmNlc1wiIGNsYXNzTmFtZT1cImN0LWNoYXJ0IGN0LXBlcmZlY3QtZm91cnRoXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtaW5mb1wiLz4gT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWRhbmdlclwiLz4gQm91bmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtd2FybmluZ1wiLz4gVW5zdWJzY3JpYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvY2stb1wiLz4gQ2FtcGFpZ24gc2VudCAyIGRheXMgYWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VXNlcnMgQmVoYXZpb3I8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPjI0IEhvdXJzIHBlcmZvcm1hbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRIb3Vyc1wiIGNsYXNzTmFtZT1cImN0LWNoYXJ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWluZm9cIi8+IE9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC1kYW5nZXJcIi8+IENsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHRleHQtd2FybmluZ1wiLz4gQ2xpY2sgU2Vjb25kIFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oaXN0b3J5XCIvPiBVcGRhdGVkIDMgbWludXRlcyBhZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+MjAxNCBTYWxlczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+QWxsIHByb2R1Y3RzIGluY2x1ZGluZyBUYXhlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoYXJ0QWN0aXZpdHlcIiBjbGFzc05hbWU9XCJjdC1jaGFydFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZSB0ZXh0LWluZm9cIi8+IFRlc2xhIE1vZGVsIFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUgdGV4dC1kYW5nZXJcIi8+IEJNVyA1IFNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIvPiBEYXRhIGluZm9ybWF0aW9uIGNlcnRpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5UYXNrczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+QmFja2VuZCBkZXZlbG9wbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1mdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNpZ24gY29udHJhY3QgZm9yIFwiV2hhdCBhcmUgY29uZmVyZW5jZSBvcmdhbml6ZXJzIGFmcmFpZCBvZj9cIjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZC1hY3Rpb25zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXQgVGFza1wiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgZGF0YS10b2dnbGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGluZXMgRnJvbSBHcmVhdCBSdXNzaWFuIExpdGVyYXR1cmU/IE9yIEUtbWFpbHMgRnJvbSBNeSBCb3NzPzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZC1hY3Rpb25zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXQgVGFza1wiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlbD1cInRvb2x0aXBcIiB0aXRsZT1cIlJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgZGF0YS10b2dnbGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Rmxvb2RlZDogT25lIHllYXIgbGF0ZXIsIGFzc2Vzc2luZyB3aGF0IHdhcyBsb3N0IGFuZCB3aGF0IHdhcyBmb3VuZCB3aGVuIGEgcmF2YWdpbmcgcmFpbiBzd2VwdCB0aHJvdWdoIG1ldHJvIERldHJvaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNyZWF0ZSA0IEludmlzaWJsZSBVc2VyIEV4cGVyaWVuY2VzIHlvdSBOZXZlciBLbmV3IEFib3V0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJlYWQgXCJGb2xsb3dpbmcgbWFrZXMgTWVkaXVtIGJldHRlclwiPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRkLWFjdGlvbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiRWRpdCBUYXNrXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zaW1wbGUgYnRuLXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZWRpdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcmVsPVwidG9vbHRpcFwiIHRpdGxlPVwiUmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBkYXRhLXRvZ2dsZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVuZm9sbG93IDUgZW5lbWllcyBmcm9tIHR3aXR0ZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGQtYWN0aW9ucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJFZGl0IFRhc2tcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNpbXBsZSBidG4teHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lZGl0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWw9XCJ0b29sdGlwXCIgdGl0bGU9XCJSZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc2ltcGxlIGJ0bi14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGlzdG9yeVwiLz4gVXBkYXRlZCAzIG1pbnV0ZXMgYWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAxNiA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+Q2l0eU5vdzwvYT4gQ28uTHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uO1xuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtjb21wb25lbnRDbGFzczogJ3AnfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTW9kYWwgPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAnKS5Nb2RhbDtcbnZhciBFbXBsb3llZUFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L0FjY291bnRBcGlSZXF1ZXN0Jyk7XG52YXIgQXR0ZW5kYW5jZUFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L0F0dGVuZGFuY2VBcGlSZXF1ZXN0Jyk7XG52YXIgUGVybWlzc2lvbkFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L1Blcm1pc3Npb25BcGlSZXF1ZXN0Jyk7XG5cbmZ1bmN0aW9uIGdldEVtcGxveWVlU3RhdGUoKSB7XG4gICAgdmFyIGFsbCA9IEVtcGxveWVlQXBpUmVxdWVzdC5nZXRBbGwoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxFbXBsb3llZUxpc3Q6IGFsbFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBnZXRBdHRlbmRhbmNlU3RhdGUoKSB7XG4gICAgdmFyIGFsbCA9IEF0dGVuZGFuY2VBcGlSZXF1ZXN0LmdldEFsbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0OiBhbGxcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0UGVybWlzc2lvblN0YXRlKCkge1xuICAgIHZhciBhbGwgPSBQZXJtaXNzaW9uQXBpUmVxdWVzdC5nZXRBbGwoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxQZXJtaXNzaW9uTGlzdDogYWxsXG4gICAgfTtcbn07XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEVtcGxveWVlQXBpUmVxdWVzdC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgIEVtcGxveWVlQXBpUmVxdWVzdC5sb2FkQWxsRW1wbG95ZWVMaXN0KCk7XG5cbiAgICAgICAgQXR0ZW5kYW5jZUFwaVJlcXVlc3QuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICAgICAgICBBdHRlbmRhbmNlQXBpUmVxdWVzdC5sb2FkQWxsQXR0ZW5kYW5jZUxpc3QoKTtcblxuICAgICAgICBQZXJtaXNzaW9uQXBpUmVxdWVzdC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gICAgICAgIFBlcm1pc3Npb25BcGlSZXF1ZXN0LmxvYWRBbGxQZXJtaXNzaW9uTGlzdCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGxFbXBsb3llZUxpc3Q6IEVtcGxveWVlQXBpUmVxdWVzdC5nZXRBbGwoKSxcbiAgICAgICAgICAgIGFsbEF0dGVuZGFuY2VMaXN0OiBBdHRlbmRhbmNlQXBpUmVxdWVzdC5nZXRBbGwoKSxcbiAgICAgICAgICAgIGFsbFBlcm1pc3Npb25MaXN0OiBQZXJtaXNzaW9uQXBpUmVxdWVzdC5nZXRBbGwoKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX29uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RW1wbG95ZWVTdGF0ZSgpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRBdHRlbmRhbmNlU3RhdGUoKSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0UGVybWlzc2lvblN0YXRlKCkpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbGxFbXBsb3llZUxpc3QgPSB0aGlzLnN0YXRlLmFsbEVtcGxveWVlTGlzdDtcbiAgICAgICAgdmFyIGFsbEF0dGVuZGFuY2VMaXN0ID0gdGhpcy5zdGF0ZS5hbGxBdHRlbmRhbmNlTGlzdDtcbiAgICAgICAgdmFyIGFsbFBlcm1pc3Npb25MaXN0ID0gdGhpcy5zdGF0ZS5hbGxQZXJtaXNzaW9uTGlzdDtcblxuICAgICAgICB2YXIgZW1wbG95ZWVCb2R5ID0gW107XG4gICAgICAgIHZhciBhdHRlbmRhbmNlQm9keSA9IFtdO1xuICAgICAgICB2YXIgcGVybWlzc2lvbkJvZHkgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsRW1wbG95ZWVMaXN0KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbEVtcGxveWVlTGlzdFtrZXldO1xuICAgICAgICAgICAgZW1wbG95ZWVCb2R5LnB1c2goXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2lkJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2VtcGxveWVlSUQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVOYW1lJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2VtcGxveWVlRW1haWwnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnYWRtaW4nXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsncGVybWlzc2lvbiddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydkZWxldGVGbGFnJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5EZWxldGU8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxBdHRlbmRhbmNlTGlzdCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxBdHRlbmRhbmNlTGlzdFtrZXldO1xuICAgICAgICAgICAgYXR0ZW5kYW5jZUJvZHkucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaWQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydhcnJpdmFsVGltZSddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydkZXBhcnR1cmVUaW1lJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGZvbnQ+PGZvbnQ+e2l0ZW1bJ2ZpbmlzaCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydtYW5hZ2VyRW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydkZWxldGVGbGFnJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5EZWxldGU8L2ZvbnQ+PC9mb250PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxQZXJtaXNzaW9uTGlzdCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxQZXJtaXNzaW9uTGlzdFtrZXldO1xuICAgICAgICAgICAgcGVybWlzc2lvbkJvZHkucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaWQnXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnZW1wbG95ZWVJRCddfTwvZm9udD48L2ZvbnQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxmb250Pjxmb250PntpdGVtWydpc1Blcm1pc3Npb24nXX08L2ZvbnQ+PC9mb250PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Zm9udD48Zm9udD57aXRlbVsnaXNQZXJtaXNzaW9uJ119PC9mb250PjwvZm9udD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9XCIjaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9udD48Zm9udD5HcmFudGVkPC9mb250PjwvZm9udD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxpbmtcIiBkYXRhLXRvZ2dsZT0nbW9kYWwnIGRhdGEtdGFyZ2V0PVwiI2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvbnQ+PGZvbnQ+RGVsZXRlPC9mb250PjwvZm9udD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e3BhZGRpbmc6ICcxM3B4JywgZm9udHNpemU6ICcxOHB4J319PkRhc2hib2FyZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiI2VtcGxveWVlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5FbXBsb3llZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNhdHRlbmRhbmNlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5BdHRlbmRhbmNlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3Blcm1pc3Npb25cIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlBlcm1pc3Npb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwiZW1wbG95ZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2lubGVmdDogJzUwcHgnfX0+QWxsIGVtcGxveWVlIGxpc3Q8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZGRkQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+SUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlTmFtZTwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+RW1wbG95ZWVFbWFpbDwvZm9udD48L2ZvbnQ+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+QWRtaW48L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PlBlcm1pc3Npb248L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlbGV0ZUZsYWc8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcGxveWVlQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgXCIgaWQ9XCJhdHRlbmRhbmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbmxlZnQ6ICc1MHB4J319PkFsbCBhdHRlbmRhbmNlIGxpc3Q8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjN0ZGRkQ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGZvbnQ+PGZvbnQ+SUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkVtcGxveWVlSUQ8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkFycml2YWxUaW1lPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5EZXBhcnR1cmVUaW1lPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5GaW5pc2g8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250Pk1hbmFnZXJFbXBsb3llZUlEPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5EZWxldGVGbGFnPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0ZW5kYW5jZUJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIFwiIGlkPVwicGVybWlzc2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5sZWZ0OiAnNTBweCd9fT5BbGwgcGVybWlzc2lvbiBsaXN0PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzdGRkZENCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2hlaWdodDogJzMwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PklEPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5FbXBsb3llZUlEPC9mb250PjwvZm9udD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Zm9udD48Zm9udD5Jc1Blcm1pc3Npb248L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxmb250Pjxmb250PkRlbGV0ZUZsYWc8L2ZvbnQ+PC9mb250PjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzaW9uQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG52YXIgQWNjb3VudEFwaVJlcXVlc3QgPSByZXF1aXJlKCcuLi9hcGlSZXF1ZXN0L0FjY291bnRBcGlSZXF1ZXN0Jyk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2dpbkVycm9yQWxlcnQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFjY291bnRBcGlSZXF1ZXN0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QuYWRkUmVzcG9uc2VMaXN0ZW5lcih0aGlzLl9vblJlc3BvbnNlKTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFjY291bnRBcGlSZXF1ZXN0LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QucmVtb3ZlUmVzcG9uc2VMaXN0ZW5lcih0aGlzLl9vblJlc3BvbnNlKTtcbiAgICB9LFxuICAgIF9vbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICBfb25SZXNwb25zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBBY2NvdW50QXBpUmVxdWVzdC5nZXRSZXNwb25zZSgpO1xuICAgICAgICB2YXIgY2xhc3NBbGVydCA9IFwiZXJyb3JcIjtcblxuICAgICAgICBpZiAocmVzcG9uc2VbJ2Z1bmN0aW9uJ10gPT0gJ2xvZ2luJykge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydzdWNjZXNzJ10gPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TG9naW5FcnJvcihyZXNwb25zZVsnbWVzc2FnZSddLCBjbGFzc0FsZXJ0KTtcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBsb2dpbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJykudmFsdWU7XG4gICAgICAgIHZhciBwYXNzV29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzV29yZCcpLnZhbHVlO1xuXG4gICAgICAgIHZhciBsb2dpbiA9IHt9O1xuICAgICAgICBsb2dpbiBbXCJlbXBsb3llZUlEXCJdID0gdXNlck5hbWU7XG4gICAgICAgIGxvZ2luIFtcImVtcGxveWVlUGFzc3dvcmRcIl0gPSBwYXNzV29yZDtcbiAgICAgICAgQWNjb3VudEFwaVJlcXVlc3QubG9naW4oSlNPTi5zdHJpbmdpZnkobG9naW4pKTtcbiAgICB9LFxuICAgIHNob3dMb2dpbkVycm9yOiBmdW5jdGlvbiAobWVzc2FnZSwgY2xhc3NBbGVydCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IDxwIGNsYXNzTmFtZT17Y2xhc3NBbGVydH0+e21lc3NhZ2V9ICAgPC9wPjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5FcnJvckFsZXJ0OiBlbGVtZW50fSlcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiIG9uU3VibWl0PXt0aGlzLmxvZ2luQ2xpY2tlZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+PGgxPkNpdHlOb3c8L2gxPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2dpbkVycm9yQWxlcnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzV29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5sb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9naW47XG5cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9Gb290ZXIucmVhY3QnKTtcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxuXG52YXIgTWFwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIGRhdGEtY29sb3I9XCJwdXJwbGVcIiBkYXRhLWltYWdlPVwiYXNzZXRzL2ltYWdlcy9zaWRlYmFyLTUuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCIgY2xhc3NOYW1lPVwic2ltcGxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eU5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J2Rhc2hib2FyZCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtZ3JhcGhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXNoYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd1c2VyUHJvZmlsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtdXNlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZXIgUHJvZmlsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3RhYmxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ub3RlMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0dGVuZGFuY2UgTGlzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J21hcCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtbWFwLW1hcmtlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hcHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydub3RpZmljYXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWJlbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb24tZXhhbXBsZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPk1hcHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRhc2hib2FyZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBub3RpZmljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbms7XG5cblxudmFyIE5vdGlmaWNhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBkYXRhLWNvbG9yPVwicHVycGxlXCIgZGF0YS1pbWFnZT1cImFzc2V0cy9pbWFnZXMvc2lkZWJhci01LmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdHlOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydkYXNoYm9hcmQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWdyYXBoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGFzaGJvYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndXNlclByb2ZpbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLXVzZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd0YWJsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3Mtbm90ZTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRlbmRhbmNlIExpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydtYXAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW1hcC1tYXJrZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXBzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbm90aWZpY2F0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1iZWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2aWdhdGlvbi1leGFtcGxlLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj41PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gMzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIG5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb21ldGhpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZjb3B5OyAyMDE2IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5DaXR5Tm93PC9hPiBDby5MdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uO1xuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG5cbnZhciBUYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBkYXRhLWNvbG9yPVwicHVycGxlXCIgZGF0YS1pbWFnZT1cImFzc2V0cy9pbWFnZXMvc2lkZWJhci01LmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiIGNsYXNzTmFtZT1cInNpbXBsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdHlOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydkYXNoYm9hcmQnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLWdyYXBoXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGFzaGJvYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndXNlclByb2ZpbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLXVzZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eyd0YWJsZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3Mtbm90ZTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRlbmRhbmNlIExpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydtYXAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW1hcC1tYXJrZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXBzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbm90aWZpY2F0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1iZWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZpZ2F0aW9uLWV4YW1wbGUtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5BdHRlbmRhbmNlIExpc3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRhc2hib2FyZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBub3RpZmljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0cmlwZWQgVGFibGUgd2l0aCBIb3ZlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+SGVyZSBpcyBhIHN1YnRpdGxlIGZvciB0aGlzIHRhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0YWJsZS1yZXNwb25zaXZlIHRhYmxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2FsYXJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYWtvdGEgUmljZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQzNiw3Mzg8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OaWdlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk91ZC1UdXJuaG91dDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWluZXJ2YSBIb29wZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kMjMsNzg5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3VyYcOnYW88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TaW5hYWktV2FhczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2FnZSBSb2RyaWd1ZXo8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNTYsMTQyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmV0aGVybGFuZHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWlsZXV4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QaGlsaXAgQ2hhbmV5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDM4LDczNTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPktvcmVhLCBTb3V0aDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk92ZXJsYW5kIFBhcms8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRvcmlzIEdyZWVuZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ2Myw1NDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYWxhd2k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GZWxka2lyY2hlbiBpbiBLw6RybnRlbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD42PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWFzb24gUG9ydGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDc4LDYxNTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNoaWxlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+R2xvdWNlc3RlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXBsYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+VGFibGUgb24gUGxhaW4gQmFja2dyb3VuZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+SGVyZSBpcyBhIHN1YnRpdGxlIGZvciB0aGlzIHRhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0YWJsZS1yZXNwb25zaXZlIHRhYmxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNhbGFyeTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRyeTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2l0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGFrb3RhIFJpY2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kMzYsNzM4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmlnZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5PdWQtVHVybmhvdXQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk1pbmVydmEgSG9vcGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDIzLDc4OTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkN1cmHDp2FvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2luYWFpLVdhYXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNhZ2UgUm9kcmlndWV6PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDU2LDE0MjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5ldGhlcmxhbmRzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmFpbGV1eDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD40PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGhpbGlwIENoYW5leTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQzOCw3MzU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Lb3JlYSwgU291dGg8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5PdmVybGFuZCBQYXJrPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Eb3JpcyBHcmVlbmU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNjMsNTQyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWFsYXdpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RmVsZGtpcmNoZW4gaW4gS8Okcm50ZW48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk1hc29uIFBvcnRlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ3OCw2MTU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DaGlsZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkdsb3VjZXN0ZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7IDIwMTYgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPkNpdHlOb3c8L2E+IENvLkx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZTtcblxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxuXG52YXIgVXNlclByb2ZpbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgZGF0YS1jb2xvcj1cInB1cnBsZVwiIGRhdGEtaW1hZ2U9XCJhc3NldHMvaW1hZ2VzL3NpZGViYXItNS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpdHlub3cuanBcIiBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaXR5Tm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnZGFzaGJvYXJkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1ncmFwaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhc2hib2FyZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3VzZXJQcm9maWxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy11c2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBQcm9maWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsndGFibGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBlLTdzLW5vdGUyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0ZW5kYW5jZSBMaXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnbWFwJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwZS03cy1tYXAtbWFya2VyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFwczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J25vdGlmaWNhdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtYmVsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdGlmaWNhdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb24tZXhhbXBsZS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlByb2ZpbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRhc2hib2FyZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Tm90aWZpY2F0aW9uIDQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBub3RpZmljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNhcmV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29tZXRoaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2VwYXJhdGVkIGxpbms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5FZGl0IFByb2ZpbGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db21wYW55IChkaXNhYmxlZCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgdmFsdWU9XCJDcmVhdGl2ZSBDb2RlIEluYy5cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPVwibWljaGFlbDIzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIHZhbHVlPVwiTWlrZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiB2YWx1ZT1cIkFuZHJld1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiSG9tZSBBZGRyZXNzXCIgdmFsdWU9XCJCbGQgTWloYWlsIEtvZ2FsbmljZWFudSwgbnIuIDggQmwgMSwgU2MgMSwgQXAgMDlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPVwiTWlrZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIHZhbHVlPVwiQW5kcmV3XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3RhbCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJaSVAgQ29kZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BYm91dCBNZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkhlcmUgY2FuIGJlIHlvdXIgZGVzY3JpcHRpb25cIiB2YWx1ZT1cIk1pa2VcIj5MYW1ib3JnaGluaSBNZXJjeSwgWW91ciBjaGljayBzaGUgc28gdGhpcnN0eSwgSSdtIGluIHRoYXQgdHdvIHNlYXQgTGFtYm8uPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1maWxsIHB1bGwtcmlnaHRcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly91bnVuc3BsYXNoLmltZ2l4Lm5ldC9waG90by0xNDMxNTc4NTAwNTI2LTRkOTYxMzAxNTQ2ND9maXQ9Y3JvcCZmbT1qcGcmaD0zMDAmcT03NSZ3PTQwMFwiIGFsdD1cIi4uLlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXIgYm9yZGVyLWdyYXlcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZhY2VzL2ZhY2UtMy5qcGdcIiBhbHQ9XCIuLi5cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5NaWtlIEFuZHJldzxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+bWljaGFlbDI0PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gdGV4dC1jZW50ZXJcIj5cIkxhbWJvcmdoaW5pIE1lcmN5PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgY2hpY2sgc2hlIHNvIHRoaXJzdHk8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSdtIGluIHRoYXQgdHdvIHNlYXQgTGFtYm9cIjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2ltcGxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2stc3F1YXJlXCIvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaW1wbGVcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaW1wbGVcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1nb29nbGUtcGx1cy1zcXVhcmVcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2l0eW5vdy5qcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5cmlnaHQgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAxNiA8YSBocmVmPVwiaHR0cDovL3d3dy5jaXR5bm93LmpwXCI+Q2l0eU5vdzwvYT4gQ28uTHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlclByb2ZpbGU7XG5cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiJdfQ==
