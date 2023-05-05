//buttons for navigation

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../context/context";
import "./TopNavigation.css";

const TopNavigation = () => {
  const { path } = useContext(PageContext);

  return (
    <div>
      <nav className="buttons">
        <Link to="/personalinfo">
          <button
            id="page1"
            className={path === "/personalinfo" ? "active-page" : ""}
          >
            1
          </button>
        </Link>
        <Link to="/plans">
          <button id="page2" className={path === "/plans" ? "active-page" : ""}>
            2
          </button>
        </Link>
        <Link to="/addons">
          <button
            id="page3"
            className={path === "/addons" ? "active-page" : ""}
          >
            3
          </button>
        </Link>
        <Link to="/finish">
          <button
            id="page4"
            className={path === "/finish" ? "active-page" : ""}
          >
            4
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default TopNavigation;
