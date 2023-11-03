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
      <div className="contact">
        <h1>Feel Free To Contact Us</h1>
        <div className="contact-form">
          <div className="contact-box">
            <img
              src={phoneContact}
              alt="Phone Contact"
              className="contact-icon"
            />
            <div className="phone-info">
              <p>Monday to Friday, 9am to 10pm</p>
              <span>+389 22 556 338</span>
            </div>
          </div>
          <div className="contact-box">
            <img
              src={socialMedia}
              alt="Social Media"
              className="contact-icon"
            />
            <div className="social-mediums">
              <div className="s-media">
                <img src={facebook} alt="Facebook" />
                <p>Follow Us on Facebook</p>
              </div>
              <div className="s-media">
                <img src={twitter} alt="Twitter" />
                <p>Follow Us on Twitter</p>
              </div>
              <div className="s-media">
                <img src={instagram} alt="Instagram" />
                <p>Follow Us on Instagram</p>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <img src={eMail} alt="E-mail" className="contact-icon" />
            <span>info@motivationalquotes.com</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
