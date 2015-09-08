var React = require('react');
var _ = require('lodash');
var SearchForm = require('./search-form.jsx');
var SearchResultList = require('./search-result-list.jsx');
var $ = require('jquery');
//var LikedPlace = require('./liked-place.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    var locations = [
      {'id':0, "name": "Melbourne", "description": "A great place", status: true}
    ];

    return {locations: locations};
  },

  changeStatus: function(id){
    var locations = this.state.locations;
    var location = _.first(_.where(locations, {id: id}));
    location.status = !location.status;

    this.setState({locations: locations});
  },

  handleAdd: function (search_word){
    var self = this;
    $.ajax({
      url: "http://location-backend-service.herokuapp.com/locations?name=" + search_word
    }).done(function (data) {
      _.each(data,function(value,index){
        value.id=index+1;
        value.status= true;
      })
      self.setState({locations: data});
    });
  },

  render: function(){
    return (
      <div>
        <div className="row">
            <SearchForm onAdd={this.handleAdd}/>
        </div>

        <div className="row">
          <hr className="large-12 columns"/>
        </div>

        <div className="row" id="locations">
          <SearchResultList locations={this.state.locations} changeStatus={this.changeStatus}/>
        </div>
      </div>
    )
  }
});
