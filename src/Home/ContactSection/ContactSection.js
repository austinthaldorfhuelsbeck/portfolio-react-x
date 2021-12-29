import ContactButton from "../../Components/ContactButton"
import "./ContactSection.css"

export default function ContactSection({ header, paragraph, scrollToTop }) {
  return (
    <div id="contact" className="section say-hello" data-aos="fade">
      <div className="container-medium">
        <div className="text-center">
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <ContactButton scrollToTop={scrollToTop} />
        </div>
      </div>
      <div className="text-big-cta top">Contact Me</div>
      <div className="text-big-cta bottom">Contact Me</div>
    </div>
  )
}
