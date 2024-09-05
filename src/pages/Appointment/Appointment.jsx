import React from "react";
import "./Appointment.css";
import MiniHero from "../../components/MiniHero/MiniHero";
import Book from "../../components/Book/Book";
import Shop_9 from "../../assets/shop-9.jpg";

const Appointment = () => {
  return (
    <div>
      <MiniHero
        title="Book an Appointment"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ratione veniam eius expedita nostrum impedit"
        imgUrl={Shop_9}
      />
      <Book />
    </div>
  );
};

export default Appointment;
