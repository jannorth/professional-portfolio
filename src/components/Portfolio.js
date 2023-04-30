import React from 'react';
import Project from './Project';
// import Colors from '../colors';
import "bulma/css/bulma.min.css";


function Portfolio({ backgroundImage }){
    return (
        <div style={ backgroundImage }>
            <Project></Project>

        </div>
    )
}
export default Portfolio;