import React from 'react';
import '../style.css'
import profilePicture from './profile.png';

export default class AboutMeView extends React.Component {
    render() {
        return (
            <div>
                <div className="profile-container">
                    <img className="profile" src={profilePicture} alt="Sarah Martin"></img>
                </div>
                <h1 className="name">Sarah R. Martin</h1>
            </div>
        );
    }
}