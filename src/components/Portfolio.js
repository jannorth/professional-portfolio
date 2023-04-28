import React from 'react';
import Project from './Project';
import Colors from '../colors';
import "bulma/css/bulma.min.css";


function Portfolio(){
    return (
        <div style={{ color: Colors.tertiaryColor, backgroundColor: Colors.primaryColor }}>
            <h2>Portfolio</h2>
            <Project></Project>

        </div>
    )
}
export default Portfolio;