var _ = require('lodash');
var React = require('react');
var LocationStore = require('../stores/LocationStore.js');
var SearchForm = require('./SearchForm.jsx');
var SearchResultList = require('./SearchResultList.jsx');
var LikedPlaceList = require('./LikedPlaceList.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return this._getAllLocations();
  },

  componentDidMount: function() {
    LocationStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LocationStore.removeChangeListener(this._onChange);
  },

  _getAllLocations: function(){
    return {locations: LocationStore.getAll()};
  },

  _onChange: function() {
    this.setState(this._getAllLocations());
  },

  render: function(){
    return (
      <div>
        <div className="row">
            <SearchForm/>
        </div>

        <div className="row">
          <hr className="large-12 columns"/>
        </div>

        <div className="row" id="locations">
          <SearchResultList locations = {this.state.locations}/>
          <LikedPlaceList locations = {this.state.locations}/>
        </div>
      </div>
    )
  }
});
