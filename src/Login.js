import React from "react";
import scooteqLogo from "./scooteq-logo.png";
import "./Login.css";
import MainScreenMapView from "./MainScreenMapView";
import { useEffect, useRef } from "react";

export default function Login(props) {

  const user = { email: "test@mail.com", password: null };

  const emailField = useRef();
  const passwordField = useRef();

  useEffect(() => {
    localStorage.setItem("email", user.email);
    emailField.current.value = localStorage.getItem("email");

  }, [])

  const checkCredentials = () => {

    if (passwordField.current.value === "test") {
      props.loginStatus()
    } else {
      return;
    }
  }

  return (
    <div className="sign-in-bg">
      <form action="#">
        <img src={scooteqLogo} alt="scooTeq logo"></img>
        <h1>Sign in</h1>
        <input ref={emailField} type="email" placeholder="Email" />
        <input
          ref={passwordField}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit" onClick={checkCredentials}>
          Login
        </button>
        <p>Forgot password?</p>
      </form>
    </div>
  );
}


