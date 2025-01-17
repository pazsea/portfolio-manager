import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "../Navigation";
import Login from "../Login";
import Portfolios from "../Portfolios";
import Details from "../Portfolios/Details";

import Home from "../Home";

import * as ROUTES from "../../constants/routes";

@inject("AuthStore")
@observer
class App extends Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      return this.props.AuthStore.toggleUserStatus();
    } else {
      return null;
    }
  }
  render() {
    const {
      AuthStore,
      AuthStore: { user }
    } = this.props;
    const token = localStorage.getItem("jwtToken");
    if (user.authUser) {
      return (
        <Router>
          <GlobalStyle />
          <Navigation AuthStore={AuthStore} />

          <Route
            exact path={ROUTES.HOME}
            render={routeProps => (
              <Home {...routeProps} AuthStore={AuthStore} />
            )}
          />
          <Route
            path={ROUTES.PORTFOLIOS}
            render={routeProps => (
              <Portfolios {...routeProps} AuthStore={AuthStore} />
            )}
          />
          <Route
            path={ROUTES.DETAILS}
            render={routeProps =>
              AuthStore.positions.length ? (
                <Details {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Portfolios {...routeProps} AuthStore={AuthStore} />
              )
            }
          />
        </Router>
      );
    } else {
      return (
        <Router>
          <GlobalStyle />
          <Route
            exact
            path={ROUTES.LOGIN}
            render={routeProps => (
              <Login {...routeProps} AuthStore={AuthStore} />
            )}
          />
          <Route
            path={ROUTES.HOME}
            render={routeProps =>
              token ? (
                <Home {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Redirect to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path={ROUTES.PORTFOLIOS}
            render={routeProps =>
              token ? (
                <Portfolios {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Redirect to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path={ROUTES.DETAILS}
            render={routeProps =>
              AuthStore.positions.length && token ? (
                <Details {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Redirect to={ROUTES.PORTFOLIOS} />
              )
            }
          />
        </Router>
      );
    }
  }
}

export default App;
