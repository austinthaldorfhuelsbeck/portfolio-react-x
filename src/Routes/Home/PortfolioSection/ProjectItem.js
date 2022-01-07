import { Link } from "react-router-dom"

export default function ProjectItem(props) {
  const arrowImgSrc =
    "https://assets.website-files.com/6075067ce8506664f2bab8ef/607651a2c5d0b98b2b5bc829_project-arrow-creative-x-webflow-template.svg"

  return (
    <Link
      to={"/portfolio/" + props.url}
      className="project-link w-inline-block"
      onClick={props.scrollToTop}
      data-aos="fade"
    >
      <div className="w-layout-grid grid-2-columns projects">
        <div className="blog-card-image-container enlarge">
          <img
            src={props.img}
            alt={props.title}
            className="blog-card-image grayscale"
          />
        </div>
        <div className="project-card-content-text">
          <div className="project-card-details">
            <div>{props.category}</div>
            <div className="project-detail-divider">/</div>
            <div>{props.date}</div>
          </div>
          <h3 className="project-title">{props.title}</h3>
          <div className="project-link-container">
            <div className="scroll-link-text">
              Read Case Study
              <img
                src={arrowImgSrc}
                alt="Read Case Study"
                className="scroll-right-image project"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
