import {Actions}   from 'flummox';
import request     from 'superagent';
import regenerator from 'regenerator/runtime';

function requestPromise(request) {
  return new Promise((resolve, reject) =>
    request.end(resolve)
  );
}

export default class CountersActions extends Actions {

  async createCounter(title) {
    let response = await requestPromise(
      request.post('/api/v1/counter')
        .send({title})
    );

    return response.body;
  }

  async fetchCounters() {
    let response = await requestPromise(
      request.get('/api/v1/counters')
    );

    return response.body;
  }

  async incCounter(id, inc) {
    let endPoint = (inc > 0) ? 'inc' : 'dec';
    let response = await requestPromise(
      request.post('/api/v1/counter/' + endPoint)
        .send({id})
      );

    return response.body;
  }

  async removeCounter(id) {
    let response =  await requestPromise(
      request('DELETE', '/api/v1/counter')
        .send({id})
    );

    return response.body;
  }

}
