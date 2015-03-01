import React   from 'react';
import request from 'superagent';

import CounterItem from './CounterItem';
import Form        from './Form';
import Total       from './Total';

import './App.css';

export default React.createClass({

  contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },

  onChange() {
    this.setState({counters: this.Store.getAll()});
  },

  getInitialState() {
    this.Store = this.context.flux.getStore('counters');
    this.Actions = this.context.flux.getActions('counters');
    return {
      counters: this.Store.getAll()
    }
  },

  componentDidMount() {
    this.Store.addListener('change', this.onChange);
    this.Actions.fetchCounters();
  },

  componentWillUnmount() {
    this.Store.removeListener('change', this.onChange);
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
