import React, { useEffect } from "react";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import wallpaper from "../../img/wallpaper.svg";
import wallpaper2 from "../../img/wallpaper2.svg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      className={styles.contentH}
      style={{ backgroundImage: `url(${wallpaper2})`, backgroundSize: "cover" }}
    >
      <div className={styles.home}>
        {/* <img
          data-aos="flip-left"
          src="https://i.ibb.co/d4PRtQW/web.png"
          alt="foto"
        /> */}
        <h1>Lucas Leguizamo</h1>
        <h2>Front-End Developer</h2>
        <p>
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
