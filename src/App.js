import "./App.css";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import MainScreenMapView from "./MainScreenMapView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainScreenMapView />
        {/* <Login /> */}
        {/* <SignUp /> */}
      </header>
    </div>
  );
}

export default App;
