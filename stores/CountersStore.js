import { Store } from 'flummox';

export default class CountersStore extends Store {

  constructor(flux) {
    super();

    let countersActionIds = flux.getActionIds('counters');
    this.register(countersActionIds.fetchCounters, this.handleUpdateCounters);

    this.state = {
      counters: [],
    };
  }

  handleUpdateCounters(counters) {
    this.setState({
      counters: counters,
    });
  }

  getAll() {
    return this.state.counters;
  }

}
