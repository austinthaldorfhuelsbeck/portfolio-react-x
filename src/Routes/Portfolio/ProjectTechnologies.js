export default function ProjectTechnologies({ technologies }) {
  return (

    <div className="project-block" data-aos="fade">
      <div className="mg-bottom-32-px-tablet">Technologies:</div>

      {technologies.map((technology) => (
        <div
          className="project-service-item"
          key={technology.technology_id}
        >
          {technology.title}
        </div>
      ))}

    </div>
    
  )
}