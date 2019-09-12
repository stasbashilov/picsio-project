import React from 'react';

import Avatar from '../Avatar';
import Button from '../Button';
import NotificationButton from '../NotificationButton';

import './Topbar.css';

const Topbar = () => (
    <div className='topbar'>
        <div className='topbar__title'>Overview</div>
        <div className='topbar__buttons'>
            <Button />
            <Button search={true} />
            <NotificationButton />
            <Avatar />
        </div>
    </div>
);


export default Topbar;