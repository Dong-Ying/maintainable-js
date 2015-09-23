var $ = require('jquery');
var React = require('react');
var LocationApp = require('./components/LocationApp.jsx');

$(function() {
    React.render(<LocationApp />, document.getElementById('container'));
});
