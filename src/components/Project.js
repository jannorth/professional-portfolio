import React from 'react';
import projectOne from '../images/random-restaurant-generator.jpg';
import { Colors } from '../colors';

function Project() {
  const primaryColor = Colors.primaryColor;

  return (
    <div>
      <h2 className="title">Projects</h2>
      <div className="card" style={{ backgroundColor: `${primaryColor}` }}>
        <div className="card-image">
          <figure className="image">
            <img src={projectOne} alt="colorful plates" />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="title is-5">Card title</h5>
          <p className="subtitle is-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="button is-primary" onClick={() => window.location.href = "#"}>Go somewhere</button>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h5 className="title is-5">Special title treatment</h5>
              <p className="subtitle is-6">With supporting text below as a natural lead-in to additional content.</p>
              <button className="button is-primary" onClick={() => window.location.href = "#"}>Go somewhere</button>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h5 className="title is-5">Special title treatment</h5>
              <p className="subtitle is-6">With supporting text below as a natural lead-in to additional content.</p>
              <button className="button is-link" onClick={() => window.location.href = "/About"}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;