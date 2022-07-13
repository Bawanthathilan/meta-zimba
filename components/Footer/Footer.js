import React from "react";
import styles from "../../styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footertop}>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.Footer_section_header}>
              Esse id veniam sunt irure consectetur.
            </div>
            <div className={styles.Footer_text}>
              Pariatur ea enim veniam exercitation consequat mollit dolor minim
              sint reprehenderit esse cupidatat. Minim duis enim aute ullamco
              elit sunt eu aliquip nisi minim reprehenderit commodo. Irure enim
              velit pariatur laboris laboris est dolor consequat tempor proident
              non laborum aute.
            </div>
          </div>

          <div>
            {" "}
            <div className={styles.Footer_section_header}>
              Join the community
            </div>
          </div>
          <div>
            <div className={styles.Footer_section_header}>General</div>
            <div className={styles.Footer_text}>
              <ul className={styles.Footer_link_list}>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    Site map
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    Terms & Conditions
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    Privacy Policy
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.Footer_section_header}>Individual</div>
            <div className={styles.Footer_text}>
              <ul className={styles.Footer_link_list}>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.Footer_section_header}>Businesses</div>
            <div className={styles.Footer_text}>
              <ul className={styles.Footer_link_list}>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.Footer_section_header}>Links</div>
            <div className={styles.Footer_text}>
              <ul className={styles.Footer_link_list}>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="/">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
                <li className={styles.Footer_link_wrapper}>
                  <Link className={styles.Footer_link} passHref href="">
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <p>
            &copy; &nbsp;
            {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className={styles.footer__right}>
          <p>
            Design and Developed By{" "}
            <a href="/" target="_blank">
              Meta Zimba
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
