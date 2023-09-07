import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Sponsors from './components/Sponsors'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Product />
    <Team />
    <Sponsors />
    <Footer />
    </>
  )
}

export default App
