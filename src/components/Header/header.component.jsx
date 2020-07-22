import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LogoImage, CustomNavbar, CustomNavLink } from "./header.styles";

const Header = () => {
  return (
    <CustomNavbar collapseOnSelect expand="md" className="sticky-top">
      <Link to="/">
        <LogoImage src="images/logo.jpg" alt="My logo" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <CustomNavLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </CustomNavLink>
          <CustomNavLink
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </CustomNavLink>
          <CustomNavLink
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </CustomNavLink>

          <CustomNavLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </CustomNavLink>
        </Nav>
      </Navbar.Collapse>
    </CustomNavbar>
  );
};
export default Header;
