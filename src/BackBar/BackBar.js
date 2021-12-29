import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import "./BackBar.css"

export default function BackBar() {
  return (
    <div className="container-default w-container">
      <div className="header-wrapper">
        <ul className="list-style-none">
          <Link to="/">
            <li className="nav-item">
              <FontAwesomeIcon icon={faChevronLeft} />
            </li>
            <li className="nav-item">Back</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}