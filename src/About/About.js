import BackBar from "../BackBar/BackBar"
import AboutHero from "./AboutHero"
import AboutDetail from "./AboutDetail"
import Divider from "../Components/Divider"
import Experience from "./Experience/Experience"
import ContactButton from "../Components/ContactButton"

import "./About.css"

export default function About() {
  const experiences = [
    {
      experienceId: 1,
      title: "Senior Product Designer",
      company: "Google",
      start: "Jan 2020",
      end: "Present",
      url: "http://www.google.com",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
    },
    {
      experienceId: 2,
      title: "Lead UI Designer",
      company: "Webflow",
      start: "Feb 2021",
      end: "Dec 2021",
      url: "http://www.webflow.com",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
    },
    {
      experienceId: 3,
      title: "UI/UX Designer",
      company: "Twitter",
      start: "Jan 2018",
      end: "Jan 2021",
      url: "http://www.twitter.com",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
    },
    {
      experienceId: 4,
      title: "Mobile UI/UX Designer",
      company: "Facebook",
      start: "Jan 2015",
      end: "Dec 2017",
      url: "http://www.facebook.com",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
    }
  ]

  const props = {
    header: "Hello, I'm Austin Thaldorf-Huelsbeck",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus arcu nulla viverra arcu elit,",
    columnOne: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit",
    columnTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem",
    imgSrc: "https://assets.website-files.com/6075067ce8506664f2bab8ef/6076f0de7710b9229e61c994_about-sophie-moore-creative-x-webflow-template.jpg"
  }

  return (
    <div className="about">
      <BackBar />
      <AboutHero {...props} />
      <AboutDetail {...props} />
      <Divider />
      <div className="section">
        <Experience {...props} experiences={experiences} />
        <ContactButton />
      </div>
    </div>
  )
}