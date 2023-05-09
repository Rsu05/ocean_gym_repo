import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>  QUIENES SOMOS???</h1>
      <Link to="/">Inicio</Link>
      <p>Somos un gimnasio que se enccuentra ubicado en Puntarenas Fraycasiano, manejamos un equipio biomecanica de alta calidad para tus entrenamientos</p>
    </main>
  )
}

export const Head = () => (
    <>
      <title>Quienes somos</title>
      <meta name="description" content="Your description" />
    </>
  )
export default AboutPage