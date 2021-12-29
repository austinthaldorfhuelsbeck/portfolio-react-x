import ProjectItem from "./ProjectItem"

export default function ProjectGrid({ projects, scrollToTop }) {
  return (
    <ul className="project-grid">
      {projects.map((project) => (
        <li
          key={project.project_id}
          className={
            project.project_id === projects.length
              ? "list-style-none"
              : "project-item list-style-none"
          }
        >
          <ProjectItem {...project} scrollToTop={scrollToTop} />
        </li>
      ))}
    </ul>
  )
}
