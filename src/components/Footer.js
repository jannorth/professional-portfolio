import React from "react";
import { MdEmail } from "react-icons/md";
import "bulma/css/bulma.min.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer({ backgroundImage }) {
  const email = "";
  const emailSubject = "Regarding your portfolio";
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  const linkedinURL = "https://www.linkedin.com/in/janna-fuentes-138242274/";

  return (
    <div style={backgroundImage}>
      <h2>Thanks for visiting!</h2>
      <div className="level">
        <ul className="level-item has-text-centered">
          <li>
            <a href="https://github.com/jannorth">
              <FaGithub size={16} />
            </a>
          </li>
          <li>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <FaLinkedin />
              </span>
            </a>
          </li>
          <li>
            <a href={emailLink}>
              <span className="icon" onClick={(e) => e.stopPropagation()}>
                <MdEmail />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
