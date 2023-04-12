import "./PlanButton.css";
import { useContext } from "react";
import { PageContext } from "../context/context";

export const PlanButton = ({ img, plan, price, id }) => {
  const { handleActive, active, toggleValue } = useContext(PageContext);

  return (
    <div>
      <button
        className={active === id ? "btn-active" : "btn-not-active"}
        id={id}
        onClick={handleActive}
      >
        <img src={img}></img>
        <div onClick={handleActive} className="descriptions">
          <h3>{plan}</h3>
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
