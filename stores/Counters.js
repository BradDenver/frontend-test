import AppDispatcher from '../dispatcher/AppDispatcher';

import {EventEmitter} from 'events';
import assign         from 'object-assign';

let counters = [];

let CountersStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  getAll() {
    return counters;
  }
});

AppDispatcher.register(payload => {
  let {action} = payload;

  switch(action.type) {

    case "UPDATE_COUNTERS":
      counters = action.counters;
      CountersStore.emitChange();
      break;

    default:
  }
});

export default CountersStore;
