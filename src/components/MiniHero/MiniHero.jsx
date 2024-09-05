import React, { useEffect, useRef } from "react";
import "./MiniHero.css";

const MiniHero = ({ title, description, imgUrl }) => {
  const heroBg = useRef(null);
  useEffect(() => {
    if (heroBg.current) {
      heroBg.current.style.setProperty("--bg", `url(${imgUrl})`);
    }
  }, []);

  return (
    <div ref={heroBg} className="mini_hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default MiniHero;
