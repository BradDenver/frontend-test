import {Actions} from 'flummox';
import request   from 'superagent';

export default class CountersActions extends Actions {

  async createCounter(title) {
    let response = await request.post('/api/v1/counter')
      .send({title})
      .exec();

    return {counters: response.body}
  }

  async fetchCounters() {
    let response = await request.get('/api/v1/counters')
      .exec();

    return {counters: response.body}
  }

  async incCounter(id, inc) {
    let endPoint = (inc > 0) ? 'inc' : 'dec';
    let response = await request.post('/api/v1/counter/' + endPoint)
      .send({id})
      .exec();

    return {counters: response.body}
  }

  async removeCounter(id) {
    let response =  await request('DELETE', '/api/v1/counter')
      .send({id})
      .exec();

    return {counters: response.body}
  }

}
