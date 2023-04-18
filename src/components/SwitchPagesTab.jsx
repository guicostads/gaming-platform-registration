//footer buttons for navigation

import { useContext } from "react";
import { PageContext } from "../context/context";
import "./SwitchPagesTab.css";

export const SwitchPagesTab = () => {
  const { path } = useContext(PageContext);

  const { handlePrevClick, handleNextClick } = useContext(PageContext);

  return (
    <footer className="container">
      <button
        type="button"
        className={
          path === "/personalinfo" || path === "/"
            ? "go-back-hidden"
            : "go-back-btn"
        }
        onClick={handlePrevClick}
      >
        Go Back
      </button>

      {path !== "/finish" && (
        <button
          type="button"
          className="next-step-btn"
          onClick={handleNextClick}
        >
          Next step
        </button>
      )}
      {path === "/finish" && (
        <button type="button" className="confirm-btn">
          Confirm
        </button>
      )}
    </footer>
  );
};
