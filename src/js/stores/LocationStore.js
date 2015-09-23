var Dispatcher = require('../dispatcher/Dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants.js');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var locations = [
  //{'id': 0, "name": "Melbourne", "description": "A great place", status: true}
];

function updateStatus(id, status) {
  locations[id].status = status;
}

function toggleStatus(id) {
  locations[id].status = !locations[id].status;
}

var LocationStore = assign({}, EventEmitter.prototype, {

  getAll: function () {
    return locations;
  },

  setAll: function (locaitonsToSave) {
    locations = assign([], locaitonsToSave);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function (action) {

  switch (action.actionType) {
    case Constants.TOGGLE_STATUS:
      toggleStatus(action.id);
      LocationStore.emitChange();
      break;
    case Constants.UPDATE_STATUS:
      updateStatus(action.id, action.status);
      LocationStore.emitChange();
      break;
    case Constants.GET_ALL:
      LocationStore.getAll();
      LocationStore.emitChange();
    case Constants.SET_ALL:
      LocationStore.setAll(action.data);
      LocationStore.emitChange();
    default:
  }
});

module.exports = LocationStore;
