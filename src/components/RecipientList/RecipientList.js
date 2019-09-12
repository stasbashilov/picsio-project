import React from 'react';

import RecipientAvatar from '../RecipientAvatar';
import Button from '../Button';
import data from './dataSource';

import './RecipientList.css';

const RecipientList = () => (
    <div className='recipients'>
        <div className='recipients__header'>Send money to</div>
        <div className='recipients__list'>
            <Button large={true} />
            {data.map((userData, index) => {
                return <RecipientAvatar key={index} userData={userData} />
            })}
        </div>
    </div>
)


export default RecipientList;