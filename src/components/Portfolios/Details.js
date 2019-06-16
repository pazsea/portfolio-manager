import React, { Component, Fragment } from "react";
import { APIInstrumentDetailID } from "../../api";
import { DetailDiv, InfoTable } from "./styles";

import StarRatingComponent from "react-star-rating-component";

import Loading from "../Loading";
import Error from "../Error";

import graph from "../../images/graph.png";
import Chart from "react-google-charts";

class Details extends Component {
  state = { loading: false };

  render() {
    const { loading } = this.state;
    const {
      AuthStore: { positions }
    } = this.props;
    if (loading) {
      return <Loading />;
    } else {
      return (
        <div>
          {positions
            ? positions[0].map(position => {
                return <Info key={position.id} position={position} />;
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
    } = this.props.position;
    var token = localStorage.getItem("jwtToken");
    fetch(APIInstrumentDetailID + id + "/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => this.handleErrors(response))
      .then(response => response.json())
      .then(response => this.setState({ info: response, loading: false }));
  }

  handleErrors(response) {
    if (!response.ok) {
      this.setState({ error: true });
    }
    return response;
  }

  showCompanyDetails(e, id) {
    this.setState(prevState => ({
      ["expand" + id]: !prevState["expand" + id]
    }));
  }

  render() {
    const { position } = this.props;
    const { loading, info, error } = this.state;
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
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
                  position.instrument.yield_1d === "null"
                    ? 0
                    : position.instrument.yield_1d,
                  0
                ],
                [
                  "Week",
                  0,
                  position.instrument.yield_1w === null
                    ? 0
                    : position.instrument.yield_1w,
                  0
                ],
                [
                  "Month",
                  0,
                  position.instrument.yield_1m === null
                    ? 0
                    : position.instrument.yield_1m,
                  0
                ],
                [
                  "Year",
                  0,
                  position.instrument.yield_1y === null
                    ? 0
                    : position.instrument.yield_1y,
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
              <h2>{position.instrument.name}</h2>

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
                    <td>{position.allocation}</td>
                    <td>{position.instrument.price_today} </td>
                    <td>{position.instrument.price_close} </td>
                    <td>
                      {position.instrument.price_high +
                        " / " +
                        position.instrument.price_low}
                    </td>
                  </tr>
                </tbody>
              </InfoTable>
            </div>

            <button
              onClick={e => this.showCompanyDetails(e, position.instrument.id)}
            >
              View {position.instrument.name}'s details{" "}
            </button>
          </div>

          {loading ? null : this.state["expand" + position.instrument.id] ? (
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
                        name={"star" + position.instrument.id}
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
                      Week high/low:
                      <br />{" "}
                      {info.week_52_high && info.week_52_low
                        ? info.week_52_high + "/" + info.week_52_low
                        : "?/?"}
                    </li>
                  </ul>
                </Fragment>
              ) : null}
            </div>
          ) : null}
        </DetailDiv>
      );
    }
  }
}

export default Details;
