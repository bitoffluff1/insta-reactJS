import './ProfileUserSettings.scss';

import React, {Component} from 'react';

export class ProfileUserSettings extends Component {

    render() {
        let { email } = this.props;
        if (email) {
            email = (email.split('@'))[0];
        }

        return (
            <div className="profile-user-settings">
                <h1 className="profile-user-name">{email}</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings">
                    <i className="fas fa-cog" aria-hidden="true"/>
                </button>
            </div>
        );
    }
}