import React from 'react';

import './Button.css';

export const AddButton = (props) => {
 
    return (
        <div className='add-button' onClick={props.onItemAdd}>
        </div>
    )
}
