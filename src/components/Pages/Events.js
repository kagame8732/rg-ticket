import React from "react";
import "../styles/Pages/event.css";
import CountdownTimer from "../countdown/CountdownTimer";
import share from "../images/share.png";
import loc from "../images/loc.png";
import org from "../images/org.png";
import phone from "../images/phone.png";
import start from "../images/start.png";
import venue from "../images/venue.png";
import cat from "../images/cat.png";

function Events() {
  return (
    <div>
      <div className="event-share">
        <button className="share-btn">
          <img src={share} alt="" /> <span className="share">Share</span>
        </button>
        <CountdownTimer countdownTimestampMs={1660925648000} />
      </div>
      <div>
        <div className="description">
          <div className="description-header">
            <div className="heading-left">
              <h2 className="description-heading">Event Description</h2>
            </div>
            <div className="right-upcoming">
              <h2 className="description-upcoming">Upcoming</h2>
            </div>
          </div>
          <div className="description-body">
            <div className="start-date">
              <div className="start-body">
                <img src={start} alt="start-image" className="start-img" />
              </div>
              <div>
                <h2 className="start-heading">Start Date</h2>
                <span className="start-text">Wednesady, 22 Jun 2022</span>
              </div>
            </div>
            <div className="end-date">
              <div>
                <img src={start} alt="" />
              </div>
              <div>
                <h2>End Date</h2>
                <span>Friday, 23 Jun 2022</span>
              </div>
            </div>
            <div className="organiser">
              <div>
                <img src={org} alt="" />
              </div>
              <div>
                <h2>Organiser</h2>
                <span>Arthur Nation RG-CONSULT INC</span>
              </div>
            </div>
            <div className="location">
              <div>
                <img src={loc} alt="" />
              </div>
              <div>
                <h2>Location</h2>
                <span>
                  Kigali-Rwanda,
                  <br /> Radisson Blu, Country
                </span>
              </div>
            </div>
            <div className="venue">
              <div>
                <img src={venue} alt="" />
              </div>
              <div>
                <h2>Venue</h2>
                <span>
                  Kigali-Rwanda,
                  <br /> Radisson Blu, Country
                </span>
              </div>
            </div>
            <div className="category">
              <div>
                <img src={cat} alt="" />
              </div>
              <div>
                <h2>Category</h2>
                <span>Comedy</span>
              </div>
            </div>
            <div className="contact">
              <div>
                <img src={phone} alt="" />
                <h2>Phone Number</h2>
                <span>+250 789 364 756</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-event">buy a ticket</button>
      </div>
    </div>
  );
}

export default Events;
