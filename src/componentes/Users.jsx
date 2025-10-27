import React, { useEffect, useState } from "react";
import styles from "../styles/Users.module.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users_v1")) || [];
    setUsers(stored);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("users_v1")) || [];
      setUsers(updated);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("usersUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("usersUpdated", handleStorageChange);
    };
  }, []);

  const deleteUser = (email) => {
    const updated = users.filter((u) => u.email !== email);
    setUsers(updated);
    localStorage.setItem("users_v1", JSON.stringify(updated));
    window.dispatchEvent(new Event("usersUpdated"));
  };

  return (
    <div className={styles.wrap}>
      <h2>👥 Users</h2>
      <div className={styles.list}>
        {users.length === 0 && <p className={styles.empty}>No users yet</p>}
        {users.map((u) => (
          <div className={styles.user} key={u.email}>
            <div className={styles.avatar}>{u.fullName?.charAt(0)?.toUpperCase()}</div>
            <div className={styles.info}>
              <div className={styles.name}>{u.fullName}</div>
              <div className={styles.email}>{u.email}</div>
            </div>
            <button className={styles.delBtn} onClick={() => deleteUser(u.email)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
