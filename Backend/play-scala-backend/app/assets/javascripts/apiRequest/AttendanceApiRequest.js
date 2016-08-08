
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
