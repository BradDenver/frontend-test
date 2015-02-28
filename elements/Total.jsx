import React from 'react';

export default React.createClass({

  propTypes: {
    counters: React.PropTypes.array.isRequired
  },

  render() {
    let counts = this.props.counters.map(c => c.count);
    let total = counts.reduce((acc, c) => acc + c, 0);
    return (
      <div className="well text-right">Total: <span className="badge">{ total }</span></div>
    );
  }

});
