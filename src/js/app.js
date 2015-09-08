var $ = require('jquery');
var React = require('react');
var LocationApp = require('./components/location-app.jsx');

$(function() {
    React.render(<LocationApp />, document.getElementById('container'));
});
