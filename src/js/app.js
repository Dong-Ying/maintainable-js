var $ = require('jquery');
var Locations = require('./module/locations');
var SearchFormView  = require('./view/search-form');
var LocationsView = require('./view/locations');
$(function() {
    var locations = [
        {'id':0, "name": "Melbourne", "description": "A great place", status: true}
    ];

    var model = new Locations({'locations': locations});

    var searchFormView = new SearchFormView(model);
    var locationsView = new LocationsView(model);

    $('#searchForm').append(searchFormView.render());
    $('#locations').append(locationsView.render());
});
