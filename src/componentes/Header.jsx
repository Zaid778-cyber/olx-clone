import React from "react";
import styles from "../styles/Header.module.css";

export default function Header({ onNavigate }) {
  return (
    <header className={styles.header}>
      <div className={styles.searchWrap}>
        <input
          className={styles.search}
          placeholder="Search products, orders, users..."
        />
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={() => onNavigate("register")}>
          + New User
        </button>
      </div>
    </header>
  );
}
