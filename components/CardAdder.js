var React = require('react');
var CardAdderPlaceholder = require('./CardAdderPlaceholder');
var CardAdderInput = require('./CardAdderInput');

var CardAdder = React.createClass({
  getInitialState: function () {
    return {
      displayCardInput: false,
    }
  },
  render: function () {
    return this.state.displayCardInput
      ? <CardAdderInput saveCard={this.props.saveCard}
                        toggleDisplay={this.toggleCardDisplay}
                        listId={this.props.listId}/>
      : <CardAdderPlaceholder toggleCardDisplay={this.toggleCardDisplay} />
  },
  toggleCardDisplay: function () {
    this.setState({
      displayCardInput: !this.state.displayCardInput
    });
  }
});

module.exports = CardAdder;