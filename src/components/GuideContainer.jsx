import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/GuideContainer.css";
import YoutubeIcon from "../images/youtube-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import GuideBtn from "../components/GuideBtn";

const GuideContainer = ({ showGuideContainer, hiddenGuideContainer }) => {
  const [showGuide, setShowGuide] = useState(showGuideContainer);

  const handleClick = () => {
    setShowGuide(false);
    hiddenGuideContainer();
  };

  useEffect(() => {
    setShowGuide(showGuideContainer);
  }, [showGuideContainer]);

  return (
    <div
      className={showGuide ? "guide-container" : "guide-container guide-hidden"}
    >
      <div className="start">
        <button className="hamburger-btn" onClick={handleClick}>
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
        <div>
          <img className="youtube-icon" src={YoutubeIcon} alt="Youtube Icon" />
        </div>
      </div>
    </div>
  );
};

export default GuideContainer;
