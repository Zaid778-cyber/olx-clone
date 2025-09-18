import React, { useState } from "react";
import styles from "./Olx.module.css";
import { FaSearch } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import Mobiles from "./Mobiles";
import Vechlcles from "./Vechlcles";
import Electronic from "./Electronic";
import Bikes from "./Bikes"
import Tractor from "./Tractor"
import Servies from "./Services.jsx"
import Kides from "./kides.jsx"
import Bookes from './Bookes.jsx'
import Fashion from "./Fashion.jsx";
import ImageCarousel2 from "./ImageCarousel2.jsx";


function Olx() {
  let [option, setoption] = useState("location");

  let setinput = (e) => {
    setoption(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.inputselect}
          readOnly
          value={option}
        />
        <select className={styles.selectoption} onChange={setinput}>
          <option value="">Search</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="Singapor">Singapro</option>
          <option value="Australia">Australia</option>
        </select>
        <input
          type="text"
          className={styles.inputsearch}
          placeholder="Find cars,Mobile and more"
        />
        <button className={styles.inputbtn}>
          {" "}
          <FaSearch />
          Search
        </button>
      </div>{" "}
      <br /> <br /> <hr />
      <div className={styles.data}>
        <ImageCarousel />
      </div>
      <div className={styles.Mobiles}>
      <Mobiles></Mobiles> <Vechlcles></Vechlcles>
      <Electronic/> <Bikes/> <Tractor/>
      </div> 
      <div  className={styles.comp2}>
        <Servies></Servies>
        <Kides/> <Bookes/>
        <Fashion></Fashion>
       
        


        


      </div>
      <ImageCarousel2 />
    </>
  );
}

export default Olx;
