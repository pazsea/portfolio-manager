import React, { Component, Fragment } from "react";

import { NavLink, withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { Nav } from "./styles";

class Navigation extends Component {
  state = {};

  signOut() {
    localStorage.removeItem("jwtToken");
    this.props.history.push('/')
    window.location.reload()
  }

  render() {
    const { navOpen } = this.state;
    return (
      <Fragment>
        <Nav navOpen={navOpen}>
          <li>
            <NavLink
              to={ROUTES.HOME}
              activeStyle={{
                background: "white",
                color: "black"
              }}
            >
              Home <i className="fas fa-home" />
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.PORTFOLIOS}
              activeStyle={{ background: "white", color: "black" }}
            >
              My Portfolios <i className="fas fa-briefcase" />
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.HOME} onClick={() => this.signOut()}>
              Sign Out <i className="fas fa-sign-out-alt" />
            </NavLink>
          </li>
        </Nav>
      </Fragment>
    );
  }
}

export default withRouter(Navigation);
