import React, { Component } from "react";
import "./MainScreenMapView.css";
import scooteqLogo from "./scooteq-logo.png";
import reactLogo from "./logo.svg";
import Timer from "./Timer";
import InteractiveMap from "./InteractiveMap";
import ScooterDetailSlide from "./ScooterDetailSlide";
import profileIcon from "./profile-icon.svg";
import ScooterDetailSlidePrototype from "./ScooterDetailSlidePrototype";
class MainScreenMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
    };
  }

  startTimer() {
    console.log("Timer started!");
    setTimeout(() => {
      this.setState({ timerRunning: true });
    }, 500);
  }

  openSlide() {}

  render() {
    return (
      <div className="MainScreenMapView-container">
        <header>
          <nav className="navbar">
            <img src={profileIcon} alt="profile-icon" />
          </nav>
        </header>
        <img src={scooteqLogo} alt="scooteq logo"></img>
        <InteractiveMap openSlide={this.openSlide.bind(this)} />
        <Timer timerRunning={this.state.timerRunning} />
        <div className="credit-text">
          <p>
            Built with{" "}
            <img src={reactLogo} width={48} height={48} alt="react logo" /> by
            Dominik and Justin
          </p>
        </div>
        {/* <ScooterDetailSlide startTimer={this.startTimer.bind(this)} /> */}
        <ScooterDetailSlidePrototype open={true} />
      </div>
    );
  }
}

export default MainScreenMapView;
