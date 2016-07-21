var React = require('react');
var app = require('../src/app');
var ListAdder = require('./ListAdder');

const ListAdderInput = React.createClass({
  getInitialState: function () {
    return {
      input: ''
    }
  },
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Type name here..."/>
        <button onClick={this.handleSaveList}>Save</button>
        <button onClick={this.props.toggleDisplay}>X</button>
      </div>
    )
  },
  handleInputChange: function (e) {
    this.setState({input: e.target.value})
  },
  handleSaveList: function () {
    this.props.saveList({name: this.state.input});
    this.setState({input: ''});
  }
});

module.exports = ListAdderInput;