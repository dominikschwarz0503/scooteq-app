import React, { Component } from "react";
import "./ScooterDetailSlide.css";
import ScooterIconLg from "./scooter-icon-lg.png";
class ScooterDetailSlide extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let scooterDetailSlide = document.querySelector(".wrapper");
    scooterDetailSlide.classList.add("close");
    this.props.startTimer();
    setTimeout(() => {
      scooterDetailSlide.classList.remove("open");
    }, 1000);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="ScooterDetailSlide-container">
          <h1>ScooTeq MAX G30D</h1>
          <img src={ScooterIconLg} alt="Scooter Icon large" />
          <ul className="ScooterDetailSlide-list">
            <li>Max. Reichweite: 65 km</li>
            <li>Motorleistung: 350W</li>
            <li>Reifen: 10'' schlauchlose Luftreifen</li>
            <li>Max. Traglast: 100 kg</li>
            <li>Gewicht: 19,9 kg</li>
          </ul>
          <button onClick={this.handleClick}>Rent it</button>
        </div>
      </div>
    );
  }
}

export default ScooterDetailSlide;
