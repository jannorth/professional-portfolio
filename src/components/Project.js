import React from "react";
import projectOne from "../images/random-restaurant-generator.jpg";
import projectTwo from "../images/DevConnect.jpg";
import projectThree from "../images/weather-app.jpg";
import Colors from "../colors";
import "bulma/css/bulma.min.css";

function Project() {
  return (
    <div className={`container ${Colors.primaryColor}`}>
      <h2 className={`title ${Colors.tertiaryColor}`}>Projects</h2>
      <div className="columns">
        <div className="column">
          <div className={`card ${Colors.secondaryColor}`}>
            <div className="card-content">
              <h5 className="title is-5">Food Finder</h5>
              <p className={`subtitle is-6 ${Colors.tertiaryColor}`}>
                A web application that suggests a random restaurant based on the
                user's location and cuisine preference.
              </p>
              <div className="card-image">
                <img src={projectOne} alt="Food Finder" />
              </div>
              <button
                className={`button is-link ${Colors.tertiaryColor}`}
                onClick={() =>
                  (window.location.href =
                    "https://achogue.github.io/random-restaurant-generator/")
                }
              >
                Try it Out!
              </button>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={`card ${Colors.secondaryColor}`}>
            <div className="card-content">
              <h5 className="title is-5">DevConnect</h5>
              <p className={`subtitle is-6 ${Colors.tertiaryColor}`}>
                Developing Growth. Remote Listings. Friendly Feedback.
              </p>
              <div className="card-image">
                <img src={projectTwo} alt="DevConnect" />
              </div>
              <button
                className={`button is-link ${Colors.tertiaryColor}`}
                onClick={() =>
                  (window.location.href =
                    "https://github.com/jannorth/DevConnect")
                }
              >
                Try it Out!
              </button>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={`card ${Colors.secondaryColor}`}>
            <div className="card-content">
              <h5 className="title is-5">Weather App</h5>
              <p className={`subtitle is-6 ${Colors.tertiaryColor}`}>
                A web application that displays the current weather and forecast
                for a given location.
              </p>
              <div className="card-image">
                <img src={projectThree} alt="Weather App" />
              </div>
              <button
                className={`button is-link ${Colors.tertiaryColor}`}
                onClick={() =>
                  (window.location.href = "https://jannorth.github.io/weather-app/")
                }
              >
                Try it Out!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;