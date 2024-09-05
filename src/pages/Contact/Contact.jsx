import React from "react";
import "./Contact.css";
import Appointment from "../../components/Appointment/Appointment";
import MiniHero from "../../components/MiniHero/MiniHero";
import Shop_8 from "../../assets/shop-8.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <MiniHero
        title="Contact Us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ratione veniam eius expedita nostrum impedit"
        imgUrl={Shop_8}
      />
      <Appointment />
    </div>
  );
};

export default Contact;
