import React from "react";
import "../stylesheets/Video.css";

const Video = ({ title, channel, channelImg, views, time, img }) => {
  return (
    <div className="video-container">
      <img src={img} alt="Image" className="video-img"/>
      <div className="data-section">
        <div className="img-container">
          <img src={channelImg} alt="Channel Picture" className="channel-img"/>
        </div>

        <div className="data-container">
          <h2>{title}</h2>
          <small>{channel}</small>
          <div className="data-bottom">
            <small>{views} views</small>
            <small>{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;