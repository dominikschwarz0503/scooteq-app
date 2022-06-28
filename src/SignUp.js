import React, { Component } from "react";
import scooteqLogo from "./scooteq-logo.png";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-bg">
        <form>
          <img src={scooteqLogo} alt="scooTeq logo"></img>
          <h1>Sign up</h1>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Password repeat" required />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
