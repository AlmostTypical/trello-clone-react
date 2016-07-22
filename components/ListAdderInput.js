var React = require('react');
var app = require('../src/app');
var ListAdder = require('./ListAdder');

const ListAdderInput = React.createClass({
  getInitialState: function () {
    return {
      input: '',
      name: '',
      id: 0
    }
  },
  render: function () {
    return (
      <div className="control">
        <div className="box">
          <p className="control">
            <input className="name" type="text" placeholder="Type list name here..." onChange={this.handleInputChange}/>
          </p>
          <button className="button is-success" onClick={this.handleSaveList}>Save</button>
          <button className="button is-danger" onClick={this.props.toggleDisplay}>X</button>
        </div>
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