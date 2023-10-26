import React from "react";
import Container from "../Container/Container";
import "./Footer.scss";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <Container>
      <footer className="footer">
        <span className="copyright">Copyright Elena © {year}</span>
      </footer>
    </Container>
  );
};

export default Footer;
