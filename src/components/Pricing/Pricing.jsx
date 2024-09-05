import React, { useRef } from "react";
import "./Pricing.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import hair_salon from "../../assets/hair-salon.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Pricing = () => {
  let sliderRef = useRef(null);
  const nextPrice = () => {
    sliderRef.slickNext();
  };
  const prevPrice = () => {
    sliderRef.slickPrev();
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <div className="pricing">
      <div className="buttons">
        <button className="prev_btn" onClick={prevPrice}>
          <IoIosArrowBack />
        </button>
        <button className="next_btn" onClick={nextPrice}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="slider_container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="price">
            <h3>Hair Styling</h3>
            <ul>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Hair Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Beard Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Pro Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
            </ul>
          </div>
          <div className="price">
            <h3>Beard Styling</h3>
            <ul>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Hair Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Beard Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Pro Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
            </ul>
          </div>
          <div className="price">
            <h3>Jaw Styling</h3>
            <ul>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Hair Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Beard Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Pro Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
            </ul>
          </div>
          <div className="price">
            <h3>Hair Carving</h3>
            <ul>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Hair Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Beard Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
              <li>
                <div className="price_div_flex">
                  <img src={hair_salon} alt="" />
                  <div className="price_texts">
                    <h4>Pro Cut</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <span>$8.0</span>
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;
