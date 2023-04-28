import React from 'react';
import Nav from './Nav';
import Colors from "../colors";
import "bulma/css/bulma.min.css";

function Header(){
    return (
        <div style={{ color: Colors.tertiaryColor, backgroundColor: Colors.primaryColor }}>
            <div>                   
                <Nav></Nav>
            </div>
        </div>
    )
}
export default Header;