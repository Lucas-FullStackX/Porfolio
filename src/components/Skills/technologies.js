import { DiHtml5, DiCss3, DiMongodb, DiGit, DiReact } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiNextDotJs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    icon: <DiReact />,
  },
  {
    name: "Next JS",
    icon: <SiNextDotJs />,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    name: "HTML5",
    icon: <DiHtml5 />,
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
  },
  {
    name: "Git",
    icon: <DiGit />,
  },
];
