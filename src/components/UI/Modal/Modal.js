import React, { Component } from 'react'
import './Modal.css'
// import Transition from 'react-transition-group/Transition'
import BackDrop from '../BackDrop/BackDrop'
import Aux from '../../../hoc/Auxiliary/Auxuliary'
import Button from '../Button/Button';
export class Modal extends Component {
    render() {
        let ModalClass = "Modal ModalClose"
        if(this.props.show){
            ModalClass = "Modal ModalOpen"
        }
        return (
            <Aux>
                {this.props.show ? <BackDrop show={this.props.show} clicked={this.props.toggleShow}/> : null }
                {this.props.show ?             
                            <div className={ModalClass}>
                            {this.props.children}     
                            <div>
                                <Button click={this.props.click}>Continue Shopping</Button>
                            </div> 
                            </div>
                        : null
                 }                   
            </Aux>
        )
    }
}

export default Modal

