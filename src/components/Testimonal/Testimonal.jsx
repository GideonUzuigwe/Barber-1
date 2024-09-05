import React from "react";
import "./Testimonal.css";
import { MdStar } from "react-icons/md";
import testimonal from "../../assets/testimonal.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonal = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="testimonals">
      <Slider {...settings}>
        <div className="testimonal">
          <div className="stars">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <p>
            "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter
            labore et dolore magna.
          </p>
          <div className="testimonals_user">
            <img src={testimonal} alt="" />
            <p>Wilma Mumduya</p>
          </div>
        </div>
        <div className="testimonal">
          <div className="stars">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <p>
            "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter
            labore et dolore magna.
          </p>
          <div className="testimonals_user">
            <img src={testimonal} alt="" />
            <p>Wilma Mumduya</p>
          </div>
        </div>
        <div className="testimonal">
          <div className="stars">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <p>
            "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter
            labore et dolore magna.
          </p>
          <div className="testimonals_user">
            <img src={testimonal} alt="" />
            <p>Wilma Mumduya</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonal;
