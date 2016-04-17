var React       = require('react');
var ItemActions = require('../actions/ItemActions');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var name = React.findDOMNode(this.refs.name);
    ItemActions.create(name.value.trim());
    name.value = '';
  },

  render: function() {
    return (
      <form className="form itemCreateForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="商品名" ref="name" />
        <button type="submit">追加</button>
      </form>
    );
  }
});
