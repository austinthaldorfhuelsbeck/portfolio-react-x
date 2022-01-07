// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function ExperienceBox({ experience }) {

  /* Takes an experience from db and structures a card */

  return (
    <>
      <div className="experience-details">
        <div>{experience.company}</div>
        <div className="experience-details-divider">/</div>
        <div>{experience.start + " - " + experience.end}</div>
      </div>
      <h3>{experience.title}</h3>
      <p>{experience.paragraph}</p>
      <div className="mg-top-48px">
        <a href={experience.url} target="_blank" rel="noreferrer" className="link-social-media w-inline-block">
          {"Website "}
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </>
  )
}