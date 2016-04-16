var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ItemConstants = require('../constants/ItemConstants');

var state = {
  items: [],
  filter: '',
};

function setup(items) {
  state['items'] = items;
}

function create(name) {
  var newItem = {
    id: (Date.now() + Math.floor(Math.random() * 999999)).toString(36),
    name: name,
    created_at: (new Date()).toLocaleString()
  };
  state['items'] = [newItem].concat(state['items']);
}

function destroy(id) {
  var filterdItems = state['items'].filter(function(item) {
    return item.id == id ? false : true;
  });
  state['items'] = filterdItems;
}

var ItemStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return state;
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
