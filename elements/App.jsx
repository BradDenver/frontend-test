import React   from 'react';
import request from 'superagent';

import CounterItem from './CounterItem';
import Form        from './Form';
import Total       from './Total';

import './App.css';

export default React.createClass({

  getInitialState() {
    return {
      counters: []
    }
  },

  componentDidMount() {
    this.fetchCounters();
  },

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Counter App</h1>
          <Form addCounter={this.addCounter} />
        </div>
        <div className="list-group">
          { 
            this.state.counters.map(c => 
              <CounterItem key={c.id} counter={c} incCounter={this.incCounter.bind(this, c.id)} removeCounter={this.removeCounter.bind(this, c.id)} />
            )
          }
        </div>
        <Total counters={this.state.counters} />
      </div>
    );
  },

  addCounter(title) {
    request.post('/api/v1/counter')
      .send({title})
      .end(this.setCounters);
  },

  incCounter(id, inc, e) {
    e.preventDefault();
    let endPoint = (inc > 0) ? 'inc' : 'dec';
    request.post('/api/v1/counter/' + endPoint)
      .send({id})
      .end(this.setCounters);
  },

  fetchCounters() {
    request.get('/api/v1/counters', this.setCounters);
  },

  removeCounter(id, e) {
    e.preventDefault();
    request('DELETE', '/api/v1/counter')
      .send({id})
      .end(this.setCounters);
  },

  setCounters(res) {
    this.setState({counters: res.body});
  }

});
