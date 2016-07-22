var React = require('react');
var List = require('./List');

const Card = React.createClass({
  remove: function(){
    this.props.deleteCard(this.props.cardId);
  },
  render: function () {
    return (
      <div className="box">
        <div>{this.props.text}</div>
        <button className="button is-danger is-outlined" onClick={this.remove}>
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