import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../style.css'


function SidebarView(props) {
    const history = useHistory();
    
    const goToAboutMe = () =>  {
        history.push("/about-me");
    }
    
    
    return (
        <div className="sidebar">
            <Link className="aboutme" to="/about-me">About Me</Link>
            <Link className="other" to="/resume">Resume</Link>
            <Link className="other" to="/portfolio">Portfolio</Link>
            <div></div>
        </div>
    );
    
}

export default SidebarView;