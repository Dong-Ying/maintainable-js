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
    var id = $(e.target).data('id');
    if(this.model.get('id')==id){
      this.model.set('status', !this.model.get('status'));
    }
  },

  el: '#likedPlaces',

  render: function () {
    var id = this.model.get('id');
    var className = "liked-"+id;
    if(this.model.get('status')){
      $('.'+className).remove();
    }else{
      var wrapper = $('<div></div>');
      $(wrapper).attr("class", className);
      var html = template(this.model.toJSON());
      $(wrapper).html(html);
      this.$el.append(wrapper);
    }
    return this.$el;
  }
});
