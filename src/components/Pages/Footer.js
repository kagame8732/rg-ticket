import React from "react";
import img from "./../images/footer-logo.png";
import img1 from "../images/visa-logo.png";
import img2 from "../images/mastercard.png";
import img3 from "../images/MTN.png";
import img4 from "../images/airtel.png";
import "../styles/Pages/footer.css";
import img5 from "../images/clock.png";
import img6 from "../images/location.png";
import img7 from "../images/sms.png";
import img8 from "../images/call.png";
import ig from "../images/ig.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <img src={img} alt="logo" className="" />
        <p>
          We bring you an Easy Reliable and Secure E-Ticket Management Solution
          that will simply turn your event to be memorable and easy for your
          guests to Access while allowing them to acquire tickets at their
          comfort Anywhere in the World Anytime
        </p>
        <img src={img1} alt="visa-logo" className="" />
        <img src={img2} alt="visa-logo" className="" />
        <img src={img3} alt="visa-logo" className="" />
        <img src={img4} alt="visa-logo" className="" />
      </div>
      <div>
        <div>
          <h2>Useful Links</h2>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Cinemas</a>
          <a href="#">Conferences</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">My tickets</a>
        </div>
        <div>
          <h2>Contact us</h2>
          <span>
            <img src={img5} alt="time-img" className="footer-time" />
            Mon-Fri, 09:00 - 18:00
          </span>
          <p>Kigali office</p>
          <img src={img6} alt="time-img" className="footer-location" />
          <span>
            Kigali-Rwanda, Equit Bank Building, Second floor, REMERA KISIMENTI
          </span>
          <img src={img7} alt="time-img" className="footer-info" />
          <span>sales@rgtickets.com</span>
          <img src={img8} alt="time-img" className="footer-contact" />
          <span>+250 787 608 673</span>
          <p>Kampala Office</p>
          <span>Kampala-Uganda, Crown House, First Floor, Kampala Road</span>
          <img src={img7} alt="time-img" className="footer-info" />
          <span>ug@rgtickets.com</span>
          <img src={img8} alt="time-img" className="footer-contact" />
          <span>+256 787 768 788</span>
        </div>
        <div>
          <h2>Connect with US</h2>
          <div>
            <img src={ig} alt="instagram-image" />
            <img src={fb} alt="facebook-image" />
            <img src={twitter} alt="twitter-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
