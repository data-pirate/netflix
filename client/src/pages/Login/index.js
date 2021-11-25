import React, { useState, useRef } from 'react'
import Logo from "../../components/Header/Logo";
import Links from "../../components/Header/Links";
import './login.css'

function Login() {
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const warningBox = useRef(null);

    function handleSubmit(){

    }

    return (
        <div className='register'>
            <div className="login-left">

                <div className="header register-header">
                    <Logo />
                    <div className="links left-align">
                        {
                            ["Home", "Register"].map(each => <Links name={each} />)
                        }
                    </div>
                </div>
                <form className="form-left" onSubmit={handleSubmit} >
                    <span className="tag-line" >Watch tv shows & movies anywhere. anytime</span>
                    <h1 className="form-title">Login</h1>
                    <h3>Not A Member ? <a href="#">Sign Up</a></h3>
                    <ul className="warning" ref={ warningBox } >
                    </ul>
                    <div className="ip">
                        <label htmlFor="email-field">Email</label>
                        <input autoComplete={false} type="email" ref={ emailField } className="input-field" name="email-box" id="email-field" />
                    </div>
                    <div className="ip">
                        <label htmlFor="password-field">Password</label>
                        <input type="password" ref={ passwordField } className="input-field" name="password-box" id="password-field" />
                    </div>

                    <button type="submit" className="submit-button">login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
