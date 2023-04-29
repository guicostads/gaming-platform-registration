//footer buttons for navigation
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PageContext } from "../context/context";
import "./BottomNavigation.css";

export const BottomNavigation = () => {
  const { path, activePlan, name, phone, email } = useContext(PageContext);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const paths = ["/personalinfo", "/plans", "/addons", "/finish"];
  const navigate = useNavigate();

  //previous page on 'go back' btn
  const handlePrevClick = () => {
    const prevIndex = (currentPathIndex - 1) % paths.length;
    setCurrentPathIndex(prevIndex);
    navigate(paths[prevIndex]);
  };

  //next page on 'next step' btn
  const handleNextClick = () => {
    if (!name || !phone || !email) {
      return;
    } else {
      const nextIndex = (currentPathIndex + 1) % paths.length;
      setCurrentPathIndex(nextIndex);
      navigate(paths[nextIndex]);
    }
  };

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
