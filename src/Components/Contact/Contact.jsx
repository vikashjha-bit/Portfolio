import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from "../../../Assets/Contact/image.png";
import linkdin from "../../../Assets/Contact/image copy.png";
import github from "../../../Assets/Contact/image copy 2.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="jhavikashkumar716@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkdin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vikash-jha-43bb0a258/">Linkdin</a>
        </li>
        <li className={styles.link}>
          <img className="w-10" src={github} alt="Github icon" />
          <a href="https://github.com/vikashjha-bit">Github</a>
        </li>
      </ul>
    </footer>
  );
};