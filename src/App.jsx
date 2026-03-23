import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/Showcase.jsx'
import Performance from './components/Performance.jsx'
import Features from './components/Features.jsx'
import Highlights from './components/Highlights.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ProductViewer />
    <Showcase />
    <Performance />
    <Features />
    <Highlights />
    <Footer />
    </>
  )
}

export default App;