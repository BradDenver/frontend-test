import React from 'react';

import CountersActions from '../actions/Counters';

export default React.createClass({

  propTypes: {
    counter : React.PropTypes.object.isRequired
  },
contextTypes: {
    flux: React.PropTypes.object.isRequired,
  },
  render() { 
    // console.log(this.context.flux);
    let c = this.props.counter;
    let decDisabled = c.count === 0;
    return (
      <a key={c.id} href="#" className="list-group-item">
        <div className="row">
          <div className="col-xs-1 text-center">
            <button onClick={this.handleRemove} className="btn btn-default btn-sm">&times;</button>
          </div>
          <div className="col-xs-6 col-md-9">{c.title}</div>
          <div className="col-xs-5 col-md-2 text-right">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={this.handleInc.bind(this, -1)} disabled={decDisabled}>-</button>
              <button type="button" className="btn btn-primary active">{c.count}</button>
              <button type="button" className="btn btn-default" onClick={this.handleInc.bind(this, 1)}>+</button>
            </div>
          </div>
        </div>
      </a>
    );
  },

  handleInc(inc, e) {
    e.preventDefault();
    CountersActions.incCounter(this.props.counter.id, inc);
  },

  handleRemove(e) {
    e.preventDefault();
    CountersActions.removeCounter(this.props.counter.id);
  }

});
