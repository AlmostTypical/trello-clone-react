var React = require('react');
var ListBoard = require('./ListBoard');
var List = require('./List');
var ListAdderPlaceholder = require('./ListAdderPlaceholder');
var ListAdderInput = require('./ListAdderInput');

var ListAdder = React.createClass({
  getInitialState: function () {
    return {displayInput: false}
  },
  toggleDisplay: function () {
    this.setState({
      displayInput: !this.state.displayInput
    });
  },
  render: function () {
    return (this.state.displayInput
        ? <ListAdderInput />
        : <ListAdderPlaceholder toggleDisplay={this.toggleDisplay} />
    )
  }
});

module.exports = ListAdder;