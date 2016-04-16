var AppDispatcher = require('../dispatcher/AppDispatcher');
var ItemConstants = require('../constants/ItemConstants');

module.exports = {
  setup: function() {
    var items = [
      { id: 'i9tajcvb', name: '濃密ギリシャヨーグルト パルテノ プレーン', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajxcv', name: '濃密ギリシャヨーグルト パルテノ はちみつ', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajzxc', name: '濃密ギリシャヨーグルト パルテノ ブルーベリーソース入り', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajvbn', name: '濃密ギリシャヨーグルト パルテノ キウイソース入り', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajdgg', name: '濃密ギリシャヨーグルト パルテノ ブラッドオレンジソース入り', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajdw9', name: 'ダノンビオ プレーン・加糖', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajdjk', name: 'ダノンビオ プレーン・砂糖不使用', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajdff', name: 'ダノンビオ 脂肪ゼロ プレーン・加糖', created_at: '2015/05/01 9:00:00' },
      { id: 'i9taasdd', name: 'ダノンデンシア プレーン・砂糖不使用', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajfas', name: 'ダノンデンシア プレーン・加糖', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajgff', name: 'カスピ海ヨーグルト プレーン', created_at: '2015/05/01 9:00:00' },
      { id: 'i9taeurr', name: '明治プロビオヨーグルトLG21', created_at: '2015/05/01 9:00:00' },
      { id: 'i9taju3e', name: '明治プロビオヨーグルトLG21 砂糖ゼロ', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajdas', name: '明治プロビオヨーグルトR-1', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajuie', name: '明治プロビオヨーグルトR-1 低脂肪', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajqwe', name: 'オイコス 脂肪ゼロ プレーン・砂糖不使用', created_at: '2015/05/01 9:00:00' },
      { id: 'i9tajwer', name: 'オイコス 脂肪ゼロ プレーン・加糖', created_at: '2015/05/01 9:00:00' },
    ];

    AppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_SETUP,
      items: items
    });
  },

  create: function(name) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_CREATE,
      name: name
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_DESTROY,
      id: id
    });
  }
};
