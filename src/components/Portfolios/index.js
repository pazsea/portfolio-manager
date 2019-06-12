import React, { Component } from "react";
import { APIMyPortfolioList } from "../../api";

import Portfolio from "./Portfolio";

class Portfolios extends Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    var token = localStorage.getItem("jwtToken");

    fetch(APIMyPortfolioList, {
      method: "GET",
      headers: {
        Authorization: "Bearer" + " " + token
      }
    })
      .then(response => response.json())
      .then(({ results }) => this.setState({ results: results }));
  }

  render() {
    const { results } = this.state;
    const {
      AuthStore: { setId }
    } = this.props;
    return (
      <div>
        {results
          ? results.map(result => {
              return (
                <Portfolio setId={setId} key={result.id} result={result} />
              );
            })
          : null}
      </div>
    );
  }
}

export default Portfolios;
