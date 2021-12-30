import BackBar from "../BackBar/BackBar"
import ProjectGrid from "../Home/PortfolioSection/ProjectGrid"

export default function Portfolio({ projects, scrollToTop }) {
  return (
    <>
      <BackBar />
      <div className="portfolio">
        <h2>Portfolio</h2>
        <br />
        <ProjectGrid projects={projects} scrollToTop={scrollToTop} />
        <br />
      </div>
    </>
  )
}
