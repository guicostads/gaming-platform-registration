import "./Button.css";
import { useContext } from "react";
import { PageContext } from "../context/context";

export const Button = ({ img, plan, price, id }) => {
  const { handleActive, active } = useContext(PageContext);

  return (
    <div>
      <button
        className={active === id ? "btn-active" : "btn-not-active"}
        id={id}
        onClick={handleActive}
      >
        <img src={img}></img>
        <div onClick={handleActive}>
          <h3>{plan}</h3>
          {price}
        </div>
      </button>
    </div>
  );
};
