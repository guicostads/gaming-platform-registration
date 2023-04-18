//toggle switch inside the plan selection

import React, { useContext } from "react";
import "./Switch.css";
import { PageContext } from "../context/context";

export const Switch = () => {
  const { toggleValue, handleToggle } = useContext(PageContext);

  return (
    <div className="switch-box">
      <span className={!toggleValue ? "active-txt-color" : ""}>Monthly</span>
      <label className="switch">
        <input type="checkbox" checked={toggleValue} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className={toggleValue ? "active-txt-color" : ""}>Yearly</span>
    </div>
  );
};
