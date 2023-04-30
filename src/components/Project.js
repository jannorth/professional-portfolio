import React from "react";
import projectOne from "../images/random-restaurant-generator.jpg";
import projectTwo from "../images/DevConnect.jpg";
import projectThree from "../images/weather-app.jpg";
import projectFour from "../images/README tutorial.png";
import projectFive from "../images/password generator.png";
import projectSix from "../images/scheduler.png";
import "bulma/css/bulma.min.css";

function Project({ backgroundImage }) {
  return (
    <div style={backgroundImage}>
      <h2 className={`title`}>Projects</h2>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card-image" style={backgroundImage}>
              <img src={projectOne} alt="Food Finder" />
            </div>
            <div
              className="card-content is-flex is-justify-content-center"
              style={backgroundImage}
            >
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle has-text-centered has-text-grey-lighter">
                  <p className="subtitle is-7">
                    A web application that suggests a random restaurant based on
                    the user's location and cuisine preference.
                  </p>
                  <button
                    className="button is-link"
                    onClick={() =>
                      (window.location.href =
                        "https://achogue.github.io/random-restaurant-generator/")
                    }
                  >
                    Food Finder
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card-image" style={ backgroundImage }>
              <img src={projectTwo} alt="DevConnect" />
            </div>
            <div
              className="card-content is-flex is-justify-content-center"
              style={ backgroundImage }
            >
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle has-text-centered has-text-grey-lighter">
                  <p className="subtitle is-7">
                    Developing Growth. Remote Listings. Friendly Feedback.
                  </p>
                  <button
                    className="button is-link"
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/jannorth/DevConnect")
                    }
                  >
                    DevConnect
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card-image" style={ backgroundImage }>
              <img src={projectThree} alt="Weather App" />
            </div>
            <div
              className="card-content is-flex is-justify-content-center"
              style={ backgroundImage }
            >
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle has-text-centered has-text-grey-lighter">
                  <p className="subtitle is-7">
                    A web application that displays the current weather and
                    forecast for a given location.
                  </p>
                  <button
                    className="button is-link"
                    onClick={() =>
                      (window.location.href =
                        "https://jannorth.github.io/weather-app/")
                    }
                  >
                    Weather App
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-image" style={ backgroundImage }>
              <img src={projectFour} alt="README toturial" />
            </div>
            <div
              className="card-content is-flex is-justify-content-center"
              style={ backgroundImage }
            >
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle has-text-centered has-text-grey-lighter">
                  <p className="subtitle is-7">
                    A tutorial on how to create a professional REAMDE.md
                  </p>
                  <button
                    className="button is-link"
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/jannorth/professional-readme-tutorial")
                    }
                  >
                    README tutorial
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-image" style={ backgroundImage }>
              <img src={projectFive} alt="password generator" />
            </div>
            <div
              className="card-content is-flex is-justify-content-center"
              style={ backgroundImage }
            >
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle has-text-centered has-text-grey-lighter">
                  <p className="subtitle is-7">
                    An app that generates a random password.
                  </p>
                  <button
                    className="button is-link"
                    onClick={() =>
                      (window.location.href =
                        "https://jannorth.github.io/Password-Generator/")
                    }
                  >
                    Password Generator
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-image" style={ backgroundImage }>
              <img src={projectSix} alt="hourly scheduler" />
            </div>
            <div
              className="card-content is-flex is-justify-content-center"
              style={ backgroundImage }
            >
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle has-text-centered has-text-grey-lighter">
                  <p className="subtitle is-7">
                    An hourly scheduler helps you plan your day!
                  </p>
                  <button
                    className="button is-link"
                    onClick={() =>
                      (window.location.href =
                        "https://jannorth.github.io/hourly-planner/")
                    }
                  >
                    Hourly Sscheduler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
