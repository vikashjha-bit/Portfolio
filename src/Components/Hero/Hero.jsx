import React from "react";
import hero from "../../../Assets/Hero/1.jpg"
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikash</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 6 month of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://mail.google.com/mail/u/0/#inbox" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};