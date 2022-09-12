import React from 'react'
import collage from "../Images/collage.png"

export default function Header(){
    return(
        <div className="div-header">
            <img src={collage} alt="logo" className="header-img" /> 
            <div className='header-info'>
                <h1>Our customer travel experiences...</h1>
                <p>Join a unique interactive activitites led by one-of-a-kind hosts all by wihtout leaving your homes.</p>    
            </div>           
        </div>
    )
}