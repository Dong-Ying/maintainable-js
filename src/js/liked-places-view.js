var LikedPlacesView = Backbone.View.extend({
    initialize: function (searchResultsModel, likedPlacesModel) {
        this.searchResultsmodel = searchResultsModel;
        this.likedPlacesModel = likedPlacesModel;
        this.likedPlacesModel.bind('change:likedPlaces', _.bind(this.render, this));
        this.template = $('#liked-places-template').html();
    },

    el: '#likedPlaces',

    events: {
        'click .remove': 'removeLikedPlace'
    },

    removeLikedPlace: function(e){
        e.preventDefault();
        var id = $(e.currentTarget).data('id');
        var likedPlaces = this.likedPlacesModel.get('likedPlaces');
        var searchResults = this.searchResultsmodel.get('searchResults');
        var likedPlaces = this.likedPlacesModel.get('likedPlaces');
        this.likedPlacesModel.set('likedPlaces',_.filter(likedPlaces,function(element){
            return element.id !=id
        }));
        var current = _.findWhere(searchResults, {"id": id});
        current.status = !current.status;
        this.searchResultsmodel.trigger('change:searchResults', searchResults);
        this.likedPlacesModel.trigger('change:likedPlaces', likedPlaces);
    },

    render: function() {
        var compiled = _.template(this.template);
        console.log(this.likedPlacesModel.toJSON());
        var html = compiled(this.likedPlacesModel.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
