import React, { Component, Fragment } from "react";

import { NavLink, withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { Nav } from "./styles";

class Navigation extends Component {
  state = {
    navOpen: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  };

  render() {
    const { navOpen } = this.state;
    return (
      <Fragment>
        <Nav navOpen={navOpen}>
          <li>
            <NavLink
              to={ROUTES.HOME}
              activeStyle={{
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Home <i class="fas fa-home"></i>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.PORTFOLIOS}
              activeStyle={{
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              My Portfolios <i className="fas fa-briefcase"></i>
            </NavLink>
          </li>
          <li>
            <button>Sign Out <i class="fas fa-sign-out-alt"></i></button>

          </li>
        </Nav>
      </Fragment>
    );
  }
}

export default withRouter(Navigation);
