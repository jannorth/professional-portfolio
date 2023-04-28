import React from "react";
import portfolioPic from "../images/Portfolio.jpg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={portfolioPic} alt="Janna" />
          </figure>
        </div>
      </div>
      <div className="media-content">
        <p className="title is-4">Janna Fuentes</p>
        <p className="subtitle is-6">
          <a href="https://github.com/jannorth">@jannorth</a>
        </p>
      </div>
      <ul>
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
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
