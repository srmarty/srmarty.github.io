import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

export default class SidebarView extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Link className="aboutme" to="/about-me">ABOUT ME</Link>
                <Link className="other" to="/resume">RESUME</Link>
                <Link className="other" to="/portfolio">PORTFOLIO</Link>
                <div></div>
            </div>
        );
    }
}