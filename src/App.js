import React from "react"
import Navbar from './Components/Navbar.js'
import Header from './Components/Header.js'
import Cardbar from './Components/Cardbar.js'
import Data from "./Components/Data.js"

export default function App() {
    const cardData = Data.map(cardProps => {
        return (
            <Cardbar 
            id={cardProps.id}
            cardProps={cardProps}
            //{...cards} 
            />)
        })
        return (
            <div>
            <Navbar />
            <Header />
            <section className="cards">
              {cardData}        
            </section>
        </div>
    )
  }