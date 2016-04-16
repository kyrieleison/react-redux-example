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
        <span className="name">最強の{this.props.children}</span>
        <div className="right">
          <span className="date">{this.props.created_at}</span>
          <span className="delete" onClick={this.handleDestroy}><i className="icon">close</i></span>
        </div>
      </div>
    );
  }
});
