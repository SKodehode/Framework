import "./styling/main.css"
import "./styling/card-container.css"
import "./styling/card.css"
import "./styling/hero.css"
import "./styling/navbar.css"
import "./styling/footer.css"
import { cardArray } from "./components/card-array"
import { Card } from "./components/card"

function App() {
  return (
    <>
      <nav></nav>
      <main>
        <div id="hero">
          <h1 id="hero-title">Blogposts</h1>
          <h4 id="hero-description">New posts everyday by yours truly</h4>
          <img src=".src/assets/images/city/city (1).jpg" alt="" />
        </div>
        <div id="card-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

console.log(cardArray)

export default App
