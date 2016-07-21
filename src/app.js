const React = require('react');
const ReactDOM = require('react-dom');

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="navbar">
        <div className="nav-center">Poor Man's Trello</div>
      </div>
    )
  }
});

const Menu = React.createClass({
  render: function () {
    return (
      <div className="tile is-vertical">I'm a menu! :D</div>
    )
  }
});

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        <Menu />
        <ListBoard />
      </div>
    );
  }
});

const ListBoard = React.createClass({
  render: function () {
    return (
      <div className="box">
        <h2>This is the board for lists</h2>
        <List />
      </div>
    )
  }
});

const List = React.createClass({
  render: function () {
    return (
      <div className="tile is-parent">
        <div className="tile is-child is-pulled-left">
          <div className="box">
            <h3>List Name 1</h3>
            <Card />
            <button className="button is-success">Add a card...</button>
          </div>
        </div>
        <div className="tile is-child is-pulled-left">
          <div className="box">
            <h3>List Name 2</h3>
            <Card />
            <button className="button is-success">Add a card...</button>
          </div>
        </div>
        <div className="tile is-child is-pulled-left">
          <div className="box">
            <h3>List Name 3</h3>
            <Card />
            <button className="button is-success">Add a card...</button>
          </div>
        </div>
      </div>
    )
  }
});

const Card = React.createClass({
  render: function () {
    return (
      <div className="box">
        <h4>Card text</h4>
        <button className="button is-danger is-outlined">
          <span>Delete</span>
          <span className="icon">
            <i className="fa fa-times"></i>
          </span>
        </button>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
