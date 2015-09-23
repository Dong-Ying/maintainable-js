var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var Actions = {
  toggleStatus: function(id){
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_STATUS,
      id: id
    });
  },

  remove: function(id){
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_STATUS,
      id: id,
      status: true
    });
  },

  getAll: function(){
    Dispatcher.dispatch({
      actionType: Constants.GET_ALL
    });
  },

  setAll: function(data){
    Dispatcher.dispatch({
      actionType: Constants.SET_ALL,
      data:data
    });
  }
};

module.exports = Actions;
