import React   from 'react';
import request from 'superagent';

import CounterItem from './CounterItem';
import Form        from './Form';
import Total       from './Total';

import CountersActions from '../actions/Counters';
import CountersStore   from '../stores/Counters';
import FluxComponent from 'flummox/component';

import './App.css';

export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },

  onChange() {
    this.setState({counters: CountersStore.getAll()});
  },

  getInitialState() {
    return {
      counters: CountersStore.getAll()
    }
  },

  componentDidMount() {
    CountersStore.addChangeListener(this.onChange);
    // CountersActions.fetchCounters();
    console.log(this.context.flux.getStore('counters'), this.context.flux.getActions('counters'));
    this.context.flux.getActions('counters').fetchCounters();
  },

  componentWillUnmount() {
    CountersStore.removeChangeListener(this.onChange);
  },

  render() {
    return (
      <FluxComponent connectToStores={'counters'}>
      <div className="container">
        <div className="page-header">
          <h1>Counter App</h1>
          <Form />
        </div>
        <div className="list-group">
          { 
            this.state.counters.map(c => 
              <CounterItem key={c.id} counter={c} />
            )
          }
        </div>
        <Total counters={this.state.counters} />
      </div>
      </FluxComponent>
    );
  }

});
