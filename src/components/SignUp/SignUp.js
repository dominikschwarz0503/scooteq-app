import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import scooteqLogo from "../../img/scooteq-logo.png";
import "./SignUp.css";

function SignUp() {

  const [hasWrongPassword, setHasWrongPassword] = useState();
  const user = { email: "test@mail.com", password: null };

  const emailField = useRef();
  const passwordField = useRef();
  const passwordRepeatField = useRef();

  useEffect(() => {

    localStorage.setItem("email", user.email);
    emailField.current.value = localStorage.getItem("email");
  })

  const saveUserCredentials = () => {

    user.email = emailField.current.value;

    if (passwordRepeatField.current.value === passwordField.current.value) {
      user.password = passwordField.current.value;
    } else {
      setHasWrongPassword(true)
      setPasswordMismatch();
      return;
    }
  }

  let passwordMismatchString = ""
  const setPasswordMismatch = () => {

    if (hasWrongPassword) {
      setTimeout(() => {
        passwordMismatchString = "Password mismatch, please try again"
      }, 1000)
    };
  }

  return (
    <div className="sign-up-bg">
      <div>
        <img src={scooteqLogo} alt="scooTeq logo"></img>
        <h1>Sign up</h1>
        <input ref={emailField} type="email" placeholder="Email" required />
        <input ref={passwordField} type="password" placeholder="Password" required />
        <input ref={passwordRepeatField} type="password" placeholder="Password repeat" required />
        <br />
        <span>{passwordMismatchString}</span>
        <button onClick={saveUserCredentials}>Sign Up</button>
      </div>
    </div>
  );

}

export default SignUp;
