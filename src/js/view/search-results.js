var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var SearchResultView = require('./search-result');
var LikedPlace

module.exports = Backbone.View.extend({
    initialize: function (model) {
        this.views=[];
        this.model = model;
        this.model.bind('change:locations', _.bind(this.render, this));
    },

    createSubView: function(model) {
        return new SearchResultView(new Backbone.Model(model));
    },

    getDom: function (view) {
        return view.render();
    },

    render: function () {
        var searchResults = this.model.get('locations');
        this.views = _.map(searchResults, _.bind(this.createSubView, this));
        this.$el.html(_.map(this.views, _.bind(this.getDom, this)));

        return this.$el;
    }
});
