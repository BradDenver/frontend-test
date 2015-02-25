var React = require('react');

var Howdy = React.createClass({

  render: function() {
    return (
      <div>Hello</div>
    );
  }

});

React.render(<Howdy/>, document.body);
