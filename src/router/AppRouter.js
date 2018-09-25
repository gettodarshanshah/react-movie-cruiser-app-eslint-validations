/* eslint react/jsx-filename-extension:0 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import MovieCollections from '../components/MovieCollections';
import MovieDetailComp from '../components/MovieDetailComp';
import AddCollection from '../components/AddCollection';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/collections" component={MovieCollections} />
        <Route path="/MovieDetail/:id" component={MovieDetailComp} />
        <Route path="/AddCollection" component={AddCollection} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;