/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaMixer, FaDev, FaUserCircle, FaInfoCircle } from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.bar}>
      <ul className={styles.menuBar}>
        <FaMixer className={styles.icon} />
        <div className={styles.btnMenu}>
          <label htmlFor="menu">
            <FaDev className={styles.barIcon} />
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
          <label htmlFor="menu">
            <AiOutlineClose />
          </label>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.logoDetails}>
          <i className={styles.icoon}>
            <FaMixer />
          </i>
          <div className={styles.logoName}>CodingLab</div>
          <i id={styles.btn}>
            <FaMixer />
          </i>
        </div>
        <ul className={styles.navList}>
          <li>
            <a href="#">
              <i>
                <FaUserCircle />
              </i>
              <span className={styles.linksName}>User</span>
            </a>
            <span className={styles.tooltip}>User</span>
          </li>
          <li>
            <a href="#aboutme">
              <i>
                <SiAboutDotMe />
              </i>
              <span className={styles.linksName}>Messages</span>
            </a>
            <span className={styles.tooltip}>Messages</span>
          </li>
          <li>
            <a href="#proyects">
              <i>
                <MdWork />
              </i>
              <span className={styles.linksName}>Proyectos</span>
            </a>
            <span className={styles.tooltip}>Proyectos</span>
          </li>
          <li>
            <a href="#contact">
              <i>
                <FaInfoCircle />
              </i>
              <span className={styles.linksName}>Contacto</span>
            </a>
            <span className={styles.tooltip}>Contacto</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
