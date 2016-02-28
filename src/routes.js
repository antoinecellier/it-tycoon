import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Game } from 'containers/Game';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="game" component={Game} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
