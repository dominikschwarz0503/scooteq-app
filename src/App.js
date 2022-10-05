import "./App.css";
import Login from "./components/Login/Login";
import MainScreenMapView from "./components/MainScreenMapView/MainScreenMapView";
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


