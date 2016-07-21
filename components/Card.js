var React = require('react');
var List = require('./List');

const Card = React.createClass({
  render: function () {
    console.log(this.props.text);
    return (
      <div className="box">
        <div>{this.props.text}</div>
        <button className="button is-danger is-outlined">
          <span>Delete</span>
          <span className="icon">
            <i className="fa fa-times"> </i>
          </span>
        </button>
      </div>
    )
  }
});

module.exports = Card;