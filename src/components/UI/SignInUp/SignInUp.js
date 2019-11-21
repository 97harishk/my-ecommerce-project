import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionTypes from '../../../store/auth/authAction'
import './SignInUp.css'
export class SignInUp extends Component {
    render() {
        return (
            <Link to="/sign-in" className="Auth-icon">
                <i className="fas fa-sign-out-alt" onClick={() => this.props.logOut()} > { this.props.authState.authenticated ? this.props.authState.name:  'Hey, Sign-In!'}</i>
         </Link>
        )
    }
}
const mapStateToProps = state =>{
    return{
        authState: state.authReducer
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        logOut: () => dispatch(actionTypes.logOut())
   }    
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInUp)
