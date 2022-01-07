import BackBar from "../../Components/BackBar/BackBar"
import AboutHero from "./AboutHero"
import AboutDetail from "./AboutDetail"
import Divider from "../../Components/Divider/Divider"
import Experience from "./Experience/Experience"
import ContactButton from "../../Components/ContactButton/ContactButton"

import { pages } from "../../data/data"

import "./About.css"

export default function About({ scrollToTop }) {
  const props = pages.find((p) => p.title === "about")

  return (
    <div className="about">
      <BackBar />
      <AboutHero {...props} />
      <AboutDetail {...props} />
      <Divider />
      <div className="section">
        <Experience {...props} />
        <ContactButton scrollToTop={scrollToTop }/>
      </div>
    </div>
  )
}