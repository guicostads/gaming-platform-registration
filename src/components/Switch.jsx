import React, { useContext, useState } from "react";
import "./Switch.css";
import { PageContext } from "../context/context";

export const Switch = () => {
  const { toggleValue, handleToggle } = useContext(PageContext);

  return (
    <div className="switch-box">
      <span>Yearly</span>
      <label className="switch">
        <input type="checkbox" checked={toggleValue} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span>monthly</span>
    </div>
  );
};
