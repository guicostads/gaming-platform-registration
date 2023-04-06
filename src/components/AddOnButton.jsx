import React from "react";
import "./AddOnButton.css";

export const AddOnButton = ({ bonus, description }) => {
  return (
    <button className="addon-btn">
      <input type="checkbox"></input>
      <h3>{bonus} </h3>
      <span>{description}</span>
    </button>
  );
};
