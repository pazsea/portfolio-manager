import React, { Component } from "react";
import { LoginForm } from "./styles";
// import fetch from "isomorphic-unfetch";
import { inject, observer } from "mobx-react";
import { APIGetToken } from "../../api";

@inject("AuthStore")
@observer
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    result: ""
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();

    fetch(APIGetToken, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }).then(response => {
      if (response.ok) {
        return response
          .json()
          .then(({ token, data }) =>
            localStorage.setItem("jwtToken", token, "data", data)
          )
          .then(() => window.location.reload());
      } else {
        this.setState({ error: "Wrong email or password." });
      }
    });
  }

  render() {
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
        />
        <label htmlFor="password"> Password</label>

        <input
          type="text"
          id="password"
          placeholder="Enter Password"
          name="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
        <button type="submit">Login</button>

        <p className={`error ${this.state.error && "show"}`}>
          {this.state.error && `Error: ${this.state.error}`}
        </p>
      </LoginForm>
    );
  }
}

export default Login;
