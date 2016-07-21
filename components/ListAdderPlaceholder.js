var React = require('react');
var app = require('../src/app');
var ListAdder = require('./ListAdder');

const ListAdderPlaceholder = React.createClass({
  render: function () {
    return (
      <button className="button is-success" onClick={this.props.toggleDisplay}>Add list...</button>
    )
  }
});

module.exports = ListAdderPlaceholder;