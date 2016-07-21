var React = require('react');
var List = require('./List');
var Card = require('./Card');
var ListAdder = require('./ListAdder');

const ListBoard = React.createClass({
  getInitialState: function () {
    return {
      lists: []
    };
  },
  render: function () {
    var listNodes = this.state.lists.map(function(list, i) {
      return (
        <List key={i} name={list.name}/>
      )
    });
    return (
      <div className="box">
        <div>{listNodes}</div>
        <ListAdder saveList={this.saveList} />
        <List />
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