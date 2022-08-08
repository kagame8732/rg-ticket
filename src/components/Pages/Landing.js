import React from "react";
import seka from "./../images/seka.png";
import "./../styles/Pages/landing.css";

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
            <span className="">Monday, 2022 May 03</span>
          </div>
          <div>
            <span className="">Monday, 2022 May 03</span>
          </div>
          <div>
            <span className="">Radisson Blu, Country</span>
          </div>
          <div>
            <span className="">ORGANIZER Arthur Nation RG-CONSULT INC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
