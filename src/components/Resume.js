import React, { useState } from 'react';
import resumePDF from '../images/Resume.pdf';

function Resume() {
const [showPDF, setShowPDF] = useState(false);

const handlePDFClick = () => {
setShowPDF(true);
};

return (
<div>
<h2>Resume</h2>
{!showPDF ? (
<button onClick={handlePDFClick}>
Click to view or download Janna's Resume
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