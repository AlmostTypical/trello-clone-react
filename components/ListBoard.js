var React = require('react');
var List = require('./List');
var Card = require('./Card');
var ListAdder = require('./ListAdder');
var List = require('./List');

const ListBoard = React.createClass({

  render: function () {
    return (
      <div className="box">
        <h2>This is the board for lists</h2>
        <ListAdder />
        <List />
      </div>
    )
  }
});

module.exports = ListBoard;