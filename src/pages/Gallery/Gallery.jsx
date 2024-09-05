import React, { useRef, useState } from "react";
import "./Gallery.css";
import MiniHero from "../../components/MiniHero/MiniHero";
import Shop_1 from "../../assets/shop-1.jpg";
import Shop_2 from "../../assets/shop-2.jpg";
import Shop_3 from "../../assets/shop-3.jpg";
import Shop_4 from "../../assets/shop-4.jpg";
import Shop_5 from "../../assets/shop-5.jpg";
import Shop_6 from "../../assets/shop-6.jpg";
import Shop_7 from "../../assets/shop-7.jpg";
import Shop_8 from "../../assets/shop-8.jpg";
import Shop_9 from "../../assets/shop-9.jpg";

const Gallery = () => {
  const [imagePopUp, setImagePopUp] = useState("");
  const [viewImage, setViewImage] = useState(false);

  function setViewImageFunc(e) {
    setImagePopUp(e.target.src);
    setViewImage(true);
  }

  const popUp = useRef(null);
  function removeViewImage(e) {
    if (e.target === popUp.current) {
      setViewImage(false);
      setImagePopUp("");
    }
  }

  return (
    <div className="galleries">
      <MiniHero
        title="Our Gallery"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ratione veniam eius expedita nostrum impedit"
        imgUrl={Shop_7}
      />
      <div className="">
        <div className="gallery">
          <img src={Shop_1} alt="" onClick={setViewImageFunc} />
          <img src={Shop_2} alt="" onClick={setViewImageFunc} />
          <img src={Shop_3} alt="" onClick={setViewImageFunc} />
          <img src={Shop_4} alt="" onClick={setViewImageFunc} />
          <img src={Shop_5} alt="" onClick={setViewImageFunc} />
          <img src={Shop_6} alt="" onClick={setViewImageFunc} />
          <img src={Shop_7} alt="" onClick={setViewImageFunc} />
          <img src={Shop_8} alt="" onClick={setViewImageFunc} />
          <img src={Shop_9} alt="" onClick={setViewImageFunc} />
        </div>
      </div>
      <div
        ref={popUp}
        className={`img_popup ${viewImage ? "" : "hide"}`}
        onClick={removeViewImage}
      >
        <img src={imagePopUp} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
