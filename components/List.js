var React = require('react');
var ListBoard = require('./ListBoard');
var Card = require('./Card');
var CardAdderPlaceholder = require('./CardAdderPlaceholder');
var CardAdderInput = require('./CardAdderInput');
var CardAdder = require('./CardAdder');
var _ = require('underscore');



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
  deleteCard: function (cardId) {
    this.setState({
      cards: _.reject(this.state.cards, function (card) {
        return card.cardId === cardId})

    })
  },
  render: function () {
    var deleteCard = this.deleteCard;
    var cardNodes = this.state.cards.map(function(card, i) {
      return (
        <Card deleteCard={deleteCard} cardId={card.cardId} key={i} text={card.text}/>
      )
    });
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-4 is-flex">
            <div className="box">
              <div>{this.props.name}</div>
              <div>{cardNodes}</div>
              <CardAdder
                saveCard={this.saveCard}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = List;