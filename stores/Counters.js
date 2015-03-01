import Projection from 'dispy/projection';

let counters = [];

let store = new Projection("COUNTERS");

store.register("COUNTERS_UPDATE", function(payload) {
    counters = payload.action.counters;
});

store.getAll = function() { return counters }

export default store;

