import React from 'react';

export default React.createClass({

  propTypes: {
    counter    : React.PropTypes.object.isRequired,
    incCounter : React.PropTypes.func.isRequired,
    removeCounter : React.PropTypes.func.isRequired
  },

  render() {
    let c = this.props.counter;
    let decDisabled = c.count === 0;
    return (
      <a key={c.id} href="#" className="list-group-item">
        <div className="row">
          <div className="col-xs-1 text-center">
            <button onClick={this.props.removeCounter} className="btn btn-default btn-sm">&times;</button>
          </div>
          <div className="col-xs-6 col-md-9">{c.title}</div>
          <div className="col-xs-5 col-md-2 text-right">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={this.props.incCounter.bind(this, -1)} disabled={decDisabled}>-</button>
              <button type="button" className="btn btn-primary active">{c.count}</button>
              <button type="button" className="btn btn-default" onClick={this.props.incCounter.bind(this, 1)}>+</button>
            </div>
          </div>
        </div>
      </a>
    );
  }

});
