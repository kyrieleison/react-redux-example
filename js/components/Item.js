var React       = require('react');
var ItemActions = require('../actions/ItemActions');

module.exports = React.createClass({
  handleDestroy: function(e) {
    e.preventDefault();

    ItemActions.destroy(this.props.id);
  },

  render: function() {
    return (
      <div className="item">
        <span className="name">{this.props.children}</span>
        <span className="date">{this.props.created_at}</span>
        <button onClick={this.handleDestroy}>削除</button>
      </div>
    );
  }
});
