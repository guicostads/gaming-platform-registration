//button with the available plans

import "./PlanButton.css";
import { useContext } from "react";
import { PageContext } from "../context/context";

export const PlanButton = ({ img, plan, price, id, value }) => {
  const { handleActivePlan, activePlan, toggleValue } = useContext(PageContext);

  return (
    <div>
      <button
        className={activePlan === id ? "btn-active" : "btn-not-active"}
        id={id}
        onClick={handleActivePlan}
        value={value}
      >
        <img src={img} />
        <div className="descriptions">
          <h3>{plan}</h3>
          <span>{price}</span>
          {toggleValue && (
            <span style={{ color: "var(--marine-blue)", fontSize: ".9rem" }}>
              2 months free
            </span>
          )}
        </div>
      </button>
    </div>
  );
};
