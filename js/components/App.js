var React          = require('react');
var ItemActions    = require('../actions/ItemActions');
var ItemStore      = require('../stores/ItemStore');
var ItemCreateForm = require('./ItemCreateForm');
var ItemList       = require('./ItemList');

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
        <h1>わたしの考えた最強のECサイト(仮)</h1>
        <ItemCreateForm />
        <ItemList items={this.state.items} />
      </div>
    );
  }
});
