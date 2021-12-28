import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxuliary'
import {connect} from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MenuSideDrawer from '../../components/MenuSideDrawer/MenuSideDrawer'
import * as authAction from '../../store/auth/authAction'
export class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    componentDidMount(){
                this.props.checkAuthentication();
    }
    toggleSideDrawer = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer})
    }
    render() {
        return (
            <Aux>
                <MenuSideDrawer show ={this.state.showSideDrawer} click = {this.toggleSideDrawer} />
                    <Header click = {this.toggleSideDrawer}/>
                        {this.props.children}
                    <Footer />
            </Aux>
        )
    }
}
const matchStateToProps = state =>{
    return{
        authState: state.authState
    }
} 
const matchDispatchToProps = dispatch =>{
    return{
        checkAuthentication: () => dispatch(authAction.checkAuthentication())
     }
} 
export default connect(matchStateToProps, matchDispatchToProps)(Layout)
