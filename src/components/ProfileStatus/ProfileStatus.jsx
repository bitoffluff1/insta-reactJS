import './ProfileStatus.scss';

import React, {Component} from 'react';

export class ProfileStatus extends Component {
    render() {
        return (
            <div className="profile-stats">
                <ul>
                    <li><span className="profile-stat-count">164</span> posts</li>
                    <li><span className="profile-stat-count">188</span> followers</li>
                    <li><span className="profile-stat-count">206</span> following</li>
                </ul>
            </div>
        );
    }
}