import { Link } from "react-router-dom"
import ProjectGrid from "./ProjectGrid"
import "./PortfolioSection.css"

export default function PortfolioSection({ projects, scrollToTop }) {
  // Hardcoded to preview exactly three projects
  const firstThreeProjects = projects.slice(0, 3)
  return (
    <div id="portfolio" className="section">
      <div className="container-default">
        <h2>Portfolio</h2>
        <div className="project-collection-list">
          <ProjectGrid
            projects={firstThreeProjects}
            scrollToTop={scrollToTop}
          />
        </div>
        <div className="flex center">
          <div className="mg-top-76px">
            <Link
              to="/portfolio"
              className="button-primary w-button"
              onClick={scrollToTop}
            >
              Browse All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
