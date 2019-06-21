import React, { Component } from "react";
import { LoginForm } from "./styles";
import { inject, observer } from "mobx-react";
import { APIGetToken, APITokenVerify, APITokenRefresh } from "../../api";
import Loading from "../Loading";
import Error from "../Error";

import * as ROUTES from "../../constants/routes";

@inject("AuthStore")
@observer
class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
    result: "",
    loading: false,
    error: false
  };

  handleSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    this.setState(prevState => ({
      loading: !prevState.loading
    }));
    fetch(APIGetToken, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }).then(response => {
      if (response.ok) {
        return response.json().then(({ token }) => this.verifyToken(token));
      } else {
        this.setState({ errorMessage: "Wrong email or password." });
      }
    });
  }

  verifyToken(fetchedToken) {
    console.log("fetched Token i verify " + fetchedToken);
    fetch(APITokenVerify, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: fetchedToken
      })
    }).then(response => {
      if (response.ok) {
        return response.json().then(({ token }) => {
          if (token && token === fetchedToken) {
            localStorage.setItem("jwtToken", token);
            this.setState({ loading: false });
            this.props.AuthStore.toggleUserStatus();
            this.props.history.push(ROUTES.HOME);
            //Props to new route and authStore signed in
          } else {
            this.refreshToken(fetchedToken);
          }
        });
      } else {
        console.log("response" + response.status);
        this.setState({ loading: false, error: true });
      }
    });
  }

  refreshToken(expiredToken) {
    fetch(APITokenRefresh, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: expiredToken
      })
    }).then(response => {
      if (response.ok) {
        return response.json().then(({ token }) => {
          if (token) {
            localStorage.setItem("jwtToken", token);
            this.setState({ loading: false });
            this.props.AuthStore.toggleUserStatus();

            this.props.history.push(ROUTES.HOME);

            //Props to new route and authStore signed in
          } else {
            this.setState({
              loading: false,
              errorMessage: "Cant refresh this users token."
            });
          }
        });
      } else {
        this.setState({ loading: false, error: true });
      }
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
      return (
        <LoginForm onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="email"> E-mail</label>

          <input
            type="text"
            id="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
            required
          />
          <label htmlFor="password"> Password</label>

          <input
            type="text"
            id="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
            required
          />
          <button type="submit">Sign in</button>

          <p className={` ${this.state.error && "show"}`}>
            {this.state.error &&
              `
             ${this.state.error}`}
          </p>
        </LoginForm>
      );
    }
  }
}

export default Login;
