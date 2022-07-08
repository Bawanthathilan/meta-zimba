import React from "react";
import styles from "../../styles/About.module.scss";
import { BiGame } from "react-icons/bi";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.left}>
          <div className={styles.aboutImg}>
            {" "}
            <Image
              src="/assets/about.png"
              alt="hero-img"
              objectFit="contain"
              layout="fill"
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.right_header}>
            <p>Who we are</p>
            <h2>
              data-driven marketing , news media and gaming in the metaverse
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className={styles.about_industries}>
            <div className={styles.about_card}>
              <div className={styles.about_card_header}>
                <BiGame size={30} />
                {""}
                <h3>Gaming</h3>
              </div>
              <div className={styles.about_card_body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={styles.about_card}>
              <div className={styles.about_card_header}>
                <BiGame size={30} />
                {""}
                <h3>Gaming</h3>
              </div>
              <div className={styles.about_card_body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={styles.about_card}>
              <div className={styles.about_card_header}>
                <BiGame size={30} />
                {""}
                <h3>Gaming</h3>
              </div>
              <div className={styles.about_card_body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={styles.about_card}>
              <div className={styles.about_card_header}>
                <BiGame size={30} />
                {""}
                <h3>Gaming</h3>
              </div>
              <div className={styles.about_card_body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
