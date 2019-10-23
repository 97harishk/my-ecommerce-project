import React, { Component } from 'react'
import BackDrop from '../UI/BackDrop/BackDrop'
import './MenuSideDrawer.css'
export class MenuSideDrawer extends Component {
  
    render() {
        let menuClass = 'menu-drawer close';
        if(this.props.show){
            menuClass = 'menu-drawer open';
        }
        return (
            <div>
                <BackDrop show ={this.props.show} clicked={this.props.click}/>
                <div className={menuClass}>
                
                 </div>
            </div>
            
        )
    }
}

export default MenuSideDrawer
