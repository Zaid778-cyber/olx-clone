import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/4057360645412603123 (1).jpeg"


import styles from "./ImageCarousel2.module.css";

const ImageCarousel2 = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        className={styles.imagecarousal2}
      >
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
       
       
       
      </Carousel>
    </div>
  );
};

export default ImageCarousel2;
