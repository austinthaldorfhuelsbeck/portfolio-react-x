import BackBar from "../BackBar/BackBar"
import AboutHero from "./AboutHero"
import AboutDetail from "./AboutDetail"
import Divider from "../Components/Divider"
import Experience from "./Experience/Experience"
import ContactButton from "../Components/ContactButton"

import { pages } from "../data/data"

import "./About.css"

export default function About() {
  const props = pages.find((p) => p.title === "about")

  return (
    <div className="about">
      <BackBar />
      <AboutHero {...props} />
      <AboutDetail {...props} />
      <Divider />
      <div className="section">
        <Experience {...props} />
        <ContactButton />
      </div>
    </div>
  )
}