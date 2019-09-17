import React from 'react';

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import CardList from '../CardList';
import CardPlaceholder from '../CardPlaceholder';
import RecipientList from '../RecipientList';
import ActivityList from '../ActivityList';


import './Layout.css';

const Burger = (props) => (
    <div className="hamburger" onClick={props.onClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>);


class Layout extends React.Component {
    state = {
        activeClass: false
    }

    handleOpenMenu = () => this.setState({activeClass: !this.state.activeClass})

    render () {
        return (
            <div className='layout'>

            <Burger onClick={this.handleOpenMenu}/>
            <Sidebar activeClass={this.state.activeClass ? 'active' : ''}/>

            <div className="layout__main">
                <Topbar />
                <CardList />
                <div className='layout__activity'>
                    <div className='layout__wrapper'>
                        <CardPlaceholder />
                        <RecipientList />
                    </div>
                    <ActivityList />
                </div>
            </div>
        </div>
        )
    }
 
}
export default Layout;