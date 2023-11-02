import React from "react";
import Wrapper from "../../shared/Wrapper/Wrapper";
import phoneContact from "../../assets/address-card-solid.svg";
import socialMedia from "../../assets/user-group-solid.svg";
import eMail from "../../assets/envelope-regular.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/square-twitter.svg";
import instagram from "../../assets/square-instagram.svg";

import "./Contact.scss";

const Contact = () => {
  return (
    <Wrapper>
      <h1>Feel Free To Contact Us</h1>
      <div className="contact">
        <div className="contact-box">
          <img
            src={phoneContact}
            alt="Phone Contact"
            className="contact-icon"
          />
          <div>
            <span>Monday to Friday, 9am to 10pm</span>
            <span>+389 22 556 338</span>
          </div>
        </div>
        <div className="contact-box">
          <img src={socialMedia} alt="Social Media" className="contact-icon" />
          <div className="social-mediums">
            <img src={facebook} alt="Facebook" className="s-media" />
            <span>Follow Us on Facebook</span>
            <img src={twitter} alt="Twitter" className="s-media" />
            <span>Follow Us on Twitter</span>
            <img src={instagram} alt="Instagram" className="s-media" />
            <span>Follow Us on Instagram</span>
          </div>
        </div>
        <div className="contact-box">
          <img src={eMail} alt="E-mail" className="contact-icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
