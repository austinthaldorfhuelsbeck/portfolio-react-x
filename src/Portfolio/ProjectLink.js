import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function ProjectLink({ href, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-arrow"
    >
      {title + " "}
      <FontAwesomeIcon icon={faExternalLinkAlt} className="scroll-right-image-less" />
    </a>
  )
}