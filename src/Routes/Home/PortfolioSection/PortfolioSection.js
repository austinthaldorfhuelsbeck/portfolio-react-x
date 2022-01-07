import { Link } from "react-router-dom"
import ProjectGrid from "./ProjectGrid"
import "./PortfolioSection.css"

export default function PortfolioSection({ projects, scrollToTop }) {

  // Hardcoded to preview exactly three projects
  const firstThreeProjects = projects.slice(0, 3)

  return (
    <div id="portfolio" className="section">
      <div className="container-default">
        <h2 data-aos="fade-down">Portfolio</h2>

        {/* ProjectGrid takes any number of projects; pass first three */}
        <div className="project-collection-list">
          <ProjectGrid
            projects={firstThreeProjects}
            scrollToTop={scrollToTop}
          />
        </div>

        <div className="flex center">

          {/* TODO this button could be a seperate component */}
          <div className="mg-top-76px">
            <Link
              to="/portfolio"
              className="button-primary w-button"
              onClick={scrollToTop}
              data-aos="fade"
            >
              Browse All Projects
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
