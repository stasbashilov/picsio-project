import React from 'react';

import './CardPlaceholder.css';

import debitcards from './images/debitcards.png';

const CardPlaceholder = () => (
    <div className='card-placeholder'>
        <div className='card-placeholder__title'>Debit cards</div>
        <img className='card-placeholder__background' src={debitcards} alt={"debitcards"} />
    </div>
)

export default CardPlaceholder;