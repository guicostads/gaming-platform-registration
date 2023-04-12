import React, { useContext } from "react";
import "./AddOnButton.css";
import { PageContext } from "../context/context";

export const AddOnButton = ({ bonus, description, price }) => {
  const { isChecked, handleChange } = useContext(PageContext);
  return (
    <button className={isChecked ? 'checked' : 'not-checked'}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div>
        <h3> {bonus} </h3>
        <span>{description}</span>
      </div>
      <span>{price}</span>
    </button>
  );
};
