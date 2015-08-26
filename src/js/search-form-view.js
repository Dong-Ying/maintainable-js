var SearchFormView = Backbone.View.extend({
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
            _.each(data,function(value,index){
                value.id=index+1;
                value.status= true;
            })
            that.model.set('searchResults', data);
            that.model.trigger('change:searchResults', data);
        });
    },

    render: function () {
        var compiled = _.template(this.template);
        var html = compiled();
        this.$el.html(html);

        return this.$el;
    }
});
