var React = require('react');
var app = require('../src/app');
var ListAdder = require('./ListAdder');

const ListAdderInput = React.createClass({
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Type name here..."/>
        <button>Save</button>
        <button>X</button>
      </div>
    )
  }
});

module.exports = ListAdderInput;