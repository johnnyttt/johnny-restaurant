import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import RestaurantRating from './containers/RestaurantRating/RestaurantRating';
import RestaurantSearch from './containers/RestaurantSearch/RestaurantSearch';
import Account from './containers/User/Account/Account';
import Login from './containers/Auth/Login';


import './App.css';


const App =()=>{
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/RestaurantSearch" render={props => <RestaurantSearch {...props} />} />
          <Route path="/Login" render={props => <Login {...props} />} />
          <Route path="/Account" render={props => <Account {...props} />} />
          <Route path="/" render={props => <RestaurantRating {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
