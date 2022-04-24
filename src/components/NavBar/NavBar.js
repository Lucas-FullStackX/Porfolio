/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaDev } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <>
      <nav className={styles.bar}>
        <FaDev className={styles.barIcon} />
        {/*       <FaMixer className={styles.icon} /> */}
        <div className={styles.btnMenu}>
          <label htmlFor="menu">
            <GiHamburgerMenu className={styles.menuIcon} />
          </label>
        </div>
        <input type="checkbox" id="menu" className={styles.btnId} />
        <div className={styles.containerMenu}>
          <div className={styles.contMenu}>
            <nav>
              <a href="#aboutme">Sobre mi</a>
              <a href="#skills">Tecnologias</a>
              <a href="#projects">Proyectos</a>
              <a href="#contact">Contactame</a>
            </nav>
            <label htmlFor="menu">
              <AiOutlineClose />
            </label>
          </div>
        </div>

        <a href="#aboutme">Sobre mi</a>
        <a href="#skills">Tecnologias</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contactame</a>
      </nav>
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default NavBar;
