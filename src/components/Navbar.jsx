import { NavLink } from "react-router-dom";
import { RxOpenInNewWindow } from "react-icons/rx";
import logo from "../assets/logo.png";

import React, { useState } from "react";

import "./Navbar.css";
const Navbar = () => {
  const [toggleValue, setToggleValue] = useState(false);
  function showMobileNav() {
    setToggleValue(!toggleValue);
  }

  return (
    <>
      <header
        className={`nav-container ${toggleValue ? "display-mobile-menu" : ""}`}
      >
        <div className="upper-section">
          <NavLink to="/">
            <img src={logo} alt="S.R. Game Studio Logo" />
          </NavLink>
          <div className="menu-icons" onClick={showMobileNav}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        <ul className="menu-items">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/games">Games</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/privacy-policy">Support</NavLink>
          </li>
        </ul>
        <div className="social-icons">
          <NavLink to="https://discord.gg/ghPtU9U8b5" target="_blank">
            <div className="community-text">Community</div>
            <RxOpenInNewWindow />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
