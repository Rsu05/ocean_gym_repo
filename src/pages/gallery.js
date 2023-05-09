import React from 'react'
import Frame from '../components/frame'
import { Link } from 'gatsby'


const GalleryPage = () => {
  return (
    <main>
    <Link to="/">Inicio</Link>
    <Frame>


      <p>esto se encuentra dentro la funcion GalleryPage y se escribió desde gallery</p>
    </Frame>
    </main>
  )
}
export const Head = () => <title>Galería</title>

export default GalleryPage