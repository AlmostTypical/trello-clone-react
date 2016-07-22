var React = require('react');
var List = require('./List');
var Card = require('./Card');
var ListAdder = require('./ListAdder');

const ListBoard = React.createClass({
  getInitialState: function () {
    return {
      lists: [],
    };
  },
  render: function () {
    var listNodes = this.state.lists.map(function(list, i) {
      return (
        <List key={new Date().getDate()} name={list.name}/>
      )
    });
    return (
      <div className="level">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-flex">{listNodes}
          <ListAdder saveList={this.saveList} />
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
});

module.exports = ListBoard;

//