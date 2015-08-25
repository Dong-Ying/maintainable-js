var SearchResultsView = Backbone.View.extend({
    initialize: function (searchResultsModel, likedPlacesModel) {
        this.searchResultsmodel = searchResultsModel;
        this.likedPlacesModel = likedPlacesModel;
        this.searchResultsmodel.bind('change:searchResults', _.bind(this.render, this));
        this.template = $('#search-results-template').html();
    },

    events: {
        'click .like': 'likeLocation'
    },

    likeLocation: function (e) {
        e.preventDefault();
        //var id = $(e.currentTarget).data('id');
        var likedPlaces = this.likedPlacesModel.get('likedPlaces');
        console.log(e.currentTarget);
        likedPlaces.push({name: $(e.currentTarget.parent).find('h5').text()});
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
