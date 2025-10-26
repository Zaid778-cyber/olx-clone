import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import styles from "../styles/Products.module.css";

export default function Products() {
  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("products_v1")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("products_v1", JSON.stringify(products));
  }, [products]);

  const addProduct = (p) => {
    setProducts((prev) => {
      const newList = [...prev, { ...p, id: Date.now() }];
      localStorage.setItem("products_v1", JSON.stringify(newList));
      window.dispatchEvent(new Event("productsUpdated")); // ✅ update OLX in real-time
      return newList;
    });
  };

  const deleteProduct = (id) =>
    setProducts((prev) => prev.filter((x) => x.id !== id));

  const updateProduct = (id, data) =>
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );

  const openImageInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2>Products</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.formCol}>
          <ProductForm addProduct={addProduct} />
        </div>

        <div className={styles.listCol}>
          <div className={styles.list}>
            {products.length === 0 && (
              <p className={styles.empty}>No products yet — add some!</p>
            )}

            {products.map((p) => (
              <div key={p.id} className={styles.card}>
                <div
                  className={styles.media}
                  onClick={() => openImageInNewTab(p.image)} // 🖱️ Added here
                  style={{ cursor: p.image ? "pointer" : "default" }}
                >
                  {p.image ? (
                    <img src={p.image} alt={p.name} />
                  ) : (
                    <div className={styles.placeholder}>{p.name.charAt(0)}</div>
                  )}
                </div>

                <div className={styles.info}>
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.price}>${p.price}</div>
                </div>

                <div className={styles.controls}>
                  <button
                    onClick={() =>
                      navigator.clipboard?.writeText(JSON.stringify(p))
                    }
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className={styles.del}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
