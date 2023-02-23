import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="p__opensans">"Lorem ipsum</p>
        <p className="p__opensans">"Lorem ipsum</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>

        <p className="p__opensans">08:00 Am - 12:00 Am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">07:00 Am - 11:00 Pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Victorex. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
