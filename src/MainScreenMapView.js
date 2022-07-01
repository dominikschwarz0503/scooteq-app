import React, { Component } from "react";
import "./MainScreenMapView.css";
import scooteqLogo from "./scooteq-logo.png";
import reactLogo from "./logo.svg";
import Timer from "./Timer";
import InteractiveMap from "./InteractiveMap";
import ScooterDetailSlide from "./ScooterDetailSlide";
class MainScreenMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
    };
  }

  startTimer() {
    document.querySelector(".wrapper").classList.remove("close");
    document.querySelector(".wrapper").classList.add("open");
    setTimeout(() => {
      document.querySelector(".wrapper").classList.remove("open");
      document.querySelector(".wrapper").classList.add("close");
      this.setState({ timerRunning: true });
    }, 3000);
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
        <ScooterDetailSlide />
      </div>
    );
  }
}

export default MainScreenMapView;
