import React from "react";
import { DiHtml5, DiCss3, DiSqllite } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodeDotJs,
  SiPostgresql,
} from "react-icons/si";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.contentSkill}>
      <div className={styles.Skills}>
        <h2>Sobre mi:</h2>
        <p>
          Soy una persona proactiva, creativa, innovadora, disciplinada,
          recursiva que Busca hacer su trabajo eficiente y oportunamente. Tengo
          habilidad para trabajar en equipo, asumir retos y liderazgo.
          Cumplimiento, escalabilidad, innovación e ingenio la nueva forma del
          siglo.
        </p>
        <h2>Tecnologias</h2>
        <DiHtml5 title="HTML" />
        <DiCss3 title="CSS" />
        <SiJavascript title="JavaScript" />
        <SiReact title="REACT JS" />
        <SiRedux title="REDUX" />
        <SiNodeDotJs title="NODE JS" />
        <SiPostgresql title="POSTGRES" />
        <DiSqllite title="SQLLITE" />
      </div>
    </div>
  );
};

export default Skills;
