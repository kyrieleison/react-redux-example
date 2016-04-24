var React = require('react');
var Item  = require('./Item');

module.exports = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
      if (item.name.indexOf(this.props.filter) === -1) {
        return;
      } else {
        return <Item key={item.id} id={item.id} created_at={item.created_at}>{item.name}</Item>;
      }
    }.bind(this));
    return (
      <div className="itemList">
        {items}
      </div>
    );
  }
});
