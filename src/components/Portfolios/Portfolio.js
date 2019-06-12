import React, { Component } from "react";
import { PortfolioDiv, InfoTable } from "./styles";
import graph from "../../images/graph.png";
import Chart from "react-google-charts";
import { userInfo } from "os";

class Portfolio extends Component {
  state = {
    id: this.props.result.id
  };
  render() {
    const { result } = this.props;
    return (
      <PortfolioDiv>
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
                result.yield_today === "null" ? 0 : result.yield_today,
                0
              ],
              ["Week", 0, result.yield_1w === null ? 0 : result.yield_1w, 0],
              ["Month", 0, result.yield_1m === null ? 0 : result.yield_1m, 0],
              ["Year", 0, result.yield_ty === null ? 0 : result.yield_ty, 0]
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
            <h2>Specific Portfolio</h2>

            <InfoTable cellspacing="0">
              <tr>
                <th />
                <th>Owner</th>
                <th>Market value</th>
                <th>Total cash</th>
              </tr>

              <tr>
                <td>
                  <img src={graph} alt="" />
                </td>
                <td>{result.user.first_name + " " + result.user.last_name} </td>
                <td>
                  {result.market_value === null
                    ? 0
                    : result.market_value + " " + result.currency}{" "}
                </td>
                <td>{result.total_cash + " " + result.currency} </td>
              </tr>
            </InfoTable>
          </div>

          <button>View Details</button>
        </div>
      </PortfolioDiv>
    );
  }
}

export default Portfolio;
