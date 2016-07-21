var React = require('react');
var List = require('./List');
var Card = require('./Card');

const ListBoard = React.createClass({
  render: function () {
    return (
      <div className="box">
        <h2>This is the board for lists</h2>
        <List />
      </div>
    )
  }
});

module.exports = ListBoard;