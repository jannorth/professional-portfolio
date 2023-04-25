import React from 'react';
import MyCoolers from './MyCoolers';
import { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } from '../colors';

function About(){
    return (
        <div style={{ backgroundColor: primaryColor, color: secondaryColor, borderColor: tertiaryColor, borderWidth: '1px', borderStyle: 'solid', outlineColor: quaternaryColor }}>
            <h2>This is the About Page</h2>
            <p>Here's some content for the About page.</p>
            <MyCoolers />
        </div>
    )
}

export default About;