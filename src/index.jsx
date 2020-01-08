import './assets/global.scss';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import {Profile} from 'components/Profile';
import {GalleryContainer} from 'containers/GalleryContainer';
import {Auth} from 'components/Auth';
import {Modal} from 'components/Modal';

import {Counter} from 'components/Counter';
import {Timer} from 'components/Timer';

class App extends Component {
    state = {
        visible: false,
        token: null,
        isModalVisible: false,
    };

    handleToggleClick = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    };

    handleSuccess = (token) => {
        this.setState({token});
    };

    handleSignOut = (event) => {
        event.preventDefault();

        this.setState({token: ''});
    };

    handleModalClose = () => {
        this.setState({
            isModalVisible: false,
        });
    };

    render() {
        const {visible, token, isModalVisible} = this.state;

        return (
            <Fragment>
                {!token && <Auth onSuccess={this.handleSuccess}/>}

                <button onClick={this.handleToggleClick}>Toggle</button>
                {visible && <Timer/>}
                <Counter/>

                {token && <div>
                    <button onClick={this.handleSignOut}>Sign Out</button>

                    <header>
                        <div className="container">
                            <Profile/>
                        </div>
                    </header>
                    <main>
                        <div className="container">
                            <GalleryContainer token={token}/>
                        </div>
                    </main>
                    {isModalVisible && <Modal title='It is modal' visible onClose={this.handleModalClose}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda cumque
                            debitis dolor dolorum id repellat similique suscipit ullam voluptatem? Ab amet animi atque
                            praesentium quas reiciendis sit ullam voluptate.
                        </div>
                    </Modal>}
                </div>}
            </Fragment>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
