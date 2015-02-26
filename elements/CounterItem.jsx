import React from 'react';

export default React.createClass({

  propTypes: {
    counter: React.PropTypes.object.isRequired
  },

  render() {
    let c = this.props.counter
    return (
      <li key={c.id}>{c.title} <button>-</button>{c.count}<button>+</button></li>
    );
  }

});
