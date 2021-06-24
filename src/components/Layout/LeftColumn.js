import React from "react";
import Hotels from "../../Hotels/Hotels";
import styles from "./LeftColumn.module.css";

const dummyfunc = ()=>{
  return;
}

const LeftColumn = () => {
  return (
    <div className={styles.left}>
      <Hotels onClick={dummyfunc}/>
    </div>
  );
};

export default LeftColumn;
