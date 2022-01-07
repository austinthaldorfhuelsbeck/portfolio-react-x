// Dependencies
import { Link } from "react-scroll"

// CSS
import "./NavBar.css"

export default function NavBar({ nav }) {
  return (
    <div className="container-default w-container">
      <div className="header-wrapper">
        <ul className="list-style-none">

          {/* nav object already contains correct data */}
          {nav.map((item) => (
            <li key={item.title} className="nav-item">
              <Link smooth to={item.link}>{item.title}</Link>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}