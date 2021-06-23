import React from "react";
import toggleoff from "../../../assets/vegOnly/toggle.svg";
const ToggleOff = (props) => {
  return (
    <span className={`${props.className}`}>
      <img src={toggleoff} alt="toggle-off" width="50px" height="50px" />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#d9d9d9"
        className="bi bi-toggle-off"
        viewBox="0 0 16 16"
      >
        <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
      </svg> */}
    </span>
  );
};

export default ToggleOff;
