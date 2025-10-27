import React from "react";
import image from "../../assets/kids.5de42a58bc91f81fa22ccc401d7ac285.png";
import styles from "./kides.module.css";

function Kides() {
  return (
    <div className={styles.kides}>
      <img src={image} alt="Kids" />
      <p>Kides</p>
    </div>
  );
}

export default Kides;
