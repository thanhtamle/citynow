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
            employeeBody.push(
                <tr>
                    <td><font><font>{item['id']}</font></font></td>
                    <td><font><font>{item['employeeID']}</font></font></td>
                    <td><font><font>{item['employeeName']}</font></font></td>
                    <td><font><font>{item['employeeEmail']}</font></font></td>
                    <td><font><font>{item['admin']}</font></font></td>
                    <td><font><font>{item['permission']}</font></font></td>
                    <td><font><font>{item['deleteFlag']}</font></font></td>
                    <td>
                        <span>
                            <button className="btn btn-primary btn-link" data-toggle='modal' data-target="#history">
                                <font><font>Delete</font></font>
                            </button>
                        </span>
                    </td>
                </tr>);
        }

        for (var key in allAttendanceList) {
            var item = allAttendanceList[key];
            attendanceBody.push(
                <tr>
                    <td><font><font>{item['id']}</font></font></td>
                    <td><font><font>{item['employeeID']}</font></font></td>
                    <td><font><font>{item['arrivalTime']}</font></font></td>
                    <td><font><font>{item['departureTime']}</font></font></td>
                    <td><font><font>{item['finish']}</font></font></td>
                    <td><font><font>{item['managerEmployeeID']}</font></font></td>
                    <td><font><font>{item['deleteFlag']}</font></font></td>
                    <td>
                        <span>
                            <button className="btn btn-primary btn-link" data-toggle='modal' data-target="#history">
                                <font><font>Delete</font></font>
                            </button>
                        </span>
                    </td>
                </tr>);
        }

        for (var key in allPermissionList) {
            var item = allPermissionList[key];
            permissionBody.push(
                <tr>
                    <td><font><font>{item['id']}</font></font></td>
                    <td><font><font>{item['employeeID']}</font></font></td>
                    <td><font><font>{item['isPermission']}</font></font></td>
                    <td><font><font>{item['isPermission']}</font></font></td>
                    <td>
                        <span>
                            <button className="btn btn-primary btn-link" data-toggle='modal' data-target="#history">
                                <font><font>Granted</font></font>
                            </button>
                        </span>
                    </td>
                    <td>
                        <span>
                            <button className="btn btn-primary btn-link" data-toggle='modal' data-target="#history">
                                <font><font>Delete</font></font>
                            </button>
                        </span>
                    </td>
                </tr>);
        }

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li style={{padding: '13px', fontsize: '18px'}}>Dashboard</li>
                    <li className="active"><a href="#employee" data-toggle="tab">Employee</a></li>
                    <li><a href="#attendance" data-toggle="tab">Attendance</a></li>
                    <li><a href="#permission" data-toggle="tab">Permission</a></li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane active" id="employee">
                        <div className="row">
                            <div className="col-xs-10">
                                <h4 style={{marginleft: '50px'}}>All employee list</h4>

                                <table className="table table-striped table-bordered">
                                    <thead style={{backgroundColor: '#7FFFD4'}}>
                                    <tr style={{height: '30px'}}>
                                        <th><font><font>ID</font></font></th>
                                        <th><font><font>EmployeeID</font></font></th>
                                        <th><font><font>EmployeeName</font></font></th>
                                        <th><font><font>EmployeeEmail</font></font></th>
                                        <th><font><font>Admin</font></font></th>
                                        <th><font><font>Permission</font></font></th>
                                        <th><font><font>DeleteFlag</font></font></th>
                                        <th></th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {employeeBody}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane " id="attendance">
                        <div className="row">
                            <div className="col-xs-10">
                                <h4 style={{marginleft: '50px'}}>All attendance list</h4>

                                <table className="table table-striped table-bordered">
                                    <thead style={{backgroundColor: '#7FFFD4'}}>
                                    <tr style={{height: '30px'}}>
                                        <th><font><font>ID</font></font></th>
                                        <th><font><font>EmployeeID</font></font></th>
                                        <th><font><font>ArrivalTime</font></font></th>
                                        <th><font><font>DepartureTime</font></font></th>
                                        <th><font><font>Finish</font></font></th>
                                        <th><font><font>ManagerEmployeeID</font></font></th>
                                        <th><font><font>DeleteFlag</font></font></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {attendanceBody}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane " id="permission">
                        <div className="row">
                            <div className="col-xs-10">
                                <h4 style={{marginleft: '50px'}}>All permission list</h4>

                                <table className="table table-striped table-bordered">
                                    <thead style={{backgroundColor: '#7FFFD4'}}>
                                    <tr style={{height: '30px'}}>
                                        <th><font><font>ID</font></font></th>
                                        <th><font><font>EmployeeID</font></font></th>
                                        <th><font><font>IsPermission</font></font></th>
                                        <th><font><font>DeleteFlag</font></font></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {permissionBody}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = Home;
