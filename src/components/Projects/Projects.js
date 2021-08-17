import React from "react";
import { FaMixer, FaDev, FaUserCircle, FaInfoCircle } from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.pcontent}>
      <div
        onClick={() =>
          (document.location.href = "https://la-montaner.vercel.app/")
        }
      >
        <img
          src="https://i.ibb.co/CzFyJJH/smartmockups-ksgi3ras.png"
          alt="smartmockups-krv4vbch"
        />
        <h3>E-comerce La Montañesa</h3>
        <p>
          - Pagina creada para La Montañesa, un productor de cervezas
          artesanales en la ciudad de Cordoba Argentina <br />
          - Desarrollada en equipo con la metodologia Scrum y Git Flow
          <br /> - Desarrollada con el stack MERN; MongoDB, Express, React y
          Node JS
          <br />
        </p>
      </div>
      <div
        onClick={() =>
          (document.location.href = "https://lucas-fullstackx.github.io/Dogs/")
        }
      >
        <img
          src="https://i.ibb.co/rk27xgc/smartmockups-ksgi4m2e.png"
          alt="smartmockups-krv4vbch"
        />
        <h3>Dogs App</h3>
        <p>
          - App creada con React JS y Redux en la parte del front end <br />
          - En la parte del back end PostgreSQL para la base de datos y
          construccion las rutas con Node JS y Express <br />- Primera
          aplicación Full Stack
        </p>
      </div>
      <div
        onClick={() =>
          (document.location.href =
            "https://lucas-fullstackx.github.io/weather-app/")
        }
      >
        <img
          src="https://i.ibb.co/Lz2sRQ4/smartmockups-ksgipude.png"
          alt="smartmockups-krv4vbch"
        />
        <h3>Weather App</h3>
        <p>
          - Una increíble app en la cual puedes consultar el clima de cualquier
          ciudad del mundo.
          <br />- Desarrollada con React JS
        </p>
      </div>
    </div>
  );
};

export default Projects;
