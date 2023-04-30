import React from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import Colors from "../colors";
import "bulma/css/bulma.min.css";

function Nav() {
  const email = "";
  const emailSubject = "Regarding your portfolio";
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}`;
  return (
    <div >
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
          <a href={emailLink}>
            <span className="icon">
              <MdEmail />
            </span>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
