import React from "react";

import styles from "./RightColumn.module.css";
import Cart from "../Cart/Cart";

const RightColumn = () => {
  return (
    <div className={styles.right}>
      <Cart />
    </div>
  );
};

export default RightColumn;
