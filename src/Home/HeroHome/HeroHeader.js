import { Link } from "react-scroll"

export default function HeroHeader({ subtext, header, paragraph }) {
  return (
    <div className="hero-header">
      <div className="subtext">{subtext}</div>
      <h1 className="mg-top-32px">{header}</h1>
      <p className="paragraph-large">{paragraph}</p>
      <div className="mg-top-76px">
        <Link smooth to="contact" className="button-primary w-button">Say Hello</Link>
      </div>
    </div>
  )
}