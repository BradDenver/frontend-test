import React from 'react/addons';

export default React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {title: ''};
  },

  propTypes: {
    addCounter: React.PropTypes.func.isRequired
  },
  
  render() {
    return (
      <div>
        <input type="text" valueLink={this.linkState('title')} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  },

  handleAdd(e) {
    if(!this.state.title) {
      return;
    }
    this.props.addCounter(this.state.title);
    this.setState({title: ''});
  }

});
