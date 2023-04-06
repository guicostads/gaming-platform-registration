import React from "react";
import "./Sections.css";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <div>
      <nav className="buttons">
        <Link to="/page1">
          <button>1</button>
        </Link>
        <Link to="/page2">
          <button>2</button>
        </Link>
        <Link to="/page3">
          <button>3</button>
        </Link>
        <Link to="/page4">
          <button>4</button>
        </Link>
      </nav>
    </div>
  );
};

export default Sections;
