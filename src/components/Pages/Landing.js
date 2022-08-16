import React from "react";
import seka from "./../images/seka.png";
import "./../styles/Pages/landing.css";
import time from "../images/time1.png";
import cal from "../images/calendary.png";
import icon from "../images/icon.png";
import org from "../images/organiser.png";
import don from "../images/don.png";
import ira from "../images/ira.png";
import sol from "../images/sol.png";
import ankore from "../images/ankore.png";
import johnny from "../images/johnny.png";
import cocktail from "../images/cocktail.png";
import ayabas from "../images/ayabas.png";
import yoyo from "../images/yoyo.png";
import pool from "../images/pool.png";
import benda from "../images/benda.png";
import falana from "../images/falana.png";
import jidenna from "../images/jidenna.png";
import teri from "../images/teri.png";
import yaka from "../images/yaka.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import ishema from "../images/ishema.png";
import pray from "../images/pray.png";
import imena from "../images/imena.png";
import imperial from "../images/imperial.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="header-img">
        <img src={seka} alt="Seka-logo" className="seka-logo" />
      </div>
      <div className="header-seka">
        <h2 className="seka-heading">seka live</h2>
        <div className="center-seka">
          <div className="duration-seka">
            <img src={cal} alt="" />
            <span className="duration-time">Monday, 2022 May 03</span>
          </div>
          <div className="schedure">
            <img src={time} alt="" />
            <span className="duration-hour">Monday, 2022 May 03</span>
          </div>
          <div className="location">
            <img src={icon} alt="" />
            <span className="duration-location">Radisson Blu, Country</span>
          </div>
          <div className="organiser">
            <img src={org} alt="" />
            <span className="duration-organiser">
              ORGANIZER Arthur Nation RG-CONSULT INC
            </span>
          </div>
        </div>
      </div>
      <div className="upcoming-events">
        <h1 className="header-event">Upcoming Events</h1>
        <div className="event-container">
          <div>
            <div className="left-menu">
              <h2 className="left-heading">filter</h2>
              <div className="menu">
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">Cinema</a>
                </li>
                <li>
                  <a href="#">Conference</a>
                </li>
                <li>
                  <a href="#">Event</a>
                </li>
              </div>
            </div>
            <div className="ticket-left">
              <div className="ticketing-header">
                <h2 className="e-header">my ticket</h2>
                <button className="see-btn">See All </button>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn">3 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn">3 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn">3 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn">3 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn-e">1 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn">3 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
              <div className="ticket-container">
                <div className="card-ticket card-left">
                  <div className="e-name-btn">
                    <span className="e-name">Event name</span>
                    <button className="e-btn">3 day Left</button>
                  </div>
                  <div className="ticket-title">
                    <h2 className="e-heading">kigali film festival</h2>
                  </div>
                  <span className="e-date">Date</span>
                  <div className="name">
                    <h2 className="e-month">30 June</h2>
                    <h2 className="e-hour">01:30 pm</h2>
                  </div>
                </div>
                <div className="card-ticket card-right">
                  <div className="number">
                    <span className="e-ticket"> ticket number</span>
                    <h3 className="t-number">#220312756</h3>
                  </div>
                  <div className="number">
                    <span className="e-ticket"> ticket category</span>
                    <h3 className="t-number">VVIP & VIP</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-menu">
            {/* don Container */}
            <div className="don">
              <img src={don} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* Ira container */}
            <div className="don">
              <img src={ira} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* Sol container */}
            <div className="don">
              <img src={sol} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* ankore container */}
            <div className="don">
              <img src={ankore} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* johnny container  */}
            <div className="don">
              <img src={johnny} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* cocktail container  */}
            <div className="don">
              <img src={cocktail} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* ayabas conatiner  */}
            <div className="don">
              <img src={ayabas} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* yoyo container  */}
            <div className="don">
              <img src={yoyo} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* pool container  */}
            <div className="don">
              <img src={pool} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* cocktail container  */}
            <div className="don">
              <img src={cocktail} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* benda container  */}
            <div className="don">
              <img src={benda} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
            {/* farana container  */}
            <div className="don">
              <img src={falana} alt="" />
              <h2 className="don-heading">drop in setback 2022</h2>
              <div className="don-container">
                <div className="don-event">
                  <img src={cal} alt="" className="calendary" />
                  <span className="don-time">Monday, 2022 May 03</span>
                </div>
                <div className="don-schedure">
                  <img src={time} alt="" className="time-img" />
                  <span className="don-hour">Monday, 2022 May 03</span>
                </div>
                <div className="don-location">
                  <img src={icon} alt="" className="loc-img" />
                  <span className="event-location">Radisson Blu, Country</span>
                </div>
                <div className="don-organiser">
                  <img src={org} alt="" className="org-img" />
                  <span className="event-org">
                    ORGANIZER Arthur Nation RG-CONSULT INC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="past-events">
        <div>
          <h1 className="past-heading">Our Past Events</h1>
        </div>
        <div className="past-card">
          <div className="don">
            <img src={jidenna} alt="" />
            <h2 className="don-heading">drop in setback 2022</h2>
            <div className="don-container">
              <div className="don-event">
                <img src={cal} alt="" className="calendary" />
                <span className="don-time">Monday, 2022 May 03</span>
              </div>
              <div className="don-schedure">
                <img src={time} alt="" className="time-img" />
                <span className="don-hour">Monday, 2022 May 03</span>
              </div>
              <div className="don-location">
                <img src={icon} alt="" className="loc-img" />
                <span className="event-location">Radisson Blu, Country</span>
              </div>
              <div className="don-organiser">
                <img src={org} alt="" className="org-img" />
                <span className="event-org">
                  ORGANIZER Arthur Nation RG-CONSULT INC
                </span>
              </div>
            </div>
          </div>
          <div className="don">
            <img src={teri} alt="" />
            <h2 className="don-heading">drop in setback 2022</h2>
            <div className="don-container">
              <div className="don-event">
                <img src={cal} alt="" className="calendary" />
                <span className="don-time">Monday, 2022 May 03</span>
              </div>
              <div className="don-schedure">
                <img src={time} alt="" className="time-img" />
                <span className="don-hour">Monday, 2022 May 03</span>
              </div>
              <div className="don-location">
                <img src={icon} alt="" className="loc-img" />
                <span className="event-location">Radisson Blu, Country</span>
              </div>
              <div className="don-organiser">
                <img src={org} alt="" className="org-img" />
                <span className="event-org">
                  ORGANIZER Arthur Nation RG-CONSULT INC
                </span>
              </div>
            </div>
          </div>
          <div className="don">
            <img src={yaka} alt="" />
            <h2 className="don-heading">drop in setback 2022</h2>
            <div className="don-container">
              <div className="don-event">
                <img src={cal} alt="" className="calendary" />
                <span className="don-time">Monday, 2022 May 03</span>
              </div>
              <div className="don-schedure">
                <img src={time} alt="" className="time-img" />
                <span className="don-hour">Monday, 2022 May 03</span>
              </div>
              <div className="don-location">
                <img src={icon} alt="" className="loc-img" />
                <span className="event-location">Radisson Blu, Country</span>
              </div>
              <div className="don-organiser">
                <img src={org} alt="" className="org-img" />
                <span className="event-org">
                  ORGANIZER Arthur Nation RG-CONSULT INC
                </span>
              </div>
            </div>
          </div>
          <div className="don">
            <img src={cocktail} alt="" />
            <h2 className="don-heading">drop in setback 2022</h2>
            <div className="don-container">
              <div className="don-event">
                <img src={cal} alt="" className="calendary" />
                <span className="don-time">Monday, 2022 May 03</span>
              </div>
              <div className="don-schedure">
                <img src={time} alt="" className="time-img" />
                <span className="don-hour">Monday, 2022 May 03</span>
              </div>
              <div className="don-location">
                <img src={icon} alt="" className="loc-img" />
                <span className="event-location">Radisson Blu, Country</span>
              </div>
              <div className="don-organiser">
                <img src={org} alt="" className="org-img" />
                <span className="event-org">
                  ORGANIZER Arthur Nation RG-CONSULT INC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="rgticket">@rgticket | #rgticket</h2>
        <div className="rgticket-img">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="our-sponsor">
        <div className="sponsor">
          <h2 className="sponsor-heading">Our Sponsors</h2>
        </div>
        <div className="sponsor-logos">
          <div className="logo-1">
            <img src={ishema} alt="" />
          </div>
          <div className="logo-2">
            <img src={pray} alt="" />
          </div>
          <div className="logo-3">
            <img src={imena} alt="" />
          </div>
          <div className="logo-4">
            <img src={imperial} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
