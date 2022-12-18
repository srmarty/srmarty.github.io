import React from 'react';
import '../style.css'
import profilePicture from './profile.png';

export default class AboutMeView extends React.Component {
    render() {
        return (
            <div>
                <div className="profile-container">
                    <img className="profile" src={profilePicture} alt="gyoshuku"></img>
                </div>
                <h1 className="name">gyoshuku</h1>
            </div>
        );
    }
}