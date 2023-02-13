import React from 'react'
import './register.css'

export default function Register() {
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
                <input type="text" placeholder='Username' className="loginInput" />
                <input type="email" placeholder='Email' className="loginInput" />
                <input type="password" placeholder='Password' className="loginInput" />
                <input type="password" placeholder='Password Again' className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">
                    Log into your Account
                </button>
            </div>
        </div>

      </div>
    </div>
  )
}
