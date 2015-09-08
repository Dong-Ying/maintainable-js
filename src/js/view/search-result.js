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
    'click .status': 'toggleButton'
  },

  el: '#results',

  toggleButton: function (e) {
    e.preventDefault();
    var id = $(e.target).data('id');
    if(this.model.get('id')==id){
      this.model.set('status', !this.model.get('status'));
    }
  },

  likeButton: function(id){
    $("#results [data-id='"+id+"']").text('Like');
  },

  unlikeButton: function(id){
    $("#results [data-id='"+id+"']").text('unLike');
  },

  render: function() {
    var id = this.model.get('id');
    var className = "result-"+id;
    if($('.'+className).length){
      if(this.model.get('status')){
        this.likeButton(id);
      }else{
        this.unlikeButton(id);
      }
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
