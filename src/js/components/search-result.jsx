var React = require('react');

module.exports = React.createClass({
  handleChange: function(){
    this.props.changeStatus(this.props.location.id);
  },

  render: function(){
    return (
      <div className="panel large-12 columns">
        <h5>{this.props.location.name}</h5>
        <h6>{this.props.location.description}</h6>
        <a href="#" className="status button tiny right" data-id={`{this.props.location.id}`}>
          { this.props.location.status ? 'Like' : 'Unlike' }
        </a>
      </div>
);
  }
});
