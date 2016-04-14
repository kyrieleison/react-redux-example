var React       = require('react');
var ItemActions = require('../actions/ItemActions');
var ItemStore   = require('../stores/ItemStore');
var ItemForm    = require('./ItemForm');
var ItemList    = require('./ItemList');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      items: ItemStore.getAll()
    };
  },

  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
    ItemActions.setup();
  },

  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ items: ItemStore.getAll() });
  },

  render: function() {
    return (
      <div className="app">
        <h1>TODO Application</h1>
        <ItemForm />
        <ItemList items={this.state.items} />
      </div>
    );
  }
});
