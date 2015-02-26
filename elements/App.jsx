import React from 'react';

import CounterItem from './CounterItem';
import Form        from './Form';
import Total       from './Total';

export default React.createClass({

  getInitialState() {
    return {
      counters: [
        {id: 1, title: 'aaa', count: 3},
        {id: 2, title: 'bbb', count: 4},
      ]
    }
  },

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <Form addCounter={this.addCounter} />
        <ul>
          { 
            this.state.counters.map((c, i) => 
              <CounterItem key={c.id} counter={c} incCounter={this.incCounter.bind(this, i)}/>
            )
          }
        </ul>
        <Total counters={this.state.counters} />
      </div>
    );
  },

  addCounter(title) {
    let newCounters = this.state.counters;
    newCounters.push({
      id    : Date.now(),
      title : title,
      count : 0
    });
    this.setState({counters: newCounters});
  },

  incCounter(i, inc) {
    let newCounters = this.state.counters;
    newCounters[i].count += inc;
    this.setState({counters: newCounters});
  }

});
