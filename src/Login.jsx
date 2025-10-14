import styles from "./Login.module.css";
import React, { useEffect, useState } from "react";
import Sidebar from "./componentes/Sidebar";
import Header from "./componentes/Header";
import Dashboard from "./componentes/Dashboard";
import Products from "./componentes/Products";
import Orders from "./componentes/Orders";
import Users from "./componentes/Users";
import Registration from "./componentes/Registration";

function Login() {
  const [route, setRoute] = useState("dashboard");

  useEffect(() => {
    document.title = "Admin — eCommerce Dashboard";
  }, []);
  return (
    <>
      <div className={styles.app}>
        <Sidebar current={route} onNavigate={setRoute} />
        <div className={styles.main}>
          <Header onNavigate={setRoute} />
          <main className={styles.content}>
            {route === "dashboard" && <Dashboard />}
            {route === "products" && <Products />}
            {route === "orders" && <Orders />}
            {route === "users" && <Users />}
            {route === "register" && <Registration />}
          </main>
        </div>
      </div>
    </>
  );
}

export default Login;
