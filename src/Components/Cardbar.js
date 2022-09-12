import React from 'react'

export default function Cardbar(props){

    let badgeText
    if (props.cardProps.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.cardProps.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="cardbar">
            {badgeText && <div className="card-badge">{badgeText}</div>}

            <img src={ require(`../Images/${props.cardProps.coverImg}`) } alt="image001" className="card-img" />            

            <div className='card-stats'>
                <img src={ require('../Images/star.png') } alt="star" className='card-star'/>  
                <p>{props.cardProps.stats.rating}</p>          
                <p className="grey">({props.cardProps.stats.reviewCount}) • </p> 
                <p className="grey">{props.cardProps.location}</p> 
            </div>

            <p className='card-title'>{props.cardProps.title}</p>

            <p className='card-price'>
                <span className='bold' >From ${props.cardProps.price}</span> / person
            </p>          
        </div>
    )
}