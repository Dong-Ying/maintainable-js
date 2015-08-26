$(function() {
    var searchResults = [
        {'id':0, "name": "Melbourne", "description": "A great place", status: true}
    ];

    var likedPlaces = [
        {"id":0,"name": "Melbourne"}
    ];

    var searchResultsModel = new SearchResults({'searchResults': searchResults});
    var likedPlacesModel = new LikedPlaces({'likedPlaces': likedPlaces});

    var searchFormView = new SearchFormView(searchResultsModel);
    var searchResultsView = new SearchResultsView(searchResultsModel, likedPlacesModel);
    var likedPlacesView = new LikedPlacesView(likedPlacesModel);

    searchResultsView.render();
    searchFormView.render();
    likedPlacesView.render();
});
