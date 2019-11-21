import React, { Component } from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
export class SignUp extends Component {
    render() {
        return (
            <div className="auth-section">
                <div className="auth-container">
                    <div className="auth-container-top">
                            <label>Sign-up</label>
                    </div>
                    <Input placeholder="Phone No..." label="Enter Phone No:" />
                    <Input placeholder="Email **Optional**" label="Enter Email Id:" />
                    <Input placeholder="Password..." label="Enter Password:" type="password" />
                    <Input placeholder="Confirm Password..." label="Re-Enter Password:" type="password" />
                    <Button>Sign-Up</Button>
                    <div className="auth-container-bottom">
                        <Link className="link-control">Forget Password?</Link>
                        <Link className="link-control" to="sign-in">Sign-In Here!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
