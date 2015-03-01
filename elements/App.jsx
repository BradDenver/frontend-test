import React     from 'react';
import request   from 'superagent';
import subscribe from "dispy/subscribe";

import CounterItem from './CounterItem';
import Form        from './Form';
import Total       from './Total';

import CountersActions from '../actions/Counters';
import CountersStore   from '../stores/Counters';

import './App.css';

function state() {
  return {
    counters: CountersStore.getAll()
  }
};

export default React.createClass({

  mixins: [subscribe(state, CountersStore)],

  componentDidMount() {
    CountersActions.fetchCounters();
  },

  render() {
    return (
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
    );
  }

});
