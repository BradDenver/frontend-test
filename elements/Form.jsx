import React from 'react/addons';

import CountersActions from '../actions/Counters';

export default React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {title: ''};
  },

  render() {
    return (
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="New counter..." valueLink={this.linkState('title')} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleAdd}>Add</button>
        </span>
      </div>
    );
  },

  handleAdd(e) {
    if(!this.state.title) {
      return;
    }
    CountersActions.createCounter(this.state.title);
    this.setState({title: ''});
  }

});
