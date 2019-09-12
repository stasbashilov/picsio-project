import React from 'react';

import CustomDatePicker from '../DatePicker';
import BalanceCard from '../BalanceCard';
import data from './dataSource';

import './CardList.css';

const CardList = () => (
    <div className='card-list'>
        <div className='card-list__header'>
            <div className='card-list__title'>Balances</div>
            <CustomDatePicker />
        </div>
        <div className='card-list__items'>
            {data.map((cardData, index) => {
                return <BalanceCard key={index} cardData={cardData} />
            })}
        </div>
    </div>)

export default CardList;