import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import Login from "../Login";
import Portfolios from "../Portfolios";
import Details from "../Portfolios/Details";

import Home from "../Home";

import * as ROUTES from "../../constants/routes";

@inject("AuthStore")
@observer
class App extends Component {
  render() {
    const { AuthStore } = this.props;
    const token = localStorage.getItem("jwtToken");
    return (
      <Router>
        <GlobalStyle />
        {token ? token.length ? <Navigation /> : null : null}

        <Route
          path={ROUTES.HOME}
          render={routeProps =>
            token ? (
              token.length ? (
                <Home {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Login {...routeProps} AuthStore={AuthStore} />
              )
            ) : (
              <Login {...routeProps} AuthStore={AuthStore} />
            )
          }
        />
        <Route
          exact
          path={ROUTES.LOGIN}
          render={routeProps =>
            token ? (
              token.length ? (
                <Home {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Login {...routeProps} AuthStore={AuthStore} />
              )
            ) : (
              <Login {...routeProps} AuthStore={AuthStore} />
            )
          }
        />
        <Route
          path={ROUTES.PORTFOLIOS}
          render={routeProps =>
            token ? (
              token.length ? (
                <Portfolios {...routeProps} AuthStore={AuthStore} />
              ) : (
                <Login {...routeProps} AuthStore={AuthStore} />
              )
            ) : (
              <Login {...routeProps} AuthStore={AuthStore} />
            )
          }
        />
        <Route
          path={ROUTES.DETAILS}
          render={
            routeProps =>
              AuthStore.positions.length && token ? (
                <Details {...routeProps} AuthStore={AuthStore} />
              ) : token ? (
                token.length ? (
                  <Portfolios {...routeProps} AuthStore={AuthStore} />
                ) : (
                  <Login {...routeProps} AuthStore={AuthStore} />
                )
              ) : (
                <Login {...routeProps} AuthStore={AuthStore} />
              )

            //   <Details {...routeProps} AuthStore={AuthStore} />
            // ) : token ? (
            //   token.length ? (
            //     <Portfolios {...routeProps} AuthStore={AuthStore} />
            //   ) : (
            //     <Login {...routeProps} AuthStore={AuthStore} />
            //   )
            // ) : (
            //   <Login {...routeProps} AuthStore={AuthStore} />
            // )
          }
        />
      </Router>
    );
  }
}

export default App;
