import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info_footer">
        <div>
          <span className="icon">
            <FaPhoneAlt />
          </span>
          <h3>Contact Info</h3>
          <p>901-418-7000</p>
          <p>Contact@support.com</p>
        </div>
        <div className="info_footer_social">
          <img src={logo} alt="" />
          <p>
            There are many variations of passages of Lorem Ipsum available be
            the majority.
          </p>
          <div className="contact_icons">
            <div>
              <Link>
                <FaFacebook />
              </Link>
            </div>
            <div>
              <Link>
                <FaInstagram />
              </Link>
            </div>
            <div>
              <Link>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <span className="icon">
            <BsSendFill />
          </span>
          <h3>Contact Info</h3>
          <p>901-418-7000</p>
          <p>Contact@support.com</p>
        </div>
      </div>
      <p className="copyright">Copyright ©2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
