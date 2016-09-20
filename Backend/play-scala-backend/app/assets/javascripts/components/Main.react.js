var React = require('react');
var Footer = require('./Footer.react');

var Main = React.createClass({


    render: function () {
        return (
            <div>
                {this.props.children}
                <Footer/>
            </div>
        );
    },
});

module.exports = Main;
