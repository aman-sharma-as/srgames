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
          <h1 className="company-heading">King.com</h1>
          <p className="company-paragraph">
            King is a leading interactive entertainment company for the mobile
            world, with people all around the world playing one or more of our
            games. We have developed more than 200 fun titles, offering games
            that are enjoyed all around the world.
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
          <NavLink to="https://facebook.com">
            <FaFacebook />
            Facebook
          </NavLink>
          <NavLink to="https://facebook.com">
            <FaInstagram />
            Instagram
          </NavLink>
          <NavLink to="https://facebook.com">
            <FaXTwitter />
            Twitter
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
