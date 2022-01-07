// Dependencies
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css"

// Components
import Home from "./Routes/Home/Home"
import Portfolio from "./Routes/Portfolio/Portfolio"
import Project from "./Routes/Portfolio/Project"
import About from "./Routes/About/About"
import Contact from "./Routes/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import "./App.css"

import { nav, sections, projects, blocks } from "./data/data"

export default function App() {
  // Dependencies for visual smoothness:
  // Animate On Scroll and Smooth Scroll
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  
  // Turn data into props
  const props = {
    nav: nav,
    sections: sections,
    projects: projects,
    blocks: blocks,
    scrollToTop: scrollToTop,
  }

  return (
    <div className="page-wrapper">
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route exact path="/portfolio" element={<Portfolio {...props} />} />
        <Route path="/portfolio/:url" element={<Project {...props} />} />
        <Route path="/about" element={<About scrollToTop={scrollToTop} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer {...props} scrollToTop={scrollToTop} />
    </div>
  )
}
