import React from "react";
import Layout from "./components/layout/layout";
import "./index.css";
import "./styling/main.css"
import "./styling/card-container.css"
import "./styling/hero.css"
import { cardArray } from "./components/card/card-array"
import { Card } from "./components/card/card"

function App() {
  return (
    <>
      <Layout>
        <div id="hero">
          <h1 id="hero-title">Blogposts</h1>
          <h4 id="hero-description">New posts everyday by yours truly</h4>
          <img src=".src/assets/images/city/city (1).jpg" alt="" />
        </div>
        <div id="card-container">
        {cardArray.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            timestamp={card.timestamp}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>  
      </Layout>
    </>
  )
}

console.log(cardArray)

export default App
