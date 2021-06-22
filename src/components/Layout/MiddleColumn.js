import React from "react";

import styles from "./MiddleColumn.module.css";
import Meals from "../Meals/Meals";

const MiddleColumn = () => {
  return (
    <div className={styles.middle}>
      <Meals />
    </div>
  );
};

export default MiddleColumn;
