import {Dispatcher} from 'flux';
import assign       from 'object-assign';

export default assign(new Dispatcher(), {

  handleAction(action) {
    this.dispatch({action});
  }

});
