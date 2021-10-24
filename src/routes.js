import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Auth, Profile } from "./pages";


export const AppRoute = () => (
  <Switch>
    <Route path='/' component={Auth} exact/>
    <Route path='/profile' component={Profile}/>
    <Redirect to='/'/>
  </Switch>
);
