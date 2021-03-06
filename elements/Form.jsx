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
    this.props.addCounter(this.state.title);
    this.setState({title: ''});
  }

});
