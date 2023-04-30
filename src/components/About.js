import React from "react";
import "bulma/css/bulma.min.css";

function About({ backgroundImage }) {
  return (
    <div style={backgroundImage} className="card">
      <div className="hero is-fullheight-with-navbar">
        <div className="card-content">
          <div className="content">
            Hi and welcome! I'm glad you're here. I am a lifelong learner of
            people, music, a constant stream of new interests, and now coding!
            In college, I studied music education, special education, and
            religion, and ultimately pursued a path to a degree in music. After
            college, I was a teacher, then a birth doula. Now, I'm excited about
            expanding my learning with coding. Thanks for visiting!
            <br />
            <time dateTime="2016-1-1"></time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
