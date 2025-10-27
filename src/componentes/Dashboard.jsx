import React, { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  const loadData = () => {
    const storedOrders = JSON.parse(localStorage.getItem("orders_v1")) || [];
    const storedProducts = JSON.parse(localStorage.getItem("products_v1")) || [];
    const storedUsers = JSON.parse(localStorage.getItem("users_v1")) || [];

    setOrders(storedOrders);
    setProducts(storedProducts);
    setUsers(storedUsers);

    const total = storedOrders.reduce((sum, o) => {
      const value = parseFloat(o.total?.replace(/[^0-9.]/g, "")) || 0;
      return sum + value;
    }, 0);
    setTotalSales(total);

    const activities = [];

    if (storedOrders.length > 0) {
      const latest = storedOrders[0];
      activities.push(`Order #${latest.id} placed — ${latest.total}`);
    }

    if (storedUsers.length > 0) {
      const latestUser = storedUsers[storedUsers.length - 1];
      activities.push(`New user signed up — ${latestUser.email}`);
    }

    if (storedProducts.length > 0) {
      const lowStock = storedProducts.find((p) => p.stock && p.stock < 10);
      if (lowStock)
        activities.push(`Product "${lowStock.name}" stock low (${lowStock.stock} left)`);
    }

    setRecentActivity(activities);
  };

  useEffect(() => {
    loadData();

    const handleUpdate = () => loadData();
    window.addEventListener("storage", handleUpdate);
    window.addEventListener("ordersUpdated", handleUpdate);
    window.addEventListener("productsUpdated", handleUpdate);
    window.addEventListener("usersUpdated", handleUpdate);

    return () => {
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("ordersUpdated", handleUpdate);
      window.removeEventListener("productsUpdated", handleUpdate);
      window.removeEventListener("usersUpdated", handleUpdate);
    };
  }, []);

  const metrics = [
    { label: "Total Sales", value: `$${totalSales.toFixed(2)}` },
    { label: "Orders", value: orders.length },
    { label: "Products", value: products.length },
    { label: "Active Users", value: users.length },
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
          {recentActivity.length > 0 ? (
            recentActivity.map((a, i) => <li key={i}>{a}</li>)
          ) : (
            <li>No recent activity</li>
          )}
        </ul>
      </section>
    </div>
  );
}
