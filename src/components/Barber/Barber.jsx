import React from "react";
import "./Barber.css";
import barber_1 from "../../assets/barber-1.webp";
import barber_2 from "../../assets/barber-2.webp";
import barber_3 from "../../assets/barber-3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Barber = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="barbers">
      <Slider {...settings} {...settings}>
        <div className="barber">
          <div className="barber_img">
            <img src={barber_1} alt="" />
          </div>
          <div className="barber_texts">
            <h3>Jack Mardon</h3>
            <p>Senior Barber</p>
          </div>
        </div>
        <div className="barber">
          <div className="barber_img">
            <img src={barber_2} alt="" />
          </div>
          <div className="barber_texts">
            <h3>Sunday James</h3>
            <p>Junior Barber</p>
          </div>
        </div>
        <div className="barber">
          <div className="barber_img">
            <img src={barber_3} alt="" />
          </div>
          <div className="barber_texts">
            <h3>Jack Hallow</h3>
            <p>Junior Barber</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Barber;
