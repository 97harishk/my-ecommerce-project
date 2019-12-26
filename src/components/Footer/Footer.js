import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="contact-details-wrapper">
                    <div className="contact-type">
                        <i className="fa fa-phone"><label> 7015497010, 9671139745</label></i> 
                    </div>
                    <div className="contact-type">
                        <i className="far fa-envelope"><label> Developer.97harishkumar@gmail.com</label></i> 
                    </div>
                </div>
                <div className="social-icons-wrapper">
                    <a href="https://www.facebook.com/profile.php?id=100010760718810" target="_blank" className="icon-type">
                            <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/97p_harry/" target="_blank" className="icon-type">
                            <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/harish-kumar-777831138/" target="_blank" className="icon-type">
                            <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com/97harishkumar" target="_blank" className="icon-type">
                            <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer
