import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RxOpenInNewWindow } from "react-icons/rx";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="company-text-area">
          <h1 className="company-heading">S.R. Game Studio</h1>
          <p className="company-paragraph">
            S.R. Game Studio is an Independent Gaming Startup company based in India.
          </p>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>
        <div className="useful-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="https://discord.gg/ghPtU9U8b5" target="_blank">
            Community
            <RxOpenInNewWindow />
          </NavLink>
        </div>
        <div className="social-links">
          <NavLink to="https://www.facebook.com/shriramayangamestudio">
            <FaFacebook />
            Facebook
          </NavLink>
          <NavLink to="https://www.instagram.com/shriramayanagamestudio/">
            <FaInstagram />
            Instagram
          </NavLink>
          <NavLink to="https://twitter.com/SR_GameStudio">
            <FaXTwitter />
            Twitter
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
