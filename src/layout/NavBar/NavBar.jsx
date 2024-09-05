import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  function openNavFunc() {
    setOpenNav((prevNav) => !prevNav);
  }

  useEffect(() => {
    function scrollEvent() {
      if (window.scrollY > 500) {
        setDarkNav(true);
      } else {
        setDarkNav(false);
      }
    }
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <nav className={`nav ${darkNav ? "darknav" : ""}`}>
      <div className="logo_div">
        <img className="logo_img" src={logo} alt="" />
      </div>
      <ul className={`${openNav ? "" : "hide"}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/appointment"} className="btn nav_btn">
          Book an Appointment
        </Link>
      </ul>
      <button className="nav_burger" onClick={openNavFunc}>
        <FaBarsStaggered />
      </button>
    </nav>
  );
};

export default NavBar;
