import React from 'react'
import styles from "./Bikes.module.css"
import Bike from "../../assets/bikes.0a5064ae987f3bd72801b7bc2c3b6e02.png"

function Bikes() {
  return (
    <div className={styles.Bikes}>
      <img src={Bike} alt="Auto" />
      Bikes
      
    </div>
  )
}

export default Bikes
