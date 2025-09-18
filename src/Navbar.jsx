import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navcontainer}>
      {" "}
      <div className={styles.connav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.isactive : styles.noneolx
          }
        >
          Olx
        </NavLink>
        <NavLink
          to="/moters"
          className={({ isActive }) =>
            isActive ? styles.isactive :''
          }
        >
          Moters
        </NavLink>
        <NavLink
          to="/property"
          className={({ isActive }) =>
            isActive ? styles.isactive :''
          }
        >
          Property
        </NavLink>{" "}
      </div>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.islogin : styles.nonelogin
        }
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;
