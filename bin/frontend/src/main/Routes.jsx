import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated, logout } from "../services/auth";

import Horarios from '../horarios/Horarios'
import Recados from '../recados/Recados'
import Login from '../login/Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <PrivateRoute path="/horarios" component={Horarios} />
      <PrivateRoute path="/recados" component={Recados} />
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;