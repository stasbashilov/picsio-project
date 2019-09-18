import React from 'react';

import './Button.css';

const Button = (props) => {
    const className = `${props.search ? 'search-button' : props.large ? 'add-button add-button--lg' : 'add-button'} `;

    return (
        <div className={className}>
        </div>
    )
}

export default Button;
