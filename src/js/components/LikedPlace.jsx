var React = require('react');
var Action = require('../actions/Action');

module.exports = React.createClass({
  handleChange: function(){
    console.log("liked place handle change has been called",this.props.location.id);
    Action.remove(this.props.location.id);
  },

  render: function() {
    if(!this.props.location.status){
      return (
        <li>
          {this.props.location.name}
          <a href="#" className="remove tiny right" data-id={this.props.location.id} onClick={this.handleChange}>Remove</a>
        </li>
      );
    }
    return null;
  }
});
