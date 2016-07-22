var React = require('react');
var List = require('./List');
var Card = require('./Card');
var ListAdder = require('./ListAdder');
var _ = require('underscore');

const ListBoard = React.createClass({
  getInitialState: function () {
    return {
      lists: [],
      cards: []
    };
  },
  render: function () {
    var deleteList = this.deleteList;
    var listNodes = this.state.lists.map(function(list, i) {
      var filteredCards = this.state.cards.filter(function(card){
        return card.listId === list.listId;
      }.bind(this));
      return (
        <List deleteList={deleteList}
              listId={list.listId}
              key={i}
              name={list.name}
              cards={filteredCards}
              saveCard={this.saveCard}
              deleteCard={this.deleteCard}/>
      )
    }.bind(this));
    return (
      <div className="level">
        <div className="tile is-ancestor">
          <div className="tile is-flex">
            {listNodes}
            <ListAdder saveList={this.saveList}/>
          </div>
        </div>
      </div>
    )
  },
  saveList: function (list) {
    this.setState({
      lists: this.state.lists.concat([list])
    })
  },
  deleteList: function (listId) {
    var option = confirm('Are you sure you want to delete this list?');
    if (option) {
      this.setState({
        lists: _.reject(this.state.lists, function (list) {
          return list.listId === listId

        }),
        cards: _.reject(this.state.cards, function (cards){
          return cards.listId === listId
        })
      })
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
    });
  },
});

module.exports = ListBoard;

