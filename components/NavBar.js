var React = require('react');
var app = require('../src/app');

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="navbar">
        <div className="box">
          <h1 className="has-text-centered title is-1">Poor Man's Trello</h1>
        </div>
      </div>
    )
  }
});

module.exports = NavBar;

