const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="">Hello World</h1>
        <ListBoard />
        <NavBar />
        <Menu />
      </div>
    );
  }
});

const ListBoard = React.createClass({
  render: function () {
    return (
      <div>
        <h2>This is the board for lists</h2>
        <List />
      </div>
    )
  }
});

const List = React.createClass({
  render: function () {
    return (
      <div>
        <h3>This is a list</h3>
        <Card />
      </div>
    )
  }
});

const Card = React.createClass({
  render: function () {
    return (
      <h4>This is a card</h4>
    )
  }
});

const NavBar = React.createClass({
  render: function () {
    return (
      <div>Navbar!</div>
    )
  }
});

const Menu = React.createClass({
  render: function () {
    return (
      <div>I'm a menu! :D</div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
