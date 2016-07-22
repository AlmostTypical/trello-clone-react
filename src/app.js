const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('../components/NavBar');
const Menu = require('../components/Menu');
const ListBoard = require('../components/ListBoard');
const List = require('../components/List');
const Card = require('../components/Card');


const App = React.createClass({
  render: function () {
    return (
      <div className="modal-background">
        <div className="container is-fluid">
          <NavBar />
          <Menu />
          <ListBoard list={this.props.list} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
