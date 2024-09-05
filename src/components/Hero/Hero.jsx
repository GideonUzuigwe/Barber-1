import React, { useRef, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <h1>Modern Barber Shop in City's Center</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ratione veniam eius expedita nostrum impedit
        </p>
        <Link to={"/appointment"} className="btn">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
