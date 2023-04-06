import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/context";
import "./SwicthPagesTab.css";

export const SwitchPagesTab = () => {
  const page = useLocation();
  const path = page.pathname;
  const { handlePrevClick, handleNextClick } = useContext(PageContext);

  return (
    <footer className="container">
      <button
        type="button"
        className={
          path === "/page1" || path === "/" ? "go-back-hidden" : "go-back-btn"
        }
        onClick={handlePrevClick}
      >
        Go Back
      </button>

      {path !== "/page4" && (
        <button
          type="button"
          className="next-step-btn"
          onClick={handleNextClick}
        >
          Next step
        </button>
      )}
    </footer>
  );
};
