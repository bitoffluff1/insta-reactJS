import './Gallery.scss';

import React, {Component, Fragment} from 'react';

import {ImageBox} from "../ImageBox";
import {Loading} from "../Loading";


export class Gallery extends Component {
    state = {
        pictures: [],
        page: 1,
        limit: 6,
        inProgress: false
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
        const {page, limit, inProgress} = this.state;
        const {token} = this.props;

        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (windowHeight + scrollTop >= documentHeight && !inProgress) {
            this.setState({inProgress: true});

            fetch(`http://localhost:8888/api/photos?page=${page + 1}&limit=${limit}`, {
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${token}`,
                }
            })
                .then(response => response.json())
                .then(data => {
                    let newPictures = data.photos.map(photo => ({
                        image: photo.image,
                        likes: photo.likes.length,
                        comments: photo.comments.length
                    }));

                    this.setState(prevState => {
                        return {
                            pictures: prevState.pictures.concat(newPictures),
                            page: prevState.page + 1,
                            inProgress: false,
                        }
                    });
                });
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
