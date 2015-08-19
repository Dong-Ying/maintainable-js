describe('search result',function(){
    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        jasmine.Ajax.install();
    });
    describe('when search result is empty',function(){
        beforeEach(function(){
            //jasmine.getFixtures().fixturesPath = '';
            loadFixtures('index.html');
            var testResponses = [];
            jasmine.Ajax.stubRequest(
                'http://location-backend-service.herokuapp.com/locations?name=mel'
            ).andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'text/xml;charset=UTF-8',
                    responseText: JSON.stringify(testResponses)
                });
        });

        it('append search result on index page',function(){
            $('#locationInput').val('mel');
            $("#searchButton").click();
            expect($("#results .panel")).count().toEqual(1);
            expect($("#results .panel h5").first().text()).toEqual('Melbourne');
            expect($("#results .panel h6").first().text()).toEqual('Second largest city (by population) of Australia, a ' +
                'trendy metropolis with everything you expect from a big city.');
        });
    };

    describe('when search result is not empty', function() {
        beforeEach(function(){
            //jasmine.getFixtures().fixturesPath = '';
            loadFixtures('index.html');
            var testResponses = [
                {
                    description: "Second largest city (by population) of Australia, a trendy metropolis with everything you expect from a big city.",
                    name: "Melbourne"
                }
            ];
            jasmine.Ajax.stubRequest(
                'http://location-backend-service.herokuapp.com/locations?name=mel'
            ).andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'text/xml;charset=UTF-8',
                    responseText: JSON.stringify(testResponses)
                });
        });

        it('append search result on index page',function(){
            $('#locationInput').val('mel');
            $("#searchButton").click();
            expect($("#results .panel")).count().toEqual(1);
            expect($("#results .panel h5").first().text()).toEqual('Melbourne');
            expect($("#results .panel h6").first().text()).toEqual('Second largest city (by population) of Australia, a ' +
                'trendy metropolis with everything you expect from a big city.');
        });
    })
});