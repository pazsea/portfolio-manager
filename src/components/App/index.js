import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import Login from "../Login";
import Portfolios from "../Portfolios";
import Home from "../Home";

import * as ROUTES from "../../constants/routes";

@inject("AuthStore")
@observer
class App extends Component {
  render() {
    const { AuthStore } = this.props;
    return (
      <Router>
        <GlobalStyle />
        {AuthStore.access.length ? <Navigation /> : null}

        <Route
          path={ROUTES.HOME}
          render={routeProps =>
            AuthStore.access.length ? (
              <Home {...routeProps} AuthStore={AuthStore} />
            ) : (
              <Login {...routeProps} AuthStore={AuthStore} />
            )
          }
        />
        <Route
          exact
          path={ROUTES.LOGIN}
          render={routeProps =>
            AuthStore.access.length ? (
              <Home {...routeProps} AuthStore={AuthStore} />
            ) : (
              <Login {...routeProps} AuthStore={AuthStore} />
            )
          }
        />
        <Route
          path={ROUTES.PORTFOLIOS}
          render={routeProps =>
            AuthStore.access.length ? (
              <Portfolios {...routeProps} AuthStore={AuthStore} />
            ) : (
              <Login {...routeProps} AuthStore={AuthStore} />
            )}
        />
      </Router>
    );
  }
}

export default App;
