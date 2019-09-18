import React from 'react';

import Avatar from '../Avatar';
import Button, {AddButton} from '../Button';

import NotificationButton from '../NotificationButton';

import './Topbar.css';

const Topbar = (props) => (
    <div className='topbar'>
        <div className='topbar__title'>Overview</div>
        <div className='topbar__buttons'>
            <AddButton onItemAdd={props.onItemAdd}/>
            <Button search={true} />
            <NotificationButton />
            <Avatar />
        </div>
    </div>
);

export default Topbar;
