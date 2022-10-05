import React from 'react'
import { useRef, useState } from 'react';
import InteractiveMap from '../InteractiveMap/InteractiveMap';
import ScooterDetailSlide from '../ScooterDetailSlide/ScooterDetailSlide';
import Timer from '../Timer/Timer';
import scooteqLogo from "../../img/scooteq-logo.png";
import reactLogo from "../../img/logo.svg";
import { useEffect } from 'react';
import "./Renting.css";

export default function Renting() {

    const sheetComponent = useRef();

    const [isTimerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isTimerRunning") === true) {
            setTimerRunning(true);
        }
    }, [])

    const startTimer = () => {
        setTimeout(() => {
            setTimerRunning(true);
            localStorage.setItem("isTimerRunning", isTimerRunning);
        }, 500);
    };

    const openSlide = () => {
        sheetComponent.current.openSheet();
    };

    return (
        <div className="MainScreenMapView-container">
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
            <ScooterDetailSlide
                ref={sheetComponent}
                startTimer={startTimer}
            />
        </div>
    )
}
