import React from "react";
import "../stylesheets/MastHead.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { BsSearch, BsFillMicFill } from "react-icons/bs";
import YoutubeIcon from "../images/youtube-icon.png";

const MastHead = ({ handleHamburgerClick }) => {
  const handleSearchClick = () => {};

  const handleClick = () => {
    handleHamburgerClick();
  };

  return (
    <article id="masthead-container">
      <div className="start">
        <button className="hamburger-btn" onClick={handleClick}>
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
        <div>
          <img className="youtube-icon" src={YoutubeIcon} alt="Youtube Icon" />
        </div>
      </div>

      <div className="center">
        <div>
          <input className="search-input" type="text" placeholder="Search" />
          <button className="search-btn" onClick={handleSearchClick}>
            <BsSearch />
          </button>
        </div>
        <button className="mic-btn">
          <BsFillMicFill />
        </button>
      </div>

      <div className="end">
        <RiVideoAddLine className="end__btn" />
        <BiBell className="end__btn" />
        <div className="user">A</div>
      </div>
    </article>
  );
};

export default MastHead;
