import './Post.scss';

import React, { Fragment } from 'react';

import { Modal } from '../Modal';

export function Post(props) {
    const { picture, owner, onClose } = props;

    const renderModal = () => {
        return (
            <div className="modal__content">
                <div className="modal__image">
                    <img className="modal__image" src={picture}
                         alt="avatar"/>
                </div>
                <div className="modal__description">
                    <div className="modal__main-section">
                        <header className="avatar-block avatar-block_header">
                            <img className="avatar" src={owner.avatar} alt=""/>
                            <div className="avatar-block__text">
                                <p className="text text_header">{owner.lastName}</p>
                                <p className="text text_header">{owner.firstName}</p>
                            </div>
                        </header>
                        <ul className="modal__comments-list">
                            <li className="avatar-block">
                                <img className="avatar" src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
                                <div className="avatar-block__text">
                                    <p className="text">
                                        <span className="text text_header text_margin">lastName</span>
                                        this.state.owner.firstName
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="modal__footer">
                        <div className="modal__control">
                            <div className="modal__control_left">
                                <i className="far fa-heart" />
                                <i className="far fa-comment" />
                                <i className="far fa-paper-plane" />
                            </div>
                            <i className="far fa-bookmark" />
                        </div>
                        <div className="likes padding-w padding-h">
                            <p className="text">Нравится 15</p>
                        </div>
                        <div className="date padding-w padding-h">
                            <p className="text text_secondary">12 ОКТЯБРЯ 2019 Г</p>
                        </div>
                        <form className="modal__form-comment padding-w">
                            <input className="comment__input" type="text" placeholder="Добавьте комментарий"/>
                            <button className="comment__button" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <Fragment>
            <Modal renderModal={renderModal} onClose={onClose} />
        </Fragment>
    );
}
