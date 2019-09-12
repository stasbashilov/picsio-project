import React from 'react';

import './RecipientAvatar.css';

const RecipientAvatar = (props) => (
    <div className='recipient-avatar'>{props.userData.img()}</div>
)


export default RecipientAvatar;