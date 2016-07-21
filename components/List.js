var React = require('react');
var ListBoard = require('./ListBoard');
var Card = require('./Card');



const List = React.createClass({
  render: function () {
    return (
      <div className="tile is-parent">
        <div className="tile is-child is-pulled-left">
          <div className="box">
            <h3>List Name 1</h3>
            <Card />
            <button className="button is-success">Add a card...</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = List;