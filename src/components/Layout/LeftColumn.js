import React from "react";
import Hotels from "../../Hotels/Hotels";
import styles from "./LeftColumn.module.css";

const LeftColumn = () => {
  return (
    <div className={styles.left}>
      <Hotels />
    </div>
  );
};

export default LeftColumn;
