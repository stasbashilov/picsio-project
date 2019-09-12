import React from 'react';

import menuItems from './menuItems';

import './Sidebar.css';

const Sidebar = (props) => (
    <div className={`sidebar ${props.activeClass}`}>
        <div className='sidebar__logo'>
            <div className='logo__icon-holder'></div>
            <div className='logo__text'>
                <span>wallet</span>
                <span>.on</span>
            </div>
        </div>
        <div className='sidebar__list'>
            {menuItems.map((item, index) => {
                return <div key={index} className={`sidebar__item ${index===0 ? 'active' : ''}`}>
                    <div className={item.classname}>{item.icon()}</div>
                    <div>{item.name}</div>
                </div>
            })}
        </div>
        <div className='sidebar__help__wrapper'>
            <div className='sidebar__help'>
                <div className='help_icon'></div>
                <div>Help</div>
            </div>
            <div className='sidebar__exit'></div>
        </div>
    </div>
)

export default Sidebar;