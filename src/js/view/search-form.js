var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../template/search-form.hbs');

module.exports = Backbone.View.extend({
    initialize: function (model) {
        this.model = model;
    },

    events: {
        'click #searchButton': 'updateSearchResults'
    },

    updateSearchResults: function (e) {
        e.preventDefault();
        var that = this;
        var search_word = $("#locationInput").val();
        $.ajax({
            url: "http://location-backend-service.herokuapp.com/locations?name=" + search_word
        }).done(function (data) {
            _.each(data,function(value,index){
                value.id=index+1;
                value.status= true;
            })
            that.model.set('locations', data);
        });
    },

    render: function () {
        var html = template();
        this.$el.html(html);

        return this.$el;
    }
});
