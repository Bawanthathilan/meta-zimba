import React from "react";
import Image from "next/image";
import styles from "../../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>MetaZimba Studio</h1>
        <h3>A Metaverse Company</h3>

        <p>
          Metazimba Studio is a metaverse company. we are engaged in data-driven
          marketing , news media and gaming in the metaverse
        </p>

        <a href="#" className={styles.hero_button_container}>
          <button className={styles.hero_button}>Get Started</button>
          <button className={styles.hero_button}>Gaming</button>
        </a>
      </div>

      <div className={styles.hero_image}>
        <Image
          src="/assets/hero-img.png"
          alt="hero-img"
          objectFit="contain"
          layout="fill"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Hero;
