import React, { Component } from "react";


class Details extends Component {
  state = {};
  render() {
    return <div>{this.props.AuthStore.detailsId}</div>;
  }
}

export default Details;
