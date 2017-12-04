import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Callback from './Components/Callback';
import Auth from './auth/Auth';
import history from './history';
import Categories from './Components/Categories'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/categories" render={(props) => <Categories auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}

export default makeMainRoutes