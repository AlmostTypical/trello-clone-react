var React = require('react');
var ListBoard = require('./ListBoard');
var List = require('./List');
var ListAdderPlaceholder = require('./ListAdderPlaceholder');
var ListAdderInput = require('./ListAdderInput');

var ListAdder = React.createClass({
  getInitialState: function () {
    return {
      displayInput: false,
    }
  },
  render: function () {
    return this.state.displayInput
        ? <ListAdderInput saveList={this.props.saveList} toggleDisplay={this.toggleDisplay}/>
        : <ListAdderPlaceholder toggleDisplay={this.toggleDisplay} />
  },
  toggleDisplay: function () {
    this.setState({
      displayInput: !this.state.displayInput
    });
  }
});

module.exports = ListAdder;