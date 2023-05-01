import React from "react";
import { Link } from "react-router-dom";
// import Colors from "../colors";
import "bulma/css/bulma.min.css";

function Nav() {
  return (
    <div>
      <ul className="is-flex-end is-justify-content-space-between">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
