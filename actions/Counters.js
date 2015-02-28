import AppDispatcher from '../dispatcher/AppDispatcher';
import request       from 'superagent';

function updateCounters(res) {
  AppDispatcher.handleAction({
    type: "UPDATE_COUNTERS",
    counters: res.body
  });
};

export default {
  
  createCounter(title) {
    request.post('/api/v1/counter')
      .send({title})
      .end(updateCounters);
  },

  fetchCounters() {
    request.get('/api/v1/counters', updateCounters);
  },

  incCounter(id, inc) {
    let endPoint = (inc > 0) ? 'inc' : 'dec';
    request.post('/api/v1/counter/' + endPoint)
      .send({id})
      .end(updateCounters);
  },

  removeCounter(id) {
    request('DELETE', '/api/v1/counter')
      .send({id})
      .end(updateCounters);
  }

};
