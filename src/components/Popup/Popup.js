import React from 'react';

import './Popup.css';

export default class Popup extends React.Component {

    stopPropagation = (e) => e.stopPropagation()

    render() {

        return this.props.open ? (
            <div className='overlay' onClick={ this.props.onClose}>
                <div className='popup__content' onClick={this.stopPropagation}>
                   Modal content
                </div>
            </div>) : null
    }
}
