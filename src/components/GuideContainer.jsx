import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../stylesheets/GuideContainer.css";
import YoutubeIcon from "../images/youtube-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import GuideBtn from "../components/GuideBtn";

import dogImage from "../images/dog.jpg";

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
      <div className="guide-start">
        <button className="hamburger-btn" onClick={handleClick}>
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
        <div>
          <img className="youtube-icon" src={YoutubeIcon} alt="Youtube Icon" />
        </div>
      </div>

      <div className="content-section">
        <GuideBtn alt="User" src={dogImage} text="Home" active={true} />
        <GuideBtn alt="User" src={dogImage} text="Shorts" />
        <GuideBtn alt="User" src={dogImage} text="Library" />
      </div>

      <hr />

      <div className="content-section">
        <GuideBtn alt="User" src={dogImage} text="Library" />
        <GuideBtn alt="User" src={dogImage} text="History" />
        <GuideBtn alt="User" src={dogImage} text="Your videos" />
        <GuideBtn alt="User" src={dogImage} text="Watch later" />
        <GuideBtn alt="User" src={dogImage} text="Liked videos" />
      </div>

      <hr />

      <div className="content-section">
        <h3 className="suscriptions-title">Suscriptions</h3>
        <GuideBtn alt="User" src={dogImage} text="Joseju" />
        <GuideBtn alt="User" src={dogImage} text="Platzi" />
        <GuideBtn alt="User" src={dogImage} text="FunWithGuru" />
        <GuideBtn alt="User" src={dogImage} text="Baitybait" />
        <GuideBtn alt="User" src={dogImage} text="Illojuan" />
      </div>

    </div>
  );
};

export default GuideContainer;
