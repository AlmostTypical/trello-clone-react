var React = require('react');
var Card = require('./Card');
var CardAdder = require('./CardAdder');



const List = React.createClass({
  remove: function() {
    this.props.deleteList(this.props.listId);
  },
  render: function () {
    var cardNodes = this.props.cards.map(function(card, i) {
      return (
        <Card deleteCard={this.props.deleteCard}
              cardId={card.cardId}
              listId={this.props.listId}
              key={i}
              text={card.text}/>
      )
    }.bind(this));
    return (
            <div className="box">
              <button className="button is-danger is-outlined"
                      onClick={this.remove}>
                <span>Delete List</span>
                <span className="icon">
                        <i className="fa fa-times"></i>
                      </span>
              </button>
              <div>{this.props.name}</div>
              <div>{cardNodes}</div>
              <CardAdder
                listId={this.props.listId}
                saveCard={this.props.saveCard}/>
            </div>
    )
  }
});

module.exports = List;