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
          <img src={share} alt="" /> <p className="share">share</p>
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
              <img src={start} alt="start-image" className="start-img" />
              <h2 className="start-heading">
                Start Date
                <span className="start-text">Wednesady, 22 Jun 2022</span>
              </h2>
            </div>
            <div className="end-date">
              <img src={start} alt="end-image" className="end-img" />
              <h2 className="end-heading">
                End Date <span className="end-text">Friday, 23 Jun 2022</span>
              </h2>
            </div>
            <div className="org">
              <img src={org} alt="organiser-image" className="org-img" />
              <h2 className="org-heading">
                Organiser{" "}
                <span className="org-text">Arthur Nation RG-CONSULT INC</span>
              </h2>
            </div>
            <div className="loc">
              <img src={loc} alt="" className="loc-img" />
              <h2 className="loc-heading">
                Location
                <span className="loc-text">
                  Kigali-Rwanda,
                  <br /> Radisson Blu, Country
                </span>
              </h2>
            </div>
            <div className="venue">
              <img src={venue} alt="venue-image" className="venue-img" />
              <h2 className="venue-heading">
                Venue
                <span className="venue-text">
                  Kigali-Rwanda,
                  <br /> Radisson Blu, Country
                </span>
              </h2>
            </div>
            <div className="category">
              <img src={cat} alt="category-image" className="category-img" />
              <h2 className="category-heading">
                Category<span className="category-text">Comedy</span>
              </h2>
            </div>
            <div className="contact">
              <img src={phone} alt="" className="contact-img" />
              <h2 className="cont-heading">
                Phone Number
                <span className="contact-text">+250 789 364 756</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="btn-event">buy a ticket</button>
      </div>
    </div>
  );
}

export default Events;
