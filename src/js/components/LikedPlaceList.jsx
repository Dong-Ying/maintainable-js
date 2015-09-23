var React = require('react');
var LikedPlace = require('./LikedPlace.jsx');
var _ = require('lodash');

module.exports = React.createClass({

  render: function(){
    var likedPlaces = _.map(this.props.locations, function(location){
      if(!location.status){
        return <LikedPlace location={location}/>;
      }
    });

    return (
      <div  className="large-4 medium-4 columns" id="likedPlaces">
        <h4>Places I liked</h4>
        <nav>
          {likedPlaces}
        </nav>
      </div>
    );
  }
});
