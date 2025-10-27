import React, { useEffect, useState } from "react";
import styles from "./Olx.module.css";
import { FaSearch } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import Mobiles from "./Mobiles";
import Vechlcles from "./Vechlcles";
import Electronic from "./Electronic";
import Bikes from "./Bikes";
import Tractor from "./Tractor";
import Servies from "./Services.jsx";
import Bookes from './Bookes.jsx';
import Fashion from "./Fashion.jsx";
import ImageCarousel2 from "./ImageCarousel2.jsx";

function Olx() {
  const [option, setOption] = useState("location");
  const [products, setProducts] = useState([]);

  // ✅ Load products from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products_v1")) || [];
    setProducts(stored);

    // Listen for updates when new product is added
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("products_v1")) || [];
      setProducts(updated);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("productsUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("productsUpdated", handleStorageChange);
    };
  }, []);

  const setInput = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
      {/* 🔍 Search Bar */}
      <div className={styles.container}>
        <input
          type="text"
          className={styles.inputselect}
          readOnly
          value={option}
        />
        <select className={styles.selectoption} onChange={setInput}>
          <option value="">Search</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="Singapore">Singapore</option>
          <option value="Australia">Australia</option>
        </select>
        <input
          type="text"
          className={styles.inputsearch}
          placeholder="Find cars, mobile and more"
        />
        <button className={styles.inputbtn}>
          <FaSearch /> Search
        </button>
      </div>

      <br /> <br /> <hr />

      {/* 🖼️ Carousel + Product Sections */}
      <div className={styles.data}>
        <ImageCarousel />
      </div>

      <div className={styles.Mobiles}>
        <Mobiles />
        <Vechlcles />
        <Electronic />
        <Bikes />
        <Tractor />
      </div>

      <div className={styles.comp2}>
        <Servies />
        
        <Bookes />
        <Fashion />
      </div>

      <ImageCarousel2 />

      {/* 🆕 Products Section */}
      <div className={styles.productSection}>
        <h2>🆕 Latest Products</h2>
        {products.length === 0 ? (
          <p className={styles.empty}>No products added yet.</p>
        ) : (
          <div className={styles.productGrid}>
            {products.map((p) => (
              <div key={p.id} className={styles.productCard}>
                {p.image ? (
                  <img src={p.image} alt={p.name} className={styles.productImg} />
                ) : (
                  <div className={styles.placeholder}>{p.name.charAt(0)}</div>
                )}
                <div className={styles.productInfo}>
                  <h3>{p.name}</h3>
                  <p>${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Olx;
