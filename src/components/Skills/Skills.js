import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Skills.module.css";
import * as technologies from "./technologies";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.contentSkill}>
      <div className={styles.Skills}>
        <div className={styles.soft}>
          <h2 data-aos="zoom-in">Soft Skills:</h2>
          <ul data-aos="zoom-in-up">Trabajo en equipo</ul>
          <ul data-aos="zoom-in-up">Aprendizaje constante</ul>
          <ul data-aos="zoom-in-up">Resiliencia</ul>
          <ul data-aos="zoom-in-up">Versatilidad</ul>
          <ul data-aos="zoom-in-up">Creatividad</ul>
          <ul data-aos="zoom-in-up">Determinación</ul>
          <ul data-aos="zoom-in-up">Perseverancia</ul>
          <ul data-aos="zoom-in-up">Comunicacion</ul>
        </div>
        <h2 data-aos="zoom-in">Tecnologias</h2>
        <div className={styles.icons}>
          {technologies.technologies.map((tech) => (
            <div className={styles.icon} data-aos="zoom-out-up">
              {tech.icon}
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
