var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../template/liked-place.hbs');
module.exports = Backbone.View.extend({
  initialize: function (model) {
    this.model = model;
    this.model.bind('change:status', _.bind(this.render, this));
  },

  events: {
    'click .remove': 'removeLikedPlace'
  },

  removeLikedPlace: function(e){
    e.preventDefault();
    this.model.set('status', !this.model.get('status'));
  },

  el: '#locations',

  render: function () {
    console.log("liked places have been rendered again");
    var html = template(this.model.toJSON());
    this.$el.find('#likedPlaces').html(html);

    return this.$el;
  }
});
