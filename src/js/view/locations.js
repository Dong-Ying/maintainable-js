var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');


var SearchResultView = require('./search-result');
var LikedPlaceView = require('./liked-place');

module.exports = Backbone.View.extend({
  initialize: function (model) {
    this.views = [];
    this.model = model;
    this.model.bind('change:locations', _.bind(this.render, this));
  },

  createSubView: function(model) {
    //every location get a subview;
    var subView = [];
    var subModel = new Backbone.Model(model);
    subView.push(new SearchResultView(subModel));
    subView.push(new LikedPlaceView(subModel));
    return subView;
  },

  renderSubView: function (views) {
    _.each(views,function(view){
      view.render();
    });
  },

  render: function () {
    var locations = this.model.get('locations');
    this.views = _.map(locations, _.bind(this.createSubView, this));

    console.log(this.views.length,"------------------------------");
    _.map(this.views, _.bind(this.renderSubView, this));

    return this.$el;
  }
});
