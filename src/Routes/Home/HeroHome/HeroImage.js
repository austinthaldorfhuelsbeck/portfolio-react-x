// Dependencies
import { Link } from "react-scroll"

export default function HeroImage({ img_src }) {

  /* TODO Temporary: scrolldown arrow image;
   * could be fontawesome potentially */
  const arrowImgSrc =
    "https://assets.website-files.com/6075067ce8506664f2bab8ef/6075a30866432ef6b6513e0e_arrow-down-creative-x-webflow-template.svg"

  return (
    <div className="hero-home-image-container">
      <img
        src={img_src}
        alt="Austin Thaldorf-Huelsbeck"
        className="hero-image-home"
      />
      <Link smooth to="blocks" className="scroll-down-link w-inline-block">
        <div className="scroll-link-text bold-white" data-aos="fade-down">
          Scroll Down
          <img
            src={arrowImgSrc}
            alt="Scroll Down"
            className="scroll-down-image"
          ></img>
        </div>
      </Link>
    </div>
  )
}
