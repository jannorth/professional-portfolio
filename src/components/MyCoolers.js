import React from "react";
const primaryColor = "#C2D6C6";
const secondaryColor = "#474A48";
const tertiaryColor = "#2C302E";
const quaternaryColor = "#909590";

function MyCoolers() {
  return (
    <div style={{ backgroundColor: primaryColor, color: secondaryColor, borderColor: tertiaryColor, borderWidth: '1px', borderStyle: 'solid', outlineColor: quaternaryColor }}></div>
  );
}

export default MyCoolers;