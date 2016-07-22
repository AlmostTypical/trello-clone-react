const React = require('react');
const ReactDOM = require('react-dom');
const NavBar = require('../components/NavBar');
const Menu = require('../components/Menu');
const ListBoard = require('../components/ListBoard');
const List = require('../components/List');
const Card = require('../components/Card');


const App = React.createClass({
  getInitialState: function () {
    return {
      bgColor: '#373737'
    }
  },
  render: function () {
    var style = {
      backgroundColor: this.state.bgColor
    };
    return (
      <div style={style} className="modal-background">
        <div className="container is-fluid">
          <NavBar />
          <Menu changeColor={this.changeColor}/>
          <ListBoard list={this.props.list}/>
        </div>
      </div>
    );
  },
  changeColor: function (hex) {
    console.log(hex);
    this.setState({bgColor: hex})
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
