var React       = require('react');
var ItemActions = require('../actions/ItemActions');

module.exports = React.createClass({
  handleChange: function(e) {
    e.preventDefault();

    var filter = React.findDOMNode(this.refs.filter);
    ItemActions.search(filter.value.trim());
  },

  render: function() {
    return (
      <form className="form itemSearchForm">
        <input type="text" placeholder="絞込検索" ref="filter" value={this.props.filter} onChange={this.handleChange} />
      </form>
    );
  }
});
