import React from "react";
import "./About.css";
import AboutComponent from "../../components/About/About";
import MiniHero from "../../components/MiniHero/MiniHero";
import Offers from "../../components/Offers/Offers";
import Title from "../../components/Title/Title";
import Shop_1 from "../../assets/shop-1.jpg";

const About = () => {
  return (
    <div>
      <MiniHero
        title="About Us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ratione veniam eius expedita nostrum impedit"
        imgUrl={Shop_1}
      />
      <AboutComponent />
      <div className="container">
        <Title
          title="Our Offers"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore"
        />
        <Offers />
      </div>
    </div>
  );
};

export default About;
