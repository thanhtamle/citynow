var React = require('react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');

var Main = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="container">
  	    <Header/>        
          {this.props.children}
  	    <Footer/>
	    </div>
    );
  },
});

module.exports = Main;
