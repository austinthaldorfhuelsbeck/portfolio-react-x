// Dependencies
import { useParams } from "react-router-dom"

// Components
import BackBar from "../../Components/BackBar/BackBar"
import ProjectHeader from "./ProjectHeader"
import ProjectTechnologies from "./ProjectTechnologies"
import ProjectSection from "./ProjectSection"

// CSS
import "./Portfolio.css"

export default function Project({ projects }) {

  // Check url paramaters for which project to display
  const { url } = useParams()
  // Search projects list for the correct project
  const project = projects.find((p) => p.url === url)
  // Store sections as objects to pass as props
  const aboutSection = project.sections.find((s) => s.title === "about")
  const executionSection = project.sections.find((s) => s.title === "execution")
  const resultsSection = project.sections.find((s) => s.title === "results")

  // Renders the project sections, if they were found
  const renderProjectSections = ( aboutSection, executionSection, resultsSection ) => {
    return (
      <>
        {aboutSection && <ProjectSection section={aboutSection} />}
        {executionSection && <ProjectSection section={executionSection} />}
        {resultsSection && <ProjectSection section={resultsSection} />}
      </>
    )
  }

  return (
    <>
      <BackBar />
      <div className="section hero project">
        <ProjectHeader project={project} />
        <img
          src={project.img}
          alt={project.title}
          className="portfolio-image"
          data-aos="fade"
        />
        <ProjectTechnologies technologies={project.technologies} />
        {renderProjectSections(aboutSection, executionSection, resultsSection)}
      </div>
    </>
  )
}
