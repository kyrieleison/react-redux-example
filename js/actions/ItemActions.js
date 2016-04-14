var AppDispatcher = require('../dispatcher/AppDispatcher');
var ItemConstants = require('../constants/ItemConstants');

module.exports = {
  setup: function() {
    // NOTE: ここでAjaxを用いてサーバサイドから取得してもよい
    var items = [
      { id: 'i9tajxy9', name: '牛乳を買う', created_at: '2015/05/01 9:00:00' },
      { id: 'i9ta58tx', name: 'パンを買う', created_at: '2015/05/01 9:00:00' }
    ];
    AppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_SETUP,
      items: items
    });
  },

  create: function(name) {
    // NOTE: ここでAjaxを用いてサーバサイドから取得・作成してもよい
    AppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_CREATE,
      name: name
    });
  },

  destroy: function(id) {
    // NOTE: ここでAjaxを用いてサーバサイドから取得・削除してもよい
    AppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_DESTROY,
      id: id
    });
  }
};
