import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">REVALATiON</h3>
            <span className="loginDesc">
                Ever day is a new Revelation
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="email" placeholder='Email' className="loginInput" />
                <input type="password" placeholder='Password' className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot password?</span>
                <button className="loginRegisterButton">
                    Create a new Account
                </button>
            </div>
        </div>

      </div>
    </div>
  )
}
