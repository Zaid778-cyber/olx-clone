import React, { useEffect, useState } from "react";
import styles from "../styles/Orders.module.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders_v1")) || [];
    setOrders(stored);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("orders_v1")) || [];
      setOrders(updated);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("ordersUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("ordersUpdated", handleStorageChange);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <h2>Orders</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>#{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length === 0 && <p>No orders yet</p>}
    </div>
  );
}
