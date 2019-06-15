import React, { Component } from "react";
import error from "../../images/error.png";

import { ErrorDiv } from "./styles";

class Error extends Component {
  state = {};
  render() {
    return (
      <ErrorDiv>
        <img src={error} alt=" 404 pic" />
      </ErrorDiv>
    );
  }
}

export default Error;
