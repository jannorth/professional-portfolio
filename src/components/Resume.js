import React, { useState } from "react";
import resumePDF from "../images/Resume.pdf";

function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  const handlePDFClick = () => {
    setShowPDF(true);
  };

  return (
    <div className="hero is-fullheight-with-navbar container is-flex is-align-items-center is-justify-content-center">
      {!showPDF ? (
        <button
          className="button is-rounded is-link is-large"
          onClick={handlePDFClick}
        >
          <span className="icon">
            <i className="fas fa-file-pdf"></i>
          </span>
          <span>Click to view or download Janna's Resume</span>
        </button>
      ) : (
        <object
          data={resumePDF}
          type="application/pdf"
          width="100%"
          height="800px"
        >
          <p>
            Your browser does not support PDFs. Please{" "}
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              click here to download the PDF file.
            </a>
          </p>
        </object>
      )}
    </div>
  );
}

export default Resume;