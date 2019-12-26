import React, { Component } from 'react'
import './Modal.css'
import BackDrop from '../BackDrop/BackDrop'
import Aux from '../../../hoc/Auxiliary/Auxuliary'
import Button from '../Button/Button';
export class Modal extends Component {
    UNSAFE_componentWillUpdate() {
        console.log('[modal component updated');
    }
    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.toggleShow}/>
                    <div className="Modal" 
                    style ={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}     
                    <div><Button click={this.props.click}>Continue Shopping</Button></div> 
                    </div>
            </Aux>
        )
    }
}

export default Modal

