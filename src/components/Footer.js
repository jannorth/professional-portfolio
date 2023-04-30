import React from "react";
// import Colors from "../colors";
import "bulma/css/bulma.min.css";
import { FaLinkedin } from "react-icons/fa";

function Footer({ backgroundImage }) {
    const linkedinURL = "https://www.linkedin.com/in/janna-fuentes-138242274/";
  
    return (
      <div style={backgroundImage}>
        <h2> Thanks for visiting! </h2>
        <ul>
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
export default Footer;
