import React from "react";
import "./MainScreenMapView.css";
import scooteqLogo from "./scooteq-logo.png";
import reactLogo from "./logo.svg";
import Timer from "./Timer";
import InteractiveMap from "./InteractiveMap";
import profileIcon from "./profile-icon.svg";
import ScooterDetailSlidePrototype from "./ScooterDetailSlidePrototype";
import { useRef } from "react";
import { useState } from "react";
export default function MainScreenMapView(props) {
    const sheetComponent = useRef();

    const [isTimerRunning, setTimerRunning] = useState(false);

    const startTimer = () => {
        setTimeout(() => {
            setTimerRunning(true);
        }, 500);
    };

    const openSlide = () => {
        sheetComponent.current.openSheet();
    };
    return (
        <div className="MainScreenMapView-container">
            <header>
                <nav className="navbar">
                    <img src={profileIcon} alt="profile-icon" />
                </nav>
            </header>
            <img src={scooteqLogo} alt="scooteq logo"></img>
            <InteractiveMap openSlide={openSlide} />
            <Timer timerRunning={isTimerRunning} />
            <div className="credit-text">
                <p>
                    Built with{" "}
                    <img
                        src={reactLogo}
                        width={48}
                        height={48}
                        alt="react logo"
                    />{" "}
                    by Dominik and Justin
                </p>
            </div>
            {/* <ScooterDetailSlide startTimer={this.startTimer.bind(this)} /> */}
            <ScooterDetailSlidePrototype
                ref={sheetComponent}
                startTimer={startTimer}
            />
        </div>
    );
}
