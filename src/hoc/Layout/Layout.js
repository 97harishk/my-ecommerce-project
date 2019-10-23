import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxuliary'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MenuSideDrawer from '../../components/MenuSideDrawer/MenuSideDrawer'
export class Layout extends Component {
    state = {
        showSideDrawer: false
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

export default Layout
