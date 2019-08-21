import './ProfileImage.scss';

import React, {Component} from 'react';

export class ProfileImage extends Component {
    render() {
        return (
            <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                     alt="avatar"></img>
            </div>
        );
    }
}