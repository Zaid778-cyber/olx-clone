import React from "react";
import styles from "../styles/Sidebar.module.css";

const items = [
  { key: "dashboard", label: "Dashboard" },
  { key: "products", label: "Products" },
  { key: "orders", label: "Orders" },
  { key: "users", label: "Users" },
  { key: "register", label: "Register" },
];

export default function Sidebar({ current, onNavigate }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>ShopAdmin</div>
      <nav className={styles.nav}>
        {items.map((i) => (
          <button
            key={i.key}
            className={current === i.key ? styles.active : styles.link}
            onClick={() => onNavigate(i.key)}
          >
            {i.label}
          </button>
        ))}
      </nav>
      <div className={styles.footer}>v1.0 • React</div>
    </aside>
  );
}
