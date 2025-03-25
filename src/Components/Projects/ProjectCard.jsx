import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// Import images statically
import hotelImg from "../../../Assets/Projects/image.png";
import viraImg from "../../../Assets/Projects/project.png";
import stockMarketImg from "../../../Assets/Projects/image copy.png";

const imageMap = {
  "Hotel Odisej": hotelImg,
  "VIRA": viraImg,
  "Stock Market Analysis": stockMarketImg,
};

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[project.title] || getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={project.demo} className={styles.link}>Demo</a>
        <a href={project.source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};
