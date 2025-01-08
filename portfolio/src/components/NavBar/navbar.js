import React from "react";
import './navbar.css';
import TestImage from '../../assets/TestImage.jpg'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contactImg.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={TestImage} alt="TestImage" className="TestImage" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>

      {/* Wrap the button in a Link component */}
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuBtn"
      >
        <img src={contactImg} alt="Contact me" className="desktopMenuImg" />
        Contact Me
      </Link>
    </nav>
  );
};

export default NavBar;
