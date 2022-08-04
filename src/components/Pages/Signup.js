import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import logos from "../images/logos.png";
import illustrator from "../images/illustration.png";
import "../styles/Pages/signup.css";
import validation from "../Pages/validation";

function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };

  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="container">
      <div className="left-container">
        <div>
          <img src={logos} alt="logo image" className="logo-img" />
        </div>
        <img src={illustrator} alt="Image" className="illustrator-img" />
        <p className="left-text">
          We bring you an Easy Reliable and Secure E-Ticket Management Solution
          that will simply turn your event to be memorable and easy for your
          guests to Access while allowing them to acquire tickets at their
          comfort Anywhere in the World Anytime
        </p>
      </div>
      <div className="right-container">
        <p className="right-text">
          Join & Connect the Fastest Growing Online Community
        </p>
        <div className="right-form">
          <form className="form-wrapper">
            <div className="name">
              <label className="label">Username</label>
              <input
                type="text"
                name="username"
                className="input"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="name">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="name">
              <label className="label">Password </label>
              <input
                type={visible === false ? "password" : "text"}
                name="password"
                className="password"
                value={values.password}
                onChange={handleChange}
              />
              <span>
                {visible === false ? (
                  <Icon onClick={handleToggle} icon={eyeOff} className="span" />
                ) : (
                  <Icon onClick={handleToggle} icon={eye} className="span" />
                )}
              </span>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button className="submit" onClick={handleFormSubmit}>
              sign up
            </button>
          </form>
        </div>
        <div className="term-condition">
          <p className="right-terms">
            By submitting this form, you accept Ishema Ticket's
            <a href="#">Terms and Conditions</a> and
            <a href="#">Privacy Policy</a> and allow Mopay to contact you and
            send you marketing communications using the contact details you have
            provided to us.
          </p>
          <p className="own-account">
            Own an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
