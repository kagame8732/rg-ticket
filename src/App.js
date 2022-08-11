import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Pages/Signup";
import ErrorPage from "./components/Pages/ErrorPage";
import logo from "./components/images/logo.png";
import { HiSearch } from "react-icons/hi";
import "./components/styles/Pages/nav.css";
import Events from "./components/Pages/Events";
import Conferences from "./components/Pages/Conferences";
import Cinemas from "./components/Pages/Cinemas";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Signin from "./components/Pages/Signin";
import Live from "./components/Pages/Live";
import "./components/styles/Pages/live.css";
import Footer from "./components/Pages/Footer";
import Landing from "./components/Pages/Landing";

function App() {
  return (
    <Router>
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
            <div className="live-menu">
              <li>
                <Link to={"/live"} className="live-container">
                  Live Events
                  <div className="live-color"></div>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/conference" element={<Conferences />} />
        <Route path="/cinema" element={<Cinemas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
