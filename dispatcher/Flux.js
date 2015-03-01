import {Flummox} from 'flummox';

import CountersActions from '../actions/CountersActions';
import CountersStore   from '../stores/CountersStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('counters', CountersActions);
    this.createStore('counters', CountersStore, this);
  }
}
