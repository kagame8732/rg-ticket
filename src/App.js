import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Pages/Signup";
import ErrorPage from "./components/Pages/ErrorPage";
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
import Navbar from "./components/Pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
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
