// Dependencies
import { useNavigate } from "react-router-dom"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

// CSS
import "./BackBar.css"

export default function BackBar() {
  const navigate = useNavigate()

  return (
    <div className="container-default w-container">
      <div className="header-wrapper">
        <ul className="list-style-none">
          <div onClick={() => navigate(-1)}>
            <li className="nav-item">
              <FontAwesomeIcon icon={faChevronLeft} />
            </li>
            <li className="nav-item">Back</li>
          </div>
        </ul>
      </div>
    </div>
  )
}