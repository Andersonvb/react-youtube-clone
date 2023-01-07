import React from "react";
import "../stylesheets/Content.css";
import Video from "./Video";
import DogImg from "../images/dog.jpg"

const Content = () => {
  return (
    <div className="content-container">
      <Video title="Los PELIGROS de la GRATIFICACIÓN INMEDIATA" channel="La Ducha Fría" views={2300} time="6 hours ago" img={DogImg} channelImg={DogImg}/>

      <Video title="Los PELIGROS de la GRATIFICACIÓN INMEDIATA" channel="La Ducha Fría" views={2300} time="6 hours ago" img={DogImg} channelImg={DogImg}/>

      <Video title="Los PELIGROS de la GRATIFICACIÓN INMEDIATA" channel="La Ducha Fría" views={2300} time="6 hours ago" img={DogImg} channelImg={DogImg}/>

      <Video title="Los PELIGROS de la GRATIFICACIÓN INMEDIATA" channel="La Ducha Fría" views={2300} time="6 hours ago" img={DogImg} channelImg={DogImg}/>
    </div>
  );
};

export default Content;