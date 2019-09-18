import React from 'react';
import Popup from '../Popup';

import './Avatar.css';
import userAvatar from './images/userAvatar.png'


class Avatar extends React.Component {
    state = {
        isOpen: false
    }

    handleAvatarClick = () => this.setState({ isOpen: true })
    handlePopupClose = () => this.setState({ isOpen: false })

    render() {

        return (
            <div className='avatar'>
                <button className="button" onClick={this.handleAvatarClick}><img className='avatar__background' src={userAvatar} alt={"userAvatar"} width='48px' height='52px' /></button>
                <Popup onClose={this.handlePopupClose} open={this.state.isOpen} />
            </div>
        )
    }
}

export default Avatar;
