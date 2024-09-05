import React from "react";
import "./Services.css";
import MiniHero from "../../components/MiniHero/MiniHero";
import Offers from "../../components/Offers/Offers";
import Pricing from "../../components/Pricing/Pricing";
import Title from "../../components/Title/Title";
import Shop_2 from "../../assets/shop-2.jpg";

const Services = () => {
  return (
    <div>
      <MiniHero
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ratione veniam eius expedita nostrum impedit"
        imgUrl={Shop_2}
      />
      <div className="container">
        <Offers />
        <Title
          title="Our Pricing"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore"
          leftmode={true}
        />
        <Pricing />
      </div>
    </div>
  );
};

export default Services;
