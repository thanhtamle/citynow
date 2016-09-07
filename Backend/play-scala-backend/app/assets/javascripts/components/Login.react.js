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

    },
    loginClicked: function () {
        var userName = document.getElementById('userName').value;
        var passWord = document.getElementById('passWord').value;


    },
    showLoginError: function () {
        var element = <p className="error">Error</p>;
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
                        <input id="userName" type="text" placeholder="Username"/>
                        <input  id="passWord" type="password" placeholder="Password"/>
                        <button type="submit">login</button>
                    </form>
                </div>
            </div>
        );
    },
});

module.exports = Login;

