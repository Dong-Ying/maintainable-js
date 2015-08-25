var LikedPlacesView = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:likedPlaces', _.bind(this.render, this));
        this.template = $('#liked-places-template').html();
    },

    //events: {
    //  'click .toggle': 'toggleTodo'
    //},

    //toggleTodo: function(e) {
    //  e.preventDefault();
    //  var id = $(e.currentTarget).data('id');
    //  var todos = this.model.get('todos');
    //  var current = _.findWhere(todos, {"id": id});
    //  current.status = !current.status;
    //  this.model.trigger('change:todos', todos);
    //},

    el: '#likedPlaces',

    render: function() {
        var compiled = _.template(this.template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
