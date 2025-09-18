import React from "react";
import image from "../../assets/services.23d8eb1535f319324813848887961a59.png";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.Service}>
      <img src={image} alt=""  className={styles.image}/>
    
      Servives
    </div>
  );
}

export default Services;
