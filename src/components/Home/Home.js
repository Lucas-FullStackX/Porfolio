import React, { useEffect } from "react";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.contentH}>
      <div className={styles.home}>
        <h1 data-aos="fade-down-right">FullStack Developer</h1>
        <img
          data-aos="flip-left"
          src="https://i.ibb.co/zPrPVCJ/git-hub.png"
          alt="foto"
        />
        <h2 data-aos="fade-right">Lucas Leguizamo</h2>
        <p data-aos="flip-up">
          Busco dar soluciones prácticas a problemas concretos y asumir tareas
          complejas con efeciencia.
        </p>
        <p className={styles.slogan} data-aos="flip-up">
          ¡Codeando el futuro!
        </p>
      </div>
    </div>
  );
};

export default Home;
