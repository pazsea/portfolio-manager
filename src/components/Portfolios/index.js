import React, { Component } from "react";
import { APIMyPortfolioList } from "../../api";

import Portfolio from "./Portfolio";

class Portfolios extends Component {
  state = {
    loading: true
  };
   componentDidMount() {
    var token = localStorage.getItem("jwtToken");

    fetch(APIMyPortfolioList, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(({ results }) =>
        this.setState({ results: results, loading: false })
      )
      .catch(function(response) {
        if (response.status === "401") {
          console.log("error");
        }
      });
  }

  render() {
    const { results, loading } = this.state;
    const {
      AuthStore: { setId }
    } = this.props;

    if (loading) {
      return <div>Loading....</div>;
    } else {
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
}

export default Portfolios;
