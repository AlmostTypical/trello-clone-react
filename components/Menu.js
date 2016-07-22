var React = require('react');
var app = require('../src/app');

const Menu = React.createClass({

  changeColor: function (e) {
    this.props.changeColor(e.target.value);
  },
  render: function () {
    return (
      <div className="box">
        <select name="colors"
                onChange = {this.changeColor}>
          <option> Choose a colour</option>
          <option value="#373737">Black</option>
          <option value="#c1002e">Red</option>
          <option value="#0a975d">Marine Green</option>
          <option value="#F7B52D">Golden Yellow</option>
        </select>
      </div>
    )
  }
});

module.exports = Menu;

// #c1002e NC Red
// #373737 NC Black