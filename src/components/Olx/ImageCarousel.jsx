import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ecomerce from "../../assets/565868639-800x600.webp";
import molty from "../../assets/563565690-800x600.webp";
import image1 from "../../assets/711w7MHA3AL._SX3000_.jpg";
import image2 from "../../assets/61rxSktgB1L._SX3000_.jpg"
import  image3 from "../../assets/71a8+gOXm+L._SX3000_.jpg"






















import styles from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        className={styles.imagecarousal}
      >
        <div>
          <img src={ecomerce} alt="Slide 1" />
        </div>
        <div>
          <img src={molty} alt="Slide 1" />
        </div>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 1" />
        </div>
         <div>
          <img src={image3} alt="Slide 1" />
        </div>
       
       
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
