// Components
import ProjectLink from "./ProjectLink"

export default function ProjectHeader({ project }) {
  return (
    <div className="container-medium project-header" data-aos="fade">

      {/* Header */}
      <div className="project-card-details post">
        {project.category} / {project.date}
      </div>
      <h1>{project.title}</h1>
      <p className="paragraph-large">{project.paragraph}</p>

      {/* Two links, for deployment and repo */}
      <div className="mg-top-40px">
        <ProjectLink href={project.link} title="Website" />
        <br /><br />
        <ProjectLink href={project.repo} title="Repo" />
      </div>

    </div>
  )
}