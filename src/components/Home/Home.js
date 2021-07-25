import React from "react";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.contentH}>
      <div className={styles.home}>
        <h1>FullStack Developer</h1>
        <img src="https://i.ibb.co/zPrPVCJ/git-hub.png" alt="foto" />
        <h2>Lucas Leguizamo</h2>
        <p>
          Busco dar soluciones prácticas a problemas concretos y asumir tareas
          complejas con efeciencia.
        </p>
        <p className={styles.slogan}>¡Codeando el futuro!</p>
      </div>
    </div>
  );
};

export default Home;
