import { Link } from "react-router-dom"
import "./AboutSection.css"

export default function AboutSection({ img_src, paragraph, scrollToTop }) {
  return (
    <div id="about" className="section home-about wf-section">
      <div className="container-default home-about">
        <div className="w-layout-grid grid-2-columns home-about">
          <div className="about-me-home-image-container">
            <img
              src={img_src}
              alt="Austin Thaldorf-Huelsbeck"
              className="home-about-me-image"
            />
          </div>
          <div>
            <h2>About Me</h2>
            <p className="paragraph-large">{paragraph}</p>
            <div className="mg-top-76px">
              <Link
                to="/about"
                onClick={scrollToTop}
                className="button-primary w-button"
              >
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
