import React from "react";
import styles from "./FeatureItem.module.css";

const FeatureItem = (props) => {
  return (
    <div className={styles["feature-item"]}>
      <img src={props.img} alt={props.imageAlt} />
      <h5 className={styles["section-text1"]}>{props.heading}</h5>
      <span className={styles["section-text2"]}>{props.description}</span>
    </div>
  );
};

export default FeatureItem;
