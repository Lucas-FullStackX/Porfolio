import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styles from "./Footer.module.css";

const Footer = () => {
  const git = function () {
    setTimeout(
      () => (document.location.href = "https://github.com/Lucas-FullStackX"),
      1000
    );
  };
  const linkendin = function () {
    setTimeout(
      () =>
        (document.location.href =
          "https://www.linkedin.com/in/gian-lucas-leguizamo-guerrero-603117208/"),
      1000
    );
  };
  return (
    <div className={styles.footer}>
      <div className={styles.boxes}>
        <p className={styles.contact}>Contactame:</p>
        <div onClick={git} className={styles.git}>
          <AiFillGithub />
          <h3>Git Hub</h3>
          <p>Lucas-FullStackX</p>
        </div>
        <div onClick={linkendin} className={styles.linkedin}>
          <AiFillLinkedin />
          <h3>LinkedIn</h3>
          <p>Lucas Leguizamo</p>
        </div>
        <div className={styles.mail}>
          <SiGmail />
          <h3>Mail</h3>
          <p>lucasleguizamo21@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
