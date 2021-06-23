import React, { useState } from "react";
import styles from "./VegOnly.module.css";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";
import { useDispatch } from "react-redux";
import { vegonlyActions } from "../../../Store/vegonly-slice";

const VegOnly = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIsChecked(!isChecked);
    dispatch(vegonlyActions.changeType());
  };

  return (
    <div className={styles["wrapper"]}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleChange}
      />
      {!isChecked ? (
        <ToggleOff className={styles.toggleoff} />
      ) : (
        <ToggleOn className={styles.toggleon} />
      )}
    </div>
  );
};

export default VegOnly;
