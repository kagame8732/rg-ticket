import React, { useState, useEffect } from "react";
import "../countdown/countdown.css";
import { getRemainingTimeUntilMS } from "../countdown/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMS(countdown));
  }
  return (
    <div className="countdown-timer">
      <div className="days">
        <span className="c-days">{remainingTime.days}:</span>
        <span className="c-day">days</span>
      </div>
      <div className="hours">
        <span className="c-hours">{remainingTime.hours}:</span>
        <span className="c-hour">hours</span>
      </div>
      <div className="minutes">
        <span className="c-minutes">{remainingTime.minutes}:</span>
        <span className="c-minute">minutes</span>
      </div>
      <div className="seconds">
        <span className="c-seconds">{remainingTime.seconds}</span>
        <span className="c-second">seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
