import React, { Component } from "react";
import "./MainScreenMapView.css";
import scooteqLogo from "./scooteq-logo.png";
import reactLogo from "./logo.svg";
import Countdown from "./Countdown";

class MainScreenMapView extends Component {
  render() {
    return (
      <div className="MainScreenMapView-container">
        <img src={scooteqLogo} alt="scooteq logo"></img>
        <iframe
          title="Google Maps embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9489.029468704308!2d9.989798118638786!3d53.5174603051381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18fb47784a75f%3A0x956a9644cc97906b!2sALDI%20Nord!5e0!3m2!1sen!2sde!4v1656324234459!5m2!1sen!2sde"
          width="320"
          height="288"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h1>
          Rental Duration: <Countdown />
        </h1>
        <p>Cost per Minute: 15ct</p>
        <div className="Total-container">
          <h2>TOTAL: 99.99€</h2>
        </div>
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
