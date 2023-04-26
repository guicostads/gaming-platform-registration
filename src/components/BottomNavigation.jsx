//footer buttons for navigation
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/context";
import "./BottomNavigation.css";

export const BottomNavigation = () => {
  const { handlePrevClick, handleNextClick, path, activePlan } =
    useContext(PageContext);

  return (
    <footer className={path === "/thanks" ? "hidden" : "container"}>
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
      {path === "/finish" && activePlan && (
        <Link to="/thanks">
          <button type="button" className="confirm-btn">
            Confirm
          </button>
        </Link>
      )}
    </footer>
  );
};
