import React from "react";
import img from "./../images/logo.png";
import img1 from "../images/visa.png";
import img2 from "../images/mastercard.png";
import img3 from "../images/mtn.png";
import img4 from "../images/airtel.png";
import "../styles/Pages/footer.css";
import img5 from "../images/time.png";
import img6 from "../images/location.png";
import img7 from "../images/sms.png";
import img8 from "../images/call.png";
import ig from "../images/IG.png";
import fb from "../images/facebook.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-left">
          <img src={img} alt="logo" className="footer-logo" />
          <p className="footer-left-text">
            We bring you an Easy Reliable and Secure E-Ticket Management
            Solution that will simply turn your event to be memorable and easy
            for your guests to Access while allowing them to acquire tickets at
            their comfort Anywhere in the World Anytime
          </p>
          <img src={img1} alt="visa-logo" className="visa-img" />
          <img src={img2} alt="mastercard-logo" className="mastercard-img" />
          <img src={img3} alt="mtn-logo" className="mtn-img" />
          <img src={img4} alt="airtel-logo" className="airtel-img" />
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h2 className="link-heading">Useful Links</h2>
            <hr />
            <a href="#">Home</a>
            <a href="#">Events</a>
            <a href="#">Cinemas</a>
            <a href="#">Conferences</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">My tickets</a>
          </div>
          <div className="footer-right-contact">
            <h2 className="contact-heading">Contact us</h2>
            <hr />
            <img src={img5} alt="time-img" className="footer-time" />
            <span className="time">Mon-Fri, 09:00 - 18:00</span>
            <div>
              <p className="kigali">Kigali office</p>
              <img src={img6} alt="time-img" className="footer-location" />
              <span className="">
                Kigali-Rwanda, Equit Bank Building, Second floor, REMERA
                KISIMENTI
              </span>
            </div>
            <div>
              <img src={img7} alt="time-img" className="footer-info" />
              <span>sales@rgtickets.com</span>
            </div>
            <div>
              <img src={img8} alt="time-img" className="footer-contact" />
              <span>+250 787 608 673</span>
            </div>
            <div>
              <p className="kampala">Kampala Office</p>
              <img src={img7} alt="time-img" className="footer-info" />
              <span>
                Kampala-Uganda, Crown House, First Floor, Kampala Road
              </span>
            </div>
            <div>
              <img src={img7} alt="time-img" className="footer-contact" />

              <span>ug@rgtickets.com</span>
            </div>
            <img src={img8} alt="time-img" className="footer-contact" />
            <span>+256 787 768 788</span>
          </div>
          <div className="footer-right-connect">
            <h2 className="connect-heading">Connect with US</h2>
            <hr />
            <div className="footer-right-img">
              <img src={ig} alt="instagram-image" className="" />
              <img src={fb} alt="facebook-image" className="" />
              <img src={twitter} alt="twitter-image" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-banner">
        <p> &copy; RG-Tickets {new Date().getFullYear()} </p>
      </div>
    </div>
  );
}

export default Footer;
