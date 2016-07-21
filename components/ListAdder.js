var React = require('react');
var ListBoard = require('./ListBoard');
var List = require('./List');

var ListAdder = React.createClass({
  render: function () {
    return (
      <div>
        <button className="button is-success">Add list...</button>
      </div>
    )
  }
});

module.exports = ListAdder;