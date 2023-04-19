//button with the available plans

import "./PlanButton.css";
import { useContext } from "react";
import { PageContext } from "../context/context";

export const PlanButton = ({ img, plan, price, id, value }) => {
  const { handleActivePlan, active, toggleValue } = useContext(PageContext);

  return (
    <div>
      <button
        className={active === id ? "btn-active" : "btn-not-active"}
        id={id}
        onClick={handleActivePlan}
        value={value}
      >
        <img src={img}></img>
        <div className="descriptions" onClick={handleActivePlan}>
          <h3 id={id} onClick={handleActivePlan}>
            {plan}
          </h3>
          <span>{price}</span>
          {toggleValue && (
            <span style={{ color: "var(--marine-blue)", fontSize: ".80rem" }}>
              2 months free
            </span>
          )}
        </div>
      </button>
    </div>
  );
};
