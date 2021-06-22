import React from "react";
import Features from "./Features/Features.js";
import styles from "./Footer.module.css";
const Footer = (props) => {
  return (
    <footer className={styles["footer-wrap"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["container_footer"]}>
          <Features />
          <div className={styles["contact"]}>
            <span className="section-text2">Restaurant Detail</span>
            <h5 className="section-text1">The Food's Man</h5>
            <h5 className="section-text1">Contact Detail: +91123456789</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
