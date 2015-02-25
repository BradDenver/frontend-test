import React from 'react';

let App = React.createClass({

  getInitialState() {
    return {
      counters: [
        {id: 1, title: 'aaa', count: 3},
        {id: 2, title: 'bbb', count: 4},
      ]
    }
  },

  render() {
    let counts = this.state.counters.map(c => c.count);
    let total = counts.reduce((acc, c) => acc + c);
    return (
      <div>
        <h1>Counter App</h1>
        <div>
          <input type="text" />
          <button>Add</button>
        </div>
        <ul>
          { 
            this.state.counters.map(c => 
              <li key={c.id}>{c.title} <button>-</button>{c.count}<button>+</button></li>
            )
          }
        </ul>
        <div>Total: { total }</div>
      </div>
    );
  }

});

React.render(<App/>, document.body);
