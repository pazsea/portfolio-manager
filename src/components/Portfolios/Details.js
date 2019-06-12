import React, { Component } from "react";
import { APIMyPortfolioDetailID } from "../../api";
import { DetailDiv, InfoTable } from "./styles";

import graph from "../../images/graph.png";
import Chart from "react-google-charts";

class Details extends Component {
  state = { loading: true };

  componentDidMount() {
    var detailsId = this.props.AuthStore.detailsId;
    var token = localStorage.getItem("jwtToken");
    console.log(APIMyPortfolioDetailID + detailsId + "/");
    console.log("tooooken " + token);

    fetch(APIMyPortfolioDetailID + detailsId + "/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(response => this.setState({ results: response, loading: false }))
      .catch(function(response) {
        if (response.status === "401") {
          console.log("error");
        }
      });
  }

  render() {
    const { loading, results } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {results.position
            ? results.position.map(result => {
                return <Detail key={result.id} result={result} />;
              })
            : null}
        </div>
      );
    }
  }
}

const Detail = () => ({
  render() {
    const { result } = this.props;
    return (
      <DetailDiv>
        <div className="graph">
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "", "", ""],
              [
                "Day",
                0,
                result.instrument.yield_today === "null"
                  ? 0
                  : result.instrument.yield_today,
                0
              ],
              [
                "Week",
                0,
                result.instrument.yield_1w === null
                  ? 0
                  : result.instrument.yield_1w,
                0
              ],
              [
                "Month",
                0,
                result.instrument.yield_1m === null
                  ? 0
                  : result.instrument.yield_1m,
                0
              ],
              [
                "Year",
                0,
                result.instrument.yield_ty === null
                  ? 0
                  : result.instrument.yield_ty,
                0
              ]
            ]}
            options={{
              // Material design options
              chart: {
                title: "Yield status",
                subtitle: "Yield status during different"
              }
            }}
            // For tests
            rootProps={{ "data-testid": "2" }}
          />
        </div>
        <div className="wrapper">
          <div className="info">
            <h2>{result.instrument.name}</h2>

            <InfoTable cellspacing="0">
              <tbody>
                <tr>
                  <th />
                  <th>Company</th>

                  <th>Price today</th>
                  <th>Price close</th>
                  <th>Price high/low</th>
                </tr>

                <tr>
                  <td>
                    <img src={graph} alt="" />
                  </td>
                  <td>{result.instrument.name}</td>
                  <td>{result.price_today} </td>
                  <td>{result.instrument.price_close} </td>
                  <td>
                    {result.instrument.price_high +
                      " / " +
                      result.instrument.price_low}
                  </td>
                </tr>
              </tbody>
            </InfoTable>
          </div>

          {/* <Link to={ROUTES.DETAILS} onClick={() => this.props.setId(result.id)}>
            <button>View Details</button>
          </Link> */}
        </div>
      </DetailDiv>
    );
  }
});

export default Details;
