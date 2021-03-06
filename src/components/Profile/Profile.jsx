import './Profile.scss';

import React, { Component } from 'react';

import { ProfileImage } from '../ProfileImage';
import { ProfileUserSettings  } from '../ProfileUserSettings';
import { ProfileStatus } from '../ProfileStatus';
import { ProfileBio } from '../ProfileBio';

export class Profile extends Component {

    render() {
        const { firstName, lastName, avatar, bio, email } = this.props;

        return (
            <header className="profile">
                <ProfileImage avatar={avatar}/>
                <ProfileUserSettings email={email}/>
                <ProfileStatus/>
                <ProfileBio firstName={firstName} lastName={lastName} bio={bio}/>
            </header>
        );
    }
}