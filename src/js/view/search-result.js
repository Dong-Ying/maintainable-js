var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../template/search-result.hbs');

module.exports = Backbone.View.extend({

  initialize: function (model) {
    this.model = model;
    this.model.bind('change:status', _.bind(this.render, this));
  },

  events: {
    'click .status': 'toggle'
  },

  el: '#locations',

  toggle: function (e) {
    e.preventDefault();
    this.model.set('status', !this.model.get('status'));
  },

  render: function() {
    var html = template(this.model.toJSON());
    this.$el.find('#results').html(html);
    return this.$el;
  }
});
