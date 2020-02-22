import './ProfileImage.scss';

import React, {Component} from 'react';

export class ProfileImage extends Component {
    render() {
        const { avatar } = this.props;
        return (
            <div className="profile-image">
                <img src={avatar}
                     alt="avatar"/>
            </div>
        );
    }
}