var React = require('react');

const CardAdderPlaceholder = function (props) {
  return <button className="button is-success" onClick={props.toggleCardDisplay}>Add a card...</button>
};

module.exports = CardAdderPlaceholder;