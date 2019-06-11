import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import Login from "../Login";
import Portfolios from "../Portfolios";

import * as ROUTES from "../../constants/routes";

@inject("AuthStore")
@observer
class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Navigation />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.PORTFOLIOS} component={Portfolios} />
      </Router>
    );
  }
}

export default App;
