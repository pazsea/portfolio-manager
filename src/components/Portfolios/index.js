import React, { Component } from "react";
import { APIMyPortfolioList } from "../../api";

import Portfolio from "./Portfolio";
import Loading from "../Loading";
import Error from "../Error";

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
    }).then(response => {
      if (response.ok) {
        return response.json().then(response =>
          this.setState({
            results: response.results,
            loading: false
          })
          // console.log(response)
        );
      } else {
        this.setState({
          error: true,
          loading: false
        });
      }
    });
  }

  render() {
    const { results, loading, error } = this.state;
    const {
      AuthStore: { setId }
    } = this.props;

    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
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
