import React   from 'react';
import request from 'superagent';

import CounterItem from './CounterItem';
import Form        from './Form';
import Total       from './Total';

export default React.createClass({

  getInitialState() {
    return {
      counters: [
        // {id: 1, title: 'aaa', count: 3},
        // {id: 2, title: 'bbb', count: 4},
      ]
    }
  },

  componentDidMount() {
    this.fetchCounters();
  },

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <Form addCounter={this.addCounter} />
        <ul>
          { 
            this.state.counters.map(c => 
              <CounterItem key={c.id} counter={c} incCounter={this.incCounter.bind(this, c.id)} removeCounter={this.removeCounter.bind(this, c.id)} />
            )
          }
        </ul>
        <Total counters={this.state.counters} />
      </div>
    );
  },

  addCounter(title) {
    request.post('/api/v1/counter')
      .send({title})
      .end(this.setCounters);
  },

  incCounter(id, inc) {
    let endPoint = (inc > 0) ? 'inc' : 'dec';
    request.post('/api/v1/counter/' + endPoint)
      .send({id})
      .end(this.setCounters);
  },

  fetchCounters() {
    request.get('/api/v1/counters', this.setCounters);
  },

  removeCounter(id) {
    request('DELETE', '/api/v1/counter')
      .send({id})
      .end(this.setCounters);
  },

  setCounters(res) {
    this.setState({counters: res.body});
  }

});
