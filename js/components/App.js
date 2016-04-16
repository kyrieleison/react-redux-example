var React          = require('react');
var ItemActions    = require('../actions/ItemActions');
var ItemStore      = require('../stores/ItemStore');
var ItemCreateForm = require('./ItemCreateForm');
var ItemSearchForm = require('./ItemSearchForm');
var ItemList       = require('./ItemList');

module.exports = React.createClass({
  getInitialState: function() {
    return ItemStore.getAll();
  },

  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
    ItemActions.setup();
  },

  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(ItemStore.getAll());
  },

  render: function() {
    return (
      <div className="app">
        <h1>わたしの考えた最強のECサイト(仮)</h1>
        <ItemCreateForm />
        <ItemSearchForm />
        <ItemList items={this.state.items} />
      </div>
    );
  }
});
