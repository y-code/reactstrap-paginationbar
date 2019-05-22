import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import PaginationbarPage from './Components/PaginationbarPage';
import NotFound from './NotFound';
import Components from './Components';
import UI from './UI';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="paginationbar/" />
      <Route path="paginationbar/" component={PaginationbarPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
