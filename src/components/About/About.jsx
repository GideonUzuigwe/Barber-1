import React from "react";
import "./About.css";
import about_img_1 from "../../assets/about-img-1.jpg";
import about_img_2 from "../../assets/about-img-2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container outside">
      <div className="about">
        <div className="about_images">
          <img className="about_img_1" src={about_img_1} alt="" />
          <img className="about_img_2" src={about_img_2} alt="" />
        </div>
        <div className="about_texts">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing eliteiusmod
            tempor incididunt ut labore et dolore magna aliqua. Qpsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Quis ipsum suspendisse ultr.
          </p>
          <div className="opens">
            <span className="opening_hour">Opening Hour:</span>
            <span> 10:00 am - 10:00 pm</span>
          </div>
          <Link to={"/about"} className="btn">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
