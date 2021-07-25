import React from "react";
import { FaMixer, FaBars } from "react-icons/fa";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.bar}>
      <ul className={styles.menuBar}>
        <FaMixer className={styles.icon} />
        <div className={styles.btnMenu}>
          <label htmlFor="menu">
            <FaBars className={styles.barIcon} />
          </label>
        </div>
      </ul>
      <input type="checkbox" id="menu" className={styles.btnId} />
      <div className={styles.containerMenu}>
        <div className={styles.contMenu}>
          <nav>
            <a href="#aboutme">Sobre mi</a>
            <a href="#contact">Contactame</a>
          </nav>
          <label htmlFor="menu">✖️</label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
