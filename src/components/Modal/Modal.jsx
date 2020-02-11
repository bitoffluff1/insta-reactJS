import './Modal.scss';

import React, { Component, Fragment  } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
    constructor(props) {
        super(props);

        this.element = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    onClose = (event) => {
        const { onClose } = this.props;

        if(event.target.classList.contains('overlay')) {
            onClose();
        }
    };

    renderModalDefault = () => {
        const { children } = this.props;

        return (
            <Fragment>
                <div className="modal-body">
                    {children}
                </div>
            </Fragment>
        );
    };

    renderView = () => {
        const { renderModal } = this.props;

        return (
            <div className="overlay" onClick={this.onClose}>
                <div className="modal">
                    {renderModal ? renderModal() : this.renderModalDefault()}
                </div>
            </div>
        );
    };

    render() {
        return ReactDom.createPortal(
            this.renderView(),
            this.element,
        );
    }
}