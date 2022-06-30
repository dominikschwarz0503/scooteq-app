import React, { Component } from "react";
import "./MainScreenMapView.css";
import scooteqLogo from "./scooteq-logo.png";
import reactLogo from "./logo.svg";
import Timer from "./Timer";
import InteractiveMap from "./InteractiveMap";
class MainScreenMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
    };
  }

  startTimer() {
    this.setState({ timerRunning: true });
  }

  render() {
    return (
      <div className="MainScreenMapView-container">
        <img src={scooteqLogo} alt="scooteq logo"></img>
        <InteractiveMap startTimer={this.startTimer.bind(this)} />
        <Timer timerRunning={this.state.timerRunning} />
        <p className="credit-text">
          Built with{" "}
          <img src={reactLogo} width={48} height={48} alt="react logo" /> by
          Dominik and Justin
        </p>
      </div>
    );
  }
}

export default MainScreenMapView;
