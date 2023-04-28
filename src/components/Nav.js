import React from "react";
import portfolioPic from "../images/Portfolio.jpg";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const linkedinURL = "https://www.linkedin.com/in/janna-fuentes-138242274/";
  const email = "your-email@example.com"; // replace with your email address
  const emailSubject = "Regarding professional portfolio"; // customize the email subject as needed
  const emailBody = "Hello,"; // customize the email body as needed
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;
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
          <Link to="/Contact">
            <a href={emailLink}>
              <span className="icon">
                <MdEmail />
              </span>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
