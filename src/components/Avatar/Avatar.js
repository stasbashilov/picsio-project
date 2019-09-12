import React from 'react';

import './Avatar.css';
import userAvatar from './images/userAvatar.png'

class Avatar extends React.Component {

    render () {

        return (
            <div className='avatar'>
                <img className='avatar__background' src={userAvatar} alt={"userAvatar"} width='48px' height='52px'/> 
            </div>
        )
    }
}

export default Avatar;