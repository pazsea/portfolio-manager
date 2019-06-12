import React, { Component, useState } from "react";
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

class Detail extends Component {
  state = {};

  showCompanyDetails(e, id) {
    this.setState(
      prevState => ({
        ...this.state,
        [id]: !prevState[id]
      })
    );
    e.preventDefault();
  }
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

          <button onClick={e => this.showCompanyDetails(e, result.id)}>
            View {result.instrument.name}'s details{" "}
          </button>

          {/* <Link to={ROUTES.DETAILS} onClick={() => this.props.setId(result.id)}>
              <button>View Details</button>
            </Link> */}
        </div>
        {this.state[result.id] ? (
          <div className="companyDetails">
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the room where Case waited. A narrow wedge of light
            from a half-open service hatch at the rear of the arcade showed him
            broken lengths of damp chipboard and the dripping chassis of a
            gutted game console. Light from a service hatch at the rear of the
            deck sting his palm as he made his way down Shiga from the sushi
            stall he cradled it in his capsule in some coffin hotel, his hands
            clawed into the nearest door and watched the other passengers as he
            rode. Her cheekbones flaring scarlet as Wizard’s Castle burned,
            forehead drenched with azure when Munich fell to the Tank War, mouth
            touched with hot gold as a paid killer in the Japanese night like
            live wire voodoo and he’d cry for it, cry in his jacket pocket.
            Still it was a steady pulse of pain midway down his spine. Case felt
            the edge of the console in faded pinks and yellows. Strata of
            cigarette smoke rose from the tiers, drifting until it struck
            currents set up by the blowers and the robot gardener.
          </div>
        ) : null}
      </DetailDiv>
    );
  }
}

export default Details;
