import React, { Component, Fragment } from "react";
import { APIMyPortfolioDetailID, APIInstrumentDetailID } from "../../api";
import { DetailDiv, InfoTable } from "./styles";

import StarRatingComponent from "react-star-rating-component";

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
                return <Info key={result.id} result={result} />;
              })
            : null}
        </div>
      );
    }
  }
}

class Info extends Component {
  state = { loading: true };

  componentDidMount() {
    const {
      instrument: { id }
    } = this.props.result;
    var token = localStorage.getItem("jwtToken");
    fetch(APIInstrumentDetailID + id + "/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(response => this.setState({ info: response, loading: false }))
      .catch(function(response) {
        if (response.status === "401") {
          console.log("error");
        }
      });
  }

  showCompanyDetails(e, id) {
    this.setState(prevState => ({
      ["expand" + id]: !prevState["expand" + id]
    }));
  }

  render() {
    const { result } = this.props;
    const { loading, info } = this.state;
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
                result.instrument.yield_1d === "null"
                  ? 0
                  : result.instrument.yield_1d,
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
                result.instrument.yield_1y === null
                  ? 0
                  : result.instrument.yield_1y,
                0
              ]
            ]}
            options={{
              // Material design options
              chart: {
                title: "Yield status",
                subtitle: "Yield status during different timelines"
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
                  <th>Allocation</th>

                  <th>Price today</th>
                  <th>Price close</th>
                  <th>Price high/low</th>
                </tr>

                <tr>
                  <td>
                    <img src={graph} alt="" />
                  </td>
                  <td>{result.allocation}</td>
                  <td>{result.instrument.price_today} </td>
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

          <button
            onClick={e => this.showCompanyDetails(e, result.instrument.id)}
          >
            View {result.instrument.name}'s details{" "}
          </button>

          {/* <Link to={ROUTES.DETAILS} onClick={() => this.props.setId(result.id)}>
              <button>View Details</button>
            </Link> */}
        </div>

        {loading ? null : this.state["expand" + result.instrument.id] ? (
          <div className="companyDetails">
            {info ? (
              <Fragment>
                <div className="desc">
                  {info.company
                    ? " " + info.company.description
                    : "This company doesn't have an description."}
                </div>
                <ul>
                  <li>
                    Rating: <br />
                    <StarRatingComponent
                      name={"star" + result.instrument.id}
                      value={info.rating ? info.rating : 0}
                      editing={false}
                    />
                  </li>
                  <li>
                    Kind: <br />
                    {info.kind ? info.kind : "Unknown"}{" "}
                  </li>
                  <li>
                    Symbol: <br />
                    {info.symbol ? info.symbol : "Unknown"}{" "}
                  </li>
                  <li>
                    Week high/low:<br />{" "}
                    {info.week_52_high && info.week_52_low
                      ? info.week_52_high + "/" + info.week_52_low
                      : "?/?"}
                  </li>
                </ul>
              </Fragment>
            ) : null}
          </div>
        ) : null}

        {/* {loading ? null : this.state["expand" + result.instrument.id] ? (
          <div className="companyDetails">{this.state.info.company ? 
          <div className="companyDesc">          this.state.info.company.description </div>

          
          : 
          
          <div>{"This company has no description"} </div>
        ) } */}
      </DetailDiv>
    );
  }
}

export default Details;
