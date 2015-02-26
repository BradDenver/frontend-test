import React from 'react';

export default React.createClass({

  propTypes: {
    counter    : React.PropTypes.object.isRequired,
    incCounter : React.PropTypes.func.isRequired
  },

  render() {
    let c = this.props.counter;
    let decDisabled = c.count === 0;
    return (
      <li key={c.id}>
        {c.title}&nbsp;
        <button onClick={this.props.incCounter.bind(this, -1)} disabled={decDisabled}>-</button>
        {c.count}
        <button onClick={this.props.incCounter.bind(this, 1)}>+</button>
      </li>
    );
  }

});
