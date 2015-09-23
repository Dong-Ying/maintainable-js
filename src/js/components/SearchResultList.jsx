var React = require('react');
var SearchResult = require('./SearchResult.jsx');
var _ = require('lodash');

module.exports = React.createClass({
  render: function(){
    var searchResults = _.map(this.props.locations, function(location){
      return <SearchResult location={location}/>;
    });

    return (
      <div className="large-8 medium-8 columns" id="searchResults">
        <h4>Search results</h4>
        <div id="results">
          {searchResults}
        </div>
      </div>
    );
  }
});
