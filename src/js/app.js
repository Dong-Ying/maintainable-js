$(function() {
    var searchResults = [
        {"name": "Melbourne", "description": "A great place"}
    ];

    var likedPlaces = [
        {"name": "Melbourne"}
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
