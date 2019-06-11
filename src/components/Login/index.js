import React, { Component } from "react";
import { LoginForm } from "./styles";
// import fetch from "isomorphic-unfetch";
import { inject, observer } from "mobx-react";

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

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { AuthStore } = this.props;
    const url = "https://beta.stockzoom.com/api-token-auth/";
    console.log(email, password);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        console.log("!!SUCESS!!");
        const { token } = await response.json();
        localStorage.setItem("token", token);
        console.log("i getz token " + token);
        AuthStore.addToken(token);
        // Router.push("/profile");
      } else {
        console.log("Login failed.");
        let error = new Error(response.statusText);
        error.response = response;

        return Promise.reject(error);
      }
    } catch (error) {
      console.error(
        "You have an error in your code or there are Network issues.",
        error
      );
      throw new Error(error);
    }
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