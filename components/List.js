var React = require('react');
var ListBoard = require('./ListBoard');
var Card = require('./Card');
var CardAdderPlaceholder = require('./CardAdderPlaceholder');
var CardAdderInput = require('./CardAdderInput');
var CardAdder = require('./CardAdder');



const List = React.createClass({
  getInitialState: function () {
    return {
      cards: []
    }
  },
  saveCard: function (card) {
    this.setState({
      cards: this.state.cards.concat([card])
    })
  },
  render: function () {
    var cardNodes = this.state.cards.map(function(card, i) {
      return (
        <Card key={i} text={card.text}/>
      )
    });
    return (
      <div className="tile is-parent">
        <div className="tile is-child is-pulled-left">
          <div className="box">
            <div>{this.props.name}</div>
            <div>{cardNodes}</div>
            <CardAdder saveCard={this.saveCard} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = List;