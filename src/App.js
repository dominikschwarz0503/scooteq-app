import "./App.css";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import MainScreenMapView from "./MainScreenMapView";
import { useState } from "react";

export default function App() {

  const [loginStatus, setLoginStatus] = useState(false);

  const login = () => {

    setLoginStatus(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <SignUp /> */}
        {loginStatus ? <MainScreenMapView /> : <Login loginStatus={login} />}
      </header>
    </div>
  );
}


