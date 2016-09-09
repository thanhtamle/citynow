var React = require('react');
var Link = require('react-router').Link;
var AccountApiRequest = require('../apiRequest/AccountApiRequest');

var Login = React.createClass({

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
    _onChange: function () {

    },
    _onResponse: function () {
        var response = AccountApiRequest.getResponse();
        var classAlert = "error";

        if (response['function'] == 'login') {
            if (response['success'] == 1) {
                this.props.history.push('/dashboard');
            }
            else
                this.showLoginError(response['message'], classAlert);
        }

    },
    loginClicked: function () {
        var userName = document.getElementById('userName').value;
        var passWord = document.getElementById('passWord').value;

        var login = {};
        login ["employeeID"] = userName;
        login ["employeePassword"] = passWord;
        AccountApiRequest.login(JSON.stringify(login));
    },
    showLoginError: function (message, classAlert) {
        var element = <p className={classAlert}>{message}   </p>;
        this.setState({loginErrorAlert: element})
    },
    render: function () {

        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={this.loginClicked}>
                        <p className="message"><h1>CityNow</h1></p>
                        <br/>
                        {this.state.loginErrorAlert}
                        <br/>
                        <input id="userName" type="text" placeholder="Username" required/>
                        <input id="passWord" type="password" placeholder="Password" required/>
                        <button type="submit">login</button>
                    </form>
                </div>
            </div>
        );
    },
});

module.exports = Login;

