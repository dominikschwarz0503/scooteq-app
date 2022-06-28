import React, { Component } from "react";
import scooteqLogo from "./scooteq-logo.png";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="sign-in-bg">
        <form>
          <img src={scooteqLogo} alt="scooTeq logo"></img>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit">Login</button>
          <p>Forgot password?</p>
        </form>
      </div>
    );
  }
}

export default Login;
