import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import GalleryContainer from '../../containers/GalleryContainer';
import PostContainer from 'containers/PostContainer';
import ProfileContainer from 'containers/ProfileContainer';

export class Main extends Component {

    render() {
        return (
            <div className="container">
                <Link to='/auth'>Sign Out</Link>

                <ProfileContainer />
                <GalleryContainer/>

                <Route path='/posts/:id' component={PostContainer} />
            </div>
        );
    }
}
