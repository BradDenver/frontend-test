import React from 'react';

let Howdy = React.createClass({

  render() {
    return (
      <div>Hello</div>
    );
  }

});

React.render(<Howdy/>, document.body);
