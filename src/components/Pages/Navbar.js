import React, { useState, useEffect } from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { HiSearch } from "react-icons/hi";
import "../styles/Pages/nav.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="header">
          <img src={logo} alt="logo-img" />
          <div className="search-bar">
            <HiSearch aria-label="submit search" className="submit-search" />
            <input
              type="text"
              name="search"
              className="input-search"
              placeholder="Enter your search"
            />
          </div>
          <ul>
            <li>
              <Link to={"/signup"} className="signup-login-menu">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="login-menu">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-menu">
          <div className="toggle-nav">
            <li>
              <GrMenu onClick={toggleNav} className="btn-nav" />
            </li>
          </div>
          {(toggleMenu || screenWidth > 998) && (
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/events"}>Events</Link>
              </li>
              <li>
                <Link to={"/conference"}>Conferences</Link>
              </li>
              <li>
                <Link to={"/cinema"}>Cinemas</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/live"} className="live-menu">
                  Live Events<span className="live-color">he</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
