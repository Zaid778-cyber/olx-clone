import React from 'react'
import styles from "./Tractor.module.css"
import tractor from "../../assets/business-industrial-agriculture.2ec28979a1bde0183c777a0ce51b37c6.png"


function Tractor() {
  return (
    <div className={styles.Tractor}>
      <img src={tractor} alt="Auto" />
      Tractor

      
    </div>
  )
}

export default Tractor
