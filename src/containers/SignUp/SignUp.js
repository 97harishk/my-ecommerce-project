import React, { Component } from 'react'
import './SignUp.css'
import * as actionTypes from '../../store/auth/authAction'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
export class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            password1: '',
            password2: ''
        }
    }
    stateChangeHandler = (e) =>{
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmitHandler = (e) =>{
        e.preventDefault();
        
        let user = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password1,
            new_password: this.state.password2
        }
        console.log(user)
        this.props.register(user)
    }
    render() {
        let redirect = this.props.authState.authenticated ? <Redirect to='/' /> : null
        return (
            <div className="auth-section">
                {redirect}
                <div className="auth-container">
                    <div className="auth-container-top">
                            <label>Sign-up</label>
                    </div>
                    <form onSubmit={(e) =>this.onSubmitHandler(e) }>
                        <Input placeholder="Enter Name..." label="Name:" name="name" autoFocus onChange={(e) => this.stateChangeHandler(e)} />
                        <Input placeholder="Phone No..." label="Enter Phone No:" name="phone" onChange={(e) => this.stateChangeHandler(e)} />
                        <Input placeholder="Email **Optional**" label="Enter Email Id:" name="email" onChange={(e) => this.stateChangeHandler(e)} />
                        <Input placeholder="Password..." label="Enter Password:" type="password" name="password1" onChange={(e) => this.stateChangeHandler(e)}/>
                        <Input placeholder="Confirm Password..." label="Re-Enter Password:" type="password" name="password2" onChange={(e) => this.stateChangeHandler(e)} />
                        <Button type="submit">Sign-Up</Button>
                    </form>
                    <div className="auth-container-bottom">
                        <Link className="link-control">Forget Password?</Link>
                        <Link className="link-control" to="sign-in">Sign-In Here!</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateTOProps = (state) =>{
    return {
        authState: state.authReducer
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        register: (user) => dispatch(actionTypes.register(user) ) 
    }
}
export default connect(mapStateTOProps, mapDispatchToProps)(SignUp)
