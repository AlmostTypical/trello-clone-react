var React = require('react');

const CardAdderInput = React.createClass({
  getInitialState: function () {
    return {
      input: '',
      text: '',
      id: 0
    }
  },
  render: function () {
    return (
      <div>
        <input className="textarea" value={this.state.input} type="text" placeholder="Type text here..." onChange={this.handleInputChange}/>
        <button className="button is-success" onClick={this.handleSaveCard}>Save</button>
        <button className="button is-danger" onClick={this.props.toggleDisplay}>X</button>
      </div>
    )
  },
  handleInputChange: function (e) {
    this.setState({input: e.target.value});
  },
  handleSaveCard: function () {
    this.props.saveCard({text: this.state.input, cardId: new Date().getTime()});
    this.setState({input: ''});
  }
});

module.exports = CardAdderInput;