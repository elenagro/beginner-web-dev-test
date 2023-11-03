import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/healthy-life.png";
import ThemeButton from "../../components/Button/ThemeButton";
import Container from "../Container/Container";
import { useTheme } from "../../store/theme-context";

import "./Header.scss";

const Header = () => {
  const { darkTheme } = useTheme();

  return (
    <Container>
      <div id="header">
        <div className="left-side">
          <Link to="/">
            <img src={logo} alt="Healthy Food Logo" className="logo" />
          </Link>
        </div>

        <ul id="nav">
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-link">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
        <div>
          <ThemeButton />
        </div>
      </div>
    </Container>
  );
};

export default Header;
