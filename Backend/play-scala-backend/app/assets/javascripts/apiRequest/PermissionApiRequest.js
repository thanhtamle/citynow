
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
