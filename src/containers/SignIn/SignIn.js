import React, { Component } from 'react'
import './SignIn.css'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import * as actionTypes from '../../store/auth/authAction'
export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    onInputChangeHandler = (event) =>{
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }
    loginSubmitHanlder  = event =>{
        event.preventDefault();
        let user ={
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginHandler(user);
    }
    componentDidUpdate(){
        console.log('[sign in update page]',this.props.authState)
    }
    render() {
       let redirect = this.props.authState.authenticated ? <Redirect to='/' ></Redirect> : null
       const button = this.props.authState.loading ? <Button type="submit">Loading...</Button> : <Button type="submit">Sign-In</Button>
        return (
            <div className="auth-section">
                     {redirect}
                <div className="auth-container">
                    <div className="auth-container-top">
                            <label>login</label>
                    </div>
                    <form onSubmit={this.loginSubmitHanlder}>
                        <Input placeholder="Phone No..." label="Enter Phone No:" type="email" onChange={(event) => this.onInputChangeHandler(event)} name="email" />
                        <Input placeholder="Password..." label="Enter Valid Password:" type="password" onChange={(event) => this.onInputChangeHandler(event)} name="password" />
                        {button}
                    </form>
                    <div className="auth-container-bottom">
                        <Link className="link-control" to='/forget'>Forget Password?</Link>
                        <Link className="link-control" to="sign-up">Sign-Up Here!</Link>
                    </div>
                </div>
            </div>
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
        loginHandler: (user) => dispatch(actionTypes.login(user))
   }    
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
