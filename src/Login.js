import React, { Component } from "react";
import scooteqLogo from "./scooteq-logo.png";
import "./Login.css";
import MainScreenMapView from "./MainScreenMapView";

class Login extends Component {
  checkCredentials() {
    console.log("test");
    let passwordfield = document.querySelector(".password-field");
    let emailfield = document.querySelector(".email-field");

    let password = 123;
    let email = "test@mail.com";

    if (passwordfield.value === password && emailfield.value === email) {
      return <MainScreenMapView />;
    } else {
      return <p>Password or email wrong, please try again.</p>;
    }
  }

  render() {
    return (
      <div className="sign-in-bg">
        <form action="#">
          <img src={scooteqLogo} alt="scooTeq logo"></img>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" className="email-field" />
          <input
            type="password"
            placeholder="Password"
            className="password-field"
          />
          <br />
          <button type="submit" onClick={this.checkCredentials.bind(this)}>
            Login
          </button>
          <p>Forgot password?</p>
        </form>
      </div>
    );
  }
}

export default Login;
