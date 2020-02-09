import './Profile.scss';

import React, {Component} from 'react';

import {ProfileImage} from '../ProfileImage';
import {ProfileUserSettings} from '../ProfileUserSettings';
import {ProfileStatus} from '../ProfileStatus';
import {ProfileBio} from '../ProfileBio';

export class Profile extends Component {
    render() {
        return (
            <header className="profile">
                <ProfileImage/>
                <ProfileUserSettings/>
                <ProfileStatus/>
                <ProfileBio/>
            </header>
        );
    }
}