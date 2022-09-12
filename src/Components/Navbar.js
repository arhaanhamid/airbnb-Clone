import React from 'react'
import logo from "../Images/logo.png"

export default function Navbar(){
    return(
        <div className="div-navbar">
            <img src={logo} alt="logo" className="logo"/>            
        </div>
    )
}