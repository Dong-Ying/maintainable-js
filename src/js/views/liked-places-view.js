var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');

var template = require("../templates/liked-places.hbs");

module.exports = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:likedPlaces', _.bind(this.render, this));
        this.template = $('#liked-places-template').html();
    },

    el: '#likedPlaces',

    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this.$el;
    }
});
