import React from "react";
import styles from "../styles/Orders.module.css";

const mockOrders = [
  { id: "2384", customer: "Ayesha", total: "$129.00", status: "Processing" },
  { id: "2383", customer: "Omar", total: "$42.50", status: "Shipped" },
  { id: "2382", customer: "Sara", total: "$220.00", status: "Delivered" },
];

export default function Orders() {
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
          {mockOrders.map((o) => (
            <tr key={o.id}>
              <td>#{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
