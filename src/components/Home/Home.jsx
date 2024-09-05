import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Title from "../Title/Title";
import Offers from "../Offers/Offers";
import Pricing from "../Pricing/Pricing";
import Barber from "../Barber/Barber";
import Testimonal from "../Testimonal/Testimonal";
import Appointment from "../Appointment/Appointment";
import Book from "../Book/Book";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <div className="container">
        <Title
          title="Our Services"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore"
        />
        <Offers />
        <Title
          title="Our Pricing"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          leftmode={true}
        />
        <Pricing />
        <Title
          title="Barber"
          para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <Barber />
        <Title title="Testimonal" />
        <Testimonal />
      </div>
      <Appointment />
    </>
  );
};

export default Home;
