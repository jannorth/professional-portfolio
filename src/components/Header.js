import React from "react";
import Nav from "./Nav";
import portfolioPic from "../images/Portfolio.jpg";
import { FaGithub } from "react-icons/fa";
import "bulma/css/bulma.min.css";

function Header({ backgroundImage }) {
  return (
    <div style={backgroundImage}>
      <div style={{ padding: "3rem" }}>
        <div className="columns is-vcentered">
          <div className="column is-narrow">
            <figure className="image is-128x128">
              <img
                src={portfolioPic}
                alt="Janna"
                style={{
                  borderRadius: "50%",
                  border: "1px solid",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  width: "128px",
                  height: "128px",
                }}
              />
            </figure>
          </div>
          <div className="column is-flex is-flex-direction-column mt-10">
            <p className="title is-4 is-align-self-flex-start mb-0">
              Janna Fuentes
            </p>
            <p className="subtitle is-6 is-align-self-flex-start mt-0 mb-0">
              <a href="https://github.com/jannorth">
                <FaGithub size={16} /> @jannorth
              </a>
            </p>
          </div>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
