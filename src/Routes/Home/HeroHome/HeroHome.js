// Components
import HeroHeader from "./HeroHeader"
import HeroImage from "./HeroImage"

// CSS
import "./HeroHome.css"

export default function HeroHome(props) {

  /* Combines the two components within a grid */
  return (
    <div className="section hero-home">
      <div className="container-default">
        <div className="w-layout-grid grid-2-columns hero-home">
          <HeroHeader {...props} />
          <HeroImage {...props} />
        </div>
      </div>
    </div>
  )
}