import React from 'react'
import image from "../../assets/fashion-beauty.6ef7c1f060c92b55a6b28bfcfb16a1d2.png"
import styles from "./fashion.module.css"

function Fashion() {
  return (
    <div  className={styles.Fashion}>
      
      <img src={image} />
      Fashion
    </div>
  )
}

export default Fashion
