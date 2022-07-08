import React from "react";
import styles from "../../styles/Navbar.module.scss";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <h2>MetaZimba</h2>
        </div>

        <div className={styles.navbar__links}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.navbar__icons}>
          <ul>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <FiFacebook />
            </li>
            <li>
              <FiLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
