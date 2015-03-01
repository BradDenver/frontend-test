import App from '../elements/App';
import Flux from '../dispatcher/Flux';
import React from 'react';
import FluxComponent from 'flummox/component';

let flux = new Flux();

React.withContext(
  {flux},
  () => React.render(/*<FluxComponent flux={flux} connectToStores={'counters'}>*/<App/>/*</FluxComponent>*/, document.body)
);
