//footer buttons for navigation
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/context";
import "./BottomNavigation.css";

export const BottomNavigation = () => {
  const { path, activePlan, formState } = useContext(PageContext);
  const navigate = useNavigate();

  //previous page on 'go back' btn
  const handlePrevClick = () => {
    switch (path) {
      case "/finish":
        navigate("/addons");
        break;
      case "/addons":
        navigate("/plans");
        break;
      case "/plans":
        navigate("/personalinfo");
        break;
    }
  };

  //next page on 'next step' btn
  const handleNextClick = () => {
    switch (path) {
      case "/personalinfo":
        navigate("/plans");
        break;
      case "/plans":
        navigate("/addons");
        break;
      case "/addons":
        navigate("/finish");
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
      {path === "/finish" &&
        activePlan &&
        formState.usernameError === false &&
        formState.emailError === false &&
        formState.phoneError === false && (
          <Link to="/thanks">
            <button type="button" className="confirm-btn">
              Confirm
            </button>
          </Link>
        )}
    </footer>
  );
};
