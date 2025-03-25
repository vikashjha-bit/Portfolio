import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutImage from "../../../Assets/About/aboutImage.png";
import cursorIcon from "../../../Assets/About/cursorIcon.png";
import  serverIcon from "../../../Assets/About/serverIcon.png";
import  images from "../../../Assets/About/images.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img style={{ 
    width: "60px", 
    height: "60px", 
    objectFit: "cover",  // ✅ Corrected from "object"
    marginRight: "18px" ,
    backgroundColor:"blue"  // ✅ Corrected from "margin-right"
  }}  src={images} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AIMl Devloper</h3>
              <p>
                I have designed multiple machine learning projects and  design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};