// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>El mejor lugar para entrenar</h1>
      <Link to="/gallery">Galería</Link><br></br>
      <Link to="/about">Quienes somos?</Link>
      <p>continuamos......</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Inicio</title>

// Step 3: Export your component
export default IndexPage