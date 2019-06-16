import React, { Component } from "react";
import { APIUser } from "../../api";
import { Wrapper } from "./styles";
import buffett from "../../images/buffett.jpg";
import Loading from "../Loading";
import Error from "../Error";
class Home extends Component {
  state = { loading: true, user: "" };

  componentDidMount() {
    var token = localStorage.getItem("jwtToken");

      fetch(APIUser, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      })
        .then(response => this.handleErrors(response))
        .then(response => response.json())
        .then(response => this.setState({ user: response, loading: false }));

  }

  handleErrors(response) {
    if (!response.ok) {
      this.setState({ error: true });
    }
    return response;
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
      return (
        <Wrapper>
          <div className="imageDiv">
            <img
              src={buffett}
              alt={user.first_name + " " + user.last_name + "'s picture"}
            />
          </div>
          <div className="userInfo">
            <h1>Welcome back {user.first_name + " " + user.last_name}! </h1>
            <ul>
              <li>Language: {user.language} </li>
              <li>E-mail: {user.email}</li>
              <li>
                Staff / Superuser: {user.is_staff ? "Yes" : "No"}
                {" / "}
                {user.is_superuser ? "Yes" : "No"}
              </li>
            </ul>
            <div className="desc">
              Born in Nebraska in 1930, Warren Buffett demonstrated keen
              business abilities at a young age. He formed Buffett Partnership
              Ltd. in 1956, and by 1965 he had assumed control of Berkshire
              Hathaway. Overseeing the growth of a conglomerate with holdings in
              the media, insurance, energy and food and beverage industries,
              Buffett became one of the world's richest men and a celebrated
              philanthropist.
              <h3>Education & Early Career</h3>
              Buffett enrolled at the University of Pennsylvania at the age of
              16 to study business. He stayed two years, moved to the University
              of Nebraska to finish up his degree, and emerged from college at
              age 20 with nearly $10,000 from his childhood businesses.
            </div>
          </div>
        </Wrapper>
      );
    }
  }
}

export default Home;
