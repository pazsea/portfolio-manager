import React, { Component } from "react";
import { APIMyPortfolioList } from "../../api";

import Portfolio from "./Portfolio";

class Portfolios extends Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    fetch(APIMyPortfolioList, {
      method: "GET",
      headers: {
        Authorization: "Bearer" + " " + this.props.AuthStore.access
      }
    })
      .then(response => response.json())
      .then(({ results }) => this.setState({ results: results }));
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        {results
          ? results.map(result => {
              return <Portfolio result={result} />;
            })
          : null}
      </div>
    );
  }
}

export default Portfolios;
