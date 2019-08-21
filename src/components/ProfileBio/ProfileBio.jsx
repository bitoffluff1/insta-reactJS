import './ProfileBio.scss';

import React, {Component} from 'react';

export class ProfileBio extends Component {
    render() {
        return (
            <div className="profile-bio">
                <p><span className="profile-real-name">Jane Doe</span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    📷✈️🏕️</p>
            </div>
        );
    }
}