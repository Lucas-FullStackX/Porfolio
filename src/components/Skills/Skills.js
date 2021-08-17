import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DiHtml5, DiCss3, DiSqllite, DiMongodb } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodeDotJs,
  SiPostgresql,
} from "react-icons/si";
import styles from "./Skills.module.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.contentSkill}>
      <div className={styles.Skills}>
        <h2 data-aos="zoom-in">Sobre mi:</h2>
        <p className={styles.about}>
          Soy una persona proactiva, creativa, innovadora, disciplinada,
          recursiva que busca hacer su trabajo eficiente y oportunamente. Tengo
          habilidad para trabajar en equipo, asumir retos y liderazgo.
          Cumplimiento, escalabilidad, innovación e ingenio la nueva forma del
          siglo.
        </p>
        <h2>Tecnologias</h2>
        <div className={styles.icons}>
          <div className={styles.icon} data-aos="zoom-out-up">
            <DiHtml5 title="HTML" />
            <p>HTML</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <DiCss3 title="CSS" />
            <p>CSS</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <SiJavascript title="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <SiReact title="REACT JS" />
            <p>React JS</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <SiRedux title="REDUX" />
            <p>Redux</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <IoLogoVue title="VUE" />
            <p>Vue</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <SiNodeDotJs title="NODE JS" />
            <p>Node JS</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <SiPostgresql title="POSTGRES" />
            <p>Postgres</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <DiMongodb title="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className={styles.icon} data-aos="zoom-out-up">
            <DiSqllite title="SQLITE" />
            <p>SQLite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
