var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ItemConstants = require('../constants/ItemConstants');

var _items = [];

function setup(items) {
  _items = items;
}

function create(name) {
  var item = {
    id: (Date.now() + Math.floor(Math.random() * 999999)).toString(36),
    name: name,
    created_at: (new Date()).toLocaleString()
  };
  _items = _items.concat([item]);
}

function destroy(id) {
  var newItems = _items.filter(function(item) { return item.id == id ? false : true });
  _items = newItems;
}

var ItemStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _items;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case ItemConstants.ITEM_SETUP:
      setup(action.items);
      ItemStore.emitChange();
      break;

    case ItemConstants.ITEM_CREATE:
      var name = action.name.trim();
      if (name !== '') {
        create(name);
        ItemStore.emitChange();
      }
      break;

    case ItemConstants.ITEM_DESTROY:
      destroy(action.id);
      ItemStore.emitChange();
      break;

    default:
      // noop
  }
});

module.exports = ItemStore;
