// Components
import BackBar from "../../Components/BackBar/BackBar"
import AboutHero from "./AboutHero"
import AboutDetail from "./AboutDetail"
import Divider from "../../Components/Divider/Divider"
import Experience from "./Experience/Experience"
import ContactButton from "../../Components/ContactButton/ContactButton"

// Data
import { pages } from "../../data/data"

// CSS
import "./About.css"

export default function About({ scrollToTop }) {
  /* data is within the pages stack */
  const props = pages.find((p) => p.title === "about")

  /* data is needed for AboutHero, AboutDetail, Experience */
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