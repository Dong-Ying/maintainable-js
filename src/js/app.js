var $ = require('jquery');
var Locations = require('./module/locations');
var SearchFormView  = require('./view/search-form');
var SearchResultsView = require('./view/search-results');
var LikedPlacesView = require('./view/liked-places');

$(function() {
    var locations = [
        {'id':0, "name": "Melbourne", "description": "A great place", status: true}
    ];

    var model = new Locations({'locations': locations});

    var searchFormView = new SearchFormView(model);
    var searchResultsView = new SearchResultsView(model);
    var likedPlacesView = new LikedPlacesView(model);

    $('#searchForm').append(searchFormView.render());
    $('#results').append(searchResultsView.render());
    $('#likedPlaces').append(likedPlacesView.render());
});
