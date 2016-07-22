var React = require('react');
var List = require('./List');
var Card = require('./Card');
var ListAdder = require('./ListAdder');
var _ = require('underscore');

const ListBoard = React.createClass({
  getInitialState: function () {
    return {
      lists: [],
    };
  },
  render: function () {
    var deleteList = this.deleteList;
    var listNodes = this.state.lists.map(function(list, i) {
      return (
        <List deleteList={deleteList} listId={list.listId} key={i} name={list.name}/>
      )
    });
    return (
      <div className="level">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-flex">{listNodes}
          <ListAdder
            saveList={this.saveList}
          />
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
        })
      })
    }
  }
});

module.exports = ListBoard;

