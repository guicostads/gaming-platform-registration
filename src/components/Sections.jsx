//buttons for navigation

import React, { useState } from "react";
import "./Sections.css";
import { Link } from "react-router-dom";

const Sections = () => {
  const [activePage, setActivePage] = useState("");

  return (
    <div>
      <nav className="buttons">
        <Link to="/personalinfo">
          <button
            id="page1"
            onClick={(e) => setActivePage(e.target.id)}
            className={activePage === "page1" ? "active-page" : ""}
          >
            1
          </button>
        </Link>
        <Link to="/plans">
          <button
            id="page2"
            onClick={(e) => setActivePage(e.target.id)}
            className={activePage === "page2" ? "active-page" : ""}
          >
            2
          </button>
        </Link>
        <Link to="/addons">
          <button
            id="page3"
            onClick={(e) => setActivePage(e.target.id)}
            className={activePage === "page3" ? "active-page" : ""}
          >
            3
          </button>
        </Link>
        <Link to="/finish">
          <button
            id="page4"
            onClick={(e) => setActivePage(e.target.id)}
            className={activePage === "page4" ? "active-page" : ""}
          >
            4
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Sections;
