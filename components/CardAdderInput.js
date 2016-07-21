var React = require('react');

const CardAdderInput = React.createClass({
  getInitialState: function () {
    return {
      input: '',
      text: ''
    }
  },
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Type text here..." onChange={this.handleInputChange}/>
        <button onClick={this.handleSaveCard}>Save</button>
        <button onClick={this.props.toggleDisplay}>X</button>
      </div>
    )
  },
  handleInputChange: function (e) {
    this.setState({input: e.target.value})
  },
  handleSaveCard: function () {
    this.props.saveCard({text: this.state.input});
    this.setState({input: ''});
  }
});

module.exports = CardAdderInput;