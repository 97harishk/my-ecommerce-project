import React, { Component } from 'react'
import BackDrop from '../UI/BackDrop/BackDrop'
import './MenuSideDrawer.css'
import Logo from '../Logo/Logo';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/menu/menuAction'
import MenuItems from './MenuItems/MenuItems';
export class MenuSideDrawer extends Component {
  componentDidMount(){
    this.props.setMenu();
    console.log('[did mount]',this.props.menu)
  }
  componentDidUpdate(){
    console.log('[did update]',this.props.menu)
  }
    render() {
        
        let menuClass = 'menu-drawer close';
        if(this.props.show){
            menuClass = 'menu-drawer open';
        }
        let menu = !this.props.menu  ? <h3>No Menu Item is uploaded yet!</h3>
        :this.props.menu.map(menu =>{
            return <MenuItems key={menu._id} menu={menu} />
        }) 
        return (
            <div>
                <BackDrop show ={this.props.show} clicked={this.props.click}/>
                <div className={menuClass}>
                    <div className="drawer-top">
                        <Logo />
                    </div>
                    <div className="drawer-container">
                        <div className="drawer-content">
                           {menu}
                        </div>
                    </div>
                 </div>
            </div>
            
        )
    }
}
const mapStateTOProps = state =>{
    return{
        menu: state.menuReducer.menu
    }
}   
const mapDispatchTOProps = dispatch =>{
    return{
        setMenu: () =>  dispatch(actionTypes.initMenu()),
    }
}
export default connect(mapStateTOProps, mapDispatchTOProps)(MenuSideDrawer)
