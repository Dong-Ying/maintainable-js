var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var LikedPlacesView = require('./liked-place');

module.exports = Backbone.View.extend({
    initialize: function (module) {
      this.views=[];
      this.model = module;
      this.model.bind('change:locations', _.bind(this.render, this));
    },

    createSubView: function(model) {
        return new LikedPlacesView(new Backbone.Model(model));
    },

    getDom: function (view) {
        return view.render();
    },

    render: function() {
        console.log("liked places have been triggered");
        var likedPlaces = this.model.get('locations');
        this.views = _.map(likedPlaces, _.bind(this.createSubView, this));
        this.$el.html(_.map(this.views, _.bind(this.getDom, this)));

        return this.$el;
    }
});
