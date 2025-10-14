import React from "react";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  
  const metrics = [
    { label: "Total Sales", value: "$12,420" },
    { label: "Orders", value: "312" },
    { label: "Products", value: "84" },
    { label: "Active Users", value: "1,204" },
  ];

  return (
    <div className={styles.wrap}>
      <h2 className={styles.h}>Overview</h2>
      <div className={styles.grid}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.card}>
            <div className={styles.cardLabel}>{m.label}</div>
            <div className={styles.cardValue}>{m.value}</div>
          </div>
        ))}
      </div>

      <section className={styles.section}>
        <h3>Recent Activity</h3>
        <ul className={styles.activity}>
          <li>Order #2384 placed — $129.00</li>
          <li>New user signed up — zaid@example.com</li>
          <li>Product "Blue Hoodie" stock low (7 left)</li>
        </ul>
      </section>
    </div>
  );
}
