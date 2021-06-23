import React from "react";

const ToggleOn = (props) => {
  return (
    <span className={`${props.className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#146eb4"
        className="bi bi-toggle-on"
        viewBox="0 0 16 16"
      >
        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      </svg>
    </span>
  );
};

export default ToggleOn;
