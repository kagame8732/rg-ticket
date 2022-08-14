import React from "react";
import "../styles/Pages/event.css";
import CountdownTimer from "../countdown/CountdownTimer";
import share from "../images/share.png";

function Events() {
  return (
    <div>
      <div className="event-share">
        <button className="share-btn">
          <img src={share} alt="" /> <span className="share">Share</span>
        </button>
        <CountdownTimer countdownTimestampMs={1660925648000} />
      </div>
    </div>
  );
}

export default Events;
