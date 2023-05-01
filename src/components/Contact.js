import React, { useState } from 'react';
import "bulma/css/bulma.min.css";
import Colors from '../colors';

function Contact() {
  const [nameFilled, setNameFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [messageFilled, setMessageFilled] = useState(false);

  const handleNameBlur = (event) => {
    setNameFilled(event.target.value !== '');
  }

  const handleEmailBlur = (event) => {
    setEmailFilled(event.target.value !== '');
  }

  const handleMessageBlur = (event) => {
    setMessageFilled(event.target.value !== '');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div>
      <h2 style={{ color: Colors.tertiaryColor, backgroundColor: Colors.primaryColor }}>This is the Contact Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Your name"
              onBlur={handleNameBlur}
            />
            {!nameFilled && (
              <p className="help is-danger">Name is required</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Your email address"
              onBlur={handleEmailBlur}
            />
            {!emailFilled && (
              <p className="help is-danger">Email is required</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Your message"
              onBlur={handleMessageBlur}
            ></textarea>
            {!messageFilled && (
              <p className="help is-danger">Message is required</p>
            )}
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact;