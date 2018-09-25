import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App.js';
import MovieCollections from '../components/MovieCollections.js';
import MovieDetailComp from '../components/MovieDetailComp.js';
import AddCollection from '../components/AddCollection.js';

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