import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

export default class SidebarView extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Link className="aboutme" to="/about-me">About Me</Link>
                <Link className="other" to="/resume">Resume</Link>
                <Link className="other" to="/portfolio">Portfolio</Link>
                <div></div>
            </div>
        );
    }
}