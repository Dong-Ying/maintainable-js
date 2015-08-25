describe('SearchResultsView', function () {
    'use strict';

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
        loadFixtures('search-results.template');
    });

    it('#initialize', function () {
        var searchResultsView = new SearchResultsView(new Backbone.Model());
        expect(searchResultsView).toBeDefined();
    });

    describe('#render', function () {
        it('#render empty search results', function () {
            var model = new Backbone.Model({searchResults: []});
            var searchResultsView = new SearchResultsView(model);
            var html = searchResultsView.render();
            expect(html.find('h4')).toExist();
            expect(html.find('#results')).toExist();
            expect(html.find('.panel')).not.toExist();
        });

        it('#render non-empty search results', function () {
            var model = new Backbone.Model({
                searchResults: [
                    {
                        name: "Melbourne",
                        description: 'A great place'
                    }
                ]
            });

            var searchResultsView = new SearchResultsView(model);
            var html = searchResultsView.render();
            expect(html.find('h4')).toExist();
            expect(html.find('#results')).toExist();
            expect(html.find('.panel')).toExist();

            var first = html.find('.panel').first();
            expect(first.find('h5'))
                .toContainText('Melbourne');
            expect(first.find('h6'))
                .toContainText('A great place');
        });
    });
});
