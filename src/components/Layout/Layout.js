import React from 'react';

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import CardList from '../CardList';
import CardPlaceholder from '../CardPlaceholder';
import RecipientList from '../RecipientList';
import ActivityList from '../ActivityList';

import menuItems from './menuItems';


import './Layout.css';

const Burger = (props) => (
    <div className="hamburger" onClick={props.onClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>);


class Layout extends React.Component {
    state = {
        activeClass: false,
        sidebarItems: []
    }


    handleSidebarItemAdd = () => {
        const itemName =  prompt('Add item to sidebar?');
        
        if (itemName) {

            this.setState({
                sidebarItems: [...this.state.sidebarItems,     {
                    classname: 'settitngs_icon',
                    name: `${itemName}`,
                    icon: () => <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" stroke="#9191AF" strokeWidth="2" fill="none"  opacity=".8" ><circle cx="9" cy="9" r="2.455"/><path d="M15.545 9a6.586 6.586 0 00-.153-1.402l2.22-1.68-1.636-2.835-2.572 1.085a6.535 6.535 0 00-2.422-1.407L10.636 0H7.364l-.346 2.761c-.9.289-1.726.768-2.422 1.407L2.024 3.083.388 5.917l2.22 1.681a6.464 6.464 0 000 2.804l-2.22 1.68 1.636 2.835 2.572-1.085a6.535 6.535 0 002.422 1.407L7.364 18h3.272l.346-2.761a6.535 6.535 0 002.422-1.407l2.572 1.085 1.636-2.834-2.22-1.681c.1-.46.152-.93.153-1.402z"/></g></svg>,
                }]
            })
        } 
    }

    handleOpenMenu = () => this.setState({activeClass: !this.state.activeClass})

    componentDidMount(){
        this.setState({sidebarItems: menuItems})
    }


    render () {
        return (
            <div className='layout'>

                <Burger onClick={this.handleOpenMenu}/>
                <Sidebar items={this.state.sidebarItems} activeClass={this.state.activeClass ? 'active' : ''}/>

                <div className="layout__main">
                    <Topbar onItemAdd={this.handleSidebarItemAdd}/>
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
