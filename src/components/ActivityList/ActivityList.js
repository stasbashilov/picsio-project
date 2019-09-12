import React from 'react';

import './ActivityList.css';

import { data, images } from './data';

class ActivityList extends React.Component {
    state = {
        activities: []
    }

    // вызовется один раз после монтирования копонента
    componentDidMount() {
        this.setState({ activities: data })
    }

    handleGetItems = () => {
        fetch("http://www.mocky.io/v2/5d7947af320000181134e977").then(res => {
            return res.json()
        }).then(result => {
            // каждый раз когда вызывается сетстейт происходит повторный рендер компонента
            this.setState({ activities: [...this.state.activities, ...result] })
        }).catch(err => console.log(err))
    }

    render() {

        return (
            <div className='activity-list'>
                <div className='activity-list__header'>Activity</div>
                {this.state.activities.map((item, index) => {
                    return (
                        <div key={index} className='activity-list__item'>
                            <div className='item__img'>{images.find(img => img.type === item.type).img()}</div>
                            <div className='activity-list__name'>
                                <div className='activity-list__item__name'>{item.name}</div>
                                <div>
                                {item.complited ?
                                    <span className='item__complited'>Complited</span>
                                    :
                                    <span className='item__pending'>Pending</span>
                                }
                                <span className='activity-list__item__date'>{item.date}</span>
                                </div>
                            </div>
                            <div className='activity-list__price'>
                                <div className='activity-list__item__bill'>{item.price}</div>
                                <div className='activity-list__item__type'>{item.type}</div>
                            </div>
                        </div>)
                })}
                <div className='activity-list__button' onClick={this.handleGetItems}>Load more</div>
            </div>
        )
    }
}

export default ActivityList;
