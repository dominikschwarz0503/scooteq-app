import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }

      const pricePerSecond = 0.15 / 60;
      setTotalPrice(totalPrice + pricePerSecond);

      if (minutes === 59 && seconds === 59) {
        setHours(hours + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    if (!props.timerRunning) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1 className="Timer-component">
        Rental Duration: {hours < 10 ? "0" + hours : hours}h:
        {minutes < 10 ? "0" + minutes : minutes}m:
        {seconds < 10 ? "0" + seconds : seconds}s
      </h1>
      <p>Cost per Minute: 15ct</p>
      <div className="Total-component">
        <h1>
          Total:{" "}
          {totalPrice.toFixed(2) <= 9
            ? "0" + totalPrice.toFixed(2)
            : totalPrice.toFixed(2)}
          €
        </h1>
      </div>
    </div>
  );
}
export default Timer;
