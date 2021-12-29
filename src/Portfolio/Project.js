import BackBar from "../BackBar/BackBar"
import { useParams } from "react-router-dom"
import "./Portfolio.css"

export default function Project({ projects }) {
  const { url } = useParams()
  const project = projects.find((p) => p.url === url)

  return (
    <div className="project">
      <BackBar />
      <br />
      <h2>{project.title}</h2>
      <div>
        {project.category} / {project.date}
      </div>
      <div className="w-container container-default">
        <img
          src={project.img}
          alt={project.title}
          className="portfolio-image enlarge"
        />
        <br />
        {project.paragraph}
      </div>
    </div>
  )
}
