import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll"

// Animate on scroll effects
import Aos from "aos"
import "aos/dist/aos.css"

import Home from "./Home/Home"
import Portfolio from "./Portfolio/Portfolio"
import Project from "./Portfolio/Project"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
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
