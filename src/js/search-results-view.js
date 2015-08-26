var SearchResultsView = Backbone.View.extend({
    initialize: function (searchResultsModel, likedPlacesModel) {
        this.searchResultsmodel = searchResultsModel;
        this.likedPlacesModel = likedPlacesModel;
        this.searchResultsmodel.bind('change:searchResults', _.bind(this.render, this));
        this.template = $('#search-results-template').html();
    },

    events: {
        'click .status': 'likeLocation'
    },

    likeLocation: function (e) {

        e.preventDefault();
        //toggle search result status
        var id = $(e.currentTarget).data('id');
        console.log(id);
        var searchResults = this.searchResultsmodel.get('searchResults');
        var current = _.findWhere(searchResults, {"id": id});
        current.status = !current.status;
        this.searchResultsmodel.trigger('change:searchResults', searchResults);
        //trigger liked places
        var likedPlaces = this.likedPlacesModel.get('likedPlaces');
        likedPlaces.push({name: $($(e.currentTarget)[0]).parent().find('h5').text()});
        this.likedPlacesModel.trigger('change:likedPlaces', likedPlaces);


    },

    el: '#searchResults',

    render: function () {
        var compiled = _.template(this.template);
        var html = compiled(this.searchResultsmodel.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
