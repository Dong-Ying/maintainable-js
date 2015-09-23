var React = require('react');
var _ = require('lodash');
var $ = require('jquery');
var Action = require('../actions/Action');

module.exports = React.createClass({
  getInitialState: function() {
    return {inputValue: ''};
  },

  search: function (){
    $.ajax({
      url: "http://location-backend-service.herokuapp.com/locations?name=" + this.state.inputValue
    }).done(function (data) {
      _.each(data,function(value,index){
        value.id=index;
        value.status= true;
      });
      Action.setAll(data);
    });
    this.setState({inputValue: ''});
  },

  handleInput: function(){
    this.setState({inputValue: event.target.value});
  },

  render: function(){
    return (
     <div id="searchForm">
       <div className="large-9 medium-9 columns">
         <input type="text" id="locationInput"  value={this.state.inputValue} placeholder="Type a location name to search" onChange={this.handleInput}/>
       </div>
       <div className="large-3 medium-3 columns">
         <input type="button" className="submit button tiny" id="searchButton" value="search" onClick={this.search}/>
       </div>
     </div>
    )
  }
});
