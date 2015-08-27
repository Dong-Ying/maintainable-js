var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');

var template = require("../templates/search-results.hbs");

module.exports = Backbone.View.extend({
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
        likedPlaces.push({name: 'haha'});
        this.likedPlacesModel.trigger('change:likedPlaces', likedPlaces);
    },

    el: '#searchResults',

    render: function () {
        var html = template(this.searchResultsmodel.toJSON());
        this.$el.html(html);

        return this.$el;
    }
});
