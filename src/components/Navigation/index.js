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
              to={ROUTES.PORTFOLIOS}
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Portfolios
            </NavLink>
          </li>

          <li>
          <button >Sign Out</button>
            {/* <NavLink
              to={ROUTES.PORTFOLIOS}
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              My Portfolios
            </NavLink> */}
          </li>
 
        </Nav>
      </Fragment>
    );
  }
}

export default withRouter(Navigation);
