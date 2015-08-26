var LikedPlacesView = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:likedPlaces', _.bind(this.render, this));
        this.template = $('#liked-places-template').html();
    },

    el: '#likedPlaces',

    render: function() {
        var compiled = _.template(this.template);
        console.log(this.model.toJSON());
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
