import React from "react";
import "./Offers.css";
import offers_img_1 from "../../assets/offers-img-1.jpg";
import offers_img_2 from "../../assets/offers-img-2.jpg";
import offers_img_3 from "../../assets/offers-img-3.jpg";
import offers_icon_1 from "../../assets/offers-icon-1.png";
import offers_icon_2 from "../../assets/offers-icon-2.png";
import offers_icon_3 from "../../assets/offers-icon-3.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer">
        <div className="offer_img_div">
          <div className="img_offer">
            <img src={offers_img_1} alt="" />
          </div>
          <div className="offer_icon">
            <img src={offers_icon_1} alt="" />
          </div>
        </div>
        <div className="offer_text">
          <h3>Smooth Shaving</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
      <div className="offer">
        <div className="offer_img_div">
          <div className="img_offer">
            <img src={offers_img_2} alt="" />
          </div>
          <div className="offer_icon">
            <img src={offers_icon_2} alt="" />
          </div>
        </div>
        <div className="offer_text">
          <h3>Beard Trimming</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
      <div className="offer">
        <div className="offer_img_div">
          <div className="img_offer">
            <img src={offers_img_3} alt="" />
          </div>
          <div className="offer_icon">
            <img src={offers_icon_3} alt="" />
          </div>
        </div>
        <div className="offer_text">
          <h3>Haircut Styles</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
