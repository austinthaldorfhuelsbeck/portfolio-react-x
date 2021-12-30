import Divider from "../Components/Divider"

export default function ProjectSection({ section }) {
  // Figure out the conditional header
  let header = ""
  if (section.title === "about") {
    header = "About The Project"
  }
  if (section.title === "execution") {
    header = "Project Execution"
  }
  if (section.title === "results") {
    header = "Project Results"
  }

  return (
    <div className="project-container" data-aos="fade">
      <div className="project-section">
        <h2>{header}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: section.html }}
          className="rich-text w-richtext"
        />
        {section.img && (
          <img
            src={section.img}
            alt={section.title}
            className="project-section-img"
          />
        )}
      </div>
      <div className="project-divider">
        {section.title !== "results" && <Divider />}
      </div>
    </div>
  )
}