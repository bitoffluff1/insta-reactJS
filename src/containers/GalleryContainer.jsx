import React, { Component, Fragment } from 'react';

import { Gallery } from "components/Gallery";
import { Loading } from "components/Loading";

export class GalleryContainer extends Component {
    state = {
        pictures: [],
        page: 1,
        limit: 6,
        loading: false,
        total: null,
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        const {token} = this.props;
        const {page, limit} = this.state;

        this.setState({ loading: true });

        fetch(`http://localhost:8888/api/photos?page=${page}&limit=${limit}`, {
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    pictures: prevState.pictures.concat(
                        data.photos.map(photo => ({
                            id: photo._id,
                            image: photo.image,
                            likes: photo.likes.length,
                            comments: photo.comments.length
                        }))
                    ),
                    page: prevState.page + 1,
                    loading: false,
                    total: data.total,
                }));
            })
            .catch(() => {
                this.setState({ loading: false });
            })
    };

    shouldWeLoad = () => {
        const { total, pictures, loading } = this.state;

        return (total != null || total > pictures.length) && !loading;
    };

    handleScroll = () => {
        if (this.shouldWeLoad()) {
            this.loadItems();
        }
    };

    render() {
        const { loading, pictures } = this.state;

        return (
            <Fragment>
                {pictures.length > 0 && <Gallery onScroll={this.handleScroll} pictures={ pictures }/>}
                {loading && <Loading />}
            </Fragment>
        );
    }
}
