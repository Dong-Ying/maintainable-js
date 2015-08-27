var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');

var template = require("../templates/search-form.hbs");

module.exports = Backbone.View.extend({
    initialize: function (model) {
        this.model = model;
        this.template = $('#search-form').html();
    },

    events: {
        'click #searchButton': 'updateSearchResults'
    },

    el: '#searchForm',

    updateSearchResults: function (e) {
        e.preventDefault();
        var that = this;
        var search_word = $("#locationInput").val();
        $.ajax({
            url: "http://location-backend-service.herokuapp.com/locations?name=" + search_word
        }).done(function (data) {
            that.model.set('searchResults', data);
            that.model.trigger('change:searchResults', data);
        });
    },

    render: function () {
        var html = template();
        this.$el.html(html);

        return this.$el;
    }
});
