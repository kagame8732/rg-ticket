import React, { useState } from "react";
import "./../styles/Pages/login.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import logos from "../images/logos.png";
import illustrator from "../images/illustration.png";
import valid from "./valid";
function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    isRemember: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checked" ? checked : value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(valid(values));
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
        <p className="right-text">Welcome back to the RG-Tickets Community</p>
        <div className="right-form">
          <form className="form-wrapper">
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
            <div>
              <input
                type="checkbox"
                id="isRemember"
                name="isRemember"
                checked={values.isRemember}
                onChange={handleChange}
              />
              <label htmlFor="isRemember">Remember me</label>
              <button className="submit" onClick={handleFormSubmit}>
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="">
            No Account yet?<a href="">SIGN UP</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
