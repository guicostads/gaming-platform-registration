//buttons for navigation

import React from "react";
import "./Sections.css";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <div>
      <nav className="buttons">
        <Link to="/personalinfo">
          <button>1</button>
        </Link>
        <Link to="/plans">
          <button>2</button>
        </Link>
        <Link to="/addons">
          <button>3</button>
        </Link>
        <Link to="/finish">
          <button>4</button>
        </Link>
      </nav>
    </div>
  );
};

export default Sections;
