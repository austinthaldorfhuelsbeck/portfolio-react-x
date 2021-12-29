import BackBar from "../BackBar/BackBar"
import ProjectGrid from "../Home/PortfolioSection/ProjectGrid"

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio">
      <BackBar />
      <br />
      <h2>Portfolio</h2>
      <br />
      <ProjectGrid projects={projects} />
      <br />
    </div>
  )
}
