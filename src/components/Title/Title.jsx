import React from "react";
import "./Title.css";

const Title = ({ title, para, leftmode }) => {
  return (
    <div className={`title ${leftmode ? "leftmode" : ""}`}>
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Title;
