import './Gallery.scss';

import React, {Component, Fragment} from 'react';

import {ImageBox} from "../ImageBox";
import {Loading} from "../Loading";


export class Gallery extends Component {
    state = {pictures: []};

    componentDidMount() {
        const {token} = this.props;

        fetch("http://localhost:8888/api/photos", {
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pictures: data.photos.map(photo => ({
                        image: photo.image,
                        likes: photo.likes.length,
                        comments: photo.comments.length
                    }))
                })
            })
    }

    render() {
        const {pictures} = this.state;

        return (
            <Fragment>
                {pictures.length === 0 && <Loading/>}
                {pictures.length > 0 && <div className="gallery">
                    {pictures.map((picture, idx) => <ImageBox key={idx} {...picture}/>)}
                </div>}
            </Fragment>
        );
    }
}