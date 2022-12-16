import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../stylesheets/GuideBtn.css";

const GuideBtn = ({ src, alt, text, active = false }) => {
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    setBtnActive(active);
  }, [btnActive]);

  return (
    <div className={btnActive ? "guide-btn actived" : "guide-btn"}>
      <img className="guide-btn__img" src={src} alt={alt} />
      <span className="guide-btn__message">{text}</span>
    </div>
  );
};

export default GuideBtn;
