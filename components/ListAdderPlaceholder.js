var React = require('react');
var app = require('../src/app');
var ListAdder = require('./ListAdder');

const ListAdderPlaceholder = function (props) {
  return <button className="button is-success" onClick={props.toggleDisplay}>Add list...</button>
};

module.exports = ListAdderPlaceholder;