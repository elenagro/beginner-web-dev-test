import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/healthy-eating.png";
import ThemeButton from "../../components/Button/ThemeButton";

const Header = () => {
  return (
    <div id="header">
      <div className="left-side">
        <Link to="/">
          <img src={logo} alt="Healthy Food Logo" className="logo" />
        </Link>
      </div>
      <div className="right-side">
        <Link to="/" className="homepage">
          Home
        </Link>
        <Link to="/about-us" className="about-us">
          About Us
        </Link>
        <Link to="/contact" className="contact">
          Contact
        </Link>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
