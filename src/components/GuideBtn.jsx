import React from "react";
import "../stylesheets/GuideBtn.css";

const GuideBtn = ({ src, alt, text }) => {
  return <div className="guide-btn">
    <img src={src} alt={alt} />
    <span>{text}</span>
  </div>;
};

export default GuideBtn;
