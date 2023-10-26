import React from "react";

import "./Footer.scss";

const Footer = () => {
  let year = new Date().getFullYear();
  return <p>Copyrigth Elena © {year}</p>;
};

export default Footer;
