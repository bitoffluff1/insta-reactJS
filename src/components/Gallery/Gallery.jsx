import './Gallery.scss';

import React, {Component, Fragment} from 'react';

import {ImageBox} from "../ImageBox";
import {Loading} from "../Loading";


export class Gallery extends Component {
    state = {
        pictures: [],
        page: 1,
        limit: 6
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        const {token} = this.props;
        const {page, limit} = this.state;


        fetch(`http://localhost:8888/api/photos?page=${page}&limit=${limit}`, {
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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {page, limit} = this.state;
        const {token} = this.props;

        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
            fetch(`http://localhost:8888/api/photos?page=${page + 1}&limit=${limit + 6}`, {
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
                        })),
                        page: page + 1,
                        limit: limit + 6,
                    })
                })
        }
    };

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