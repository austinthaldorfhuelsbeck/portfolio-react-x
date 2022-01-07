// Components
import ContactButton from "../../../Components/ContactButton/ContactButton"

// CSS
import "./ContactSection.css"

export default function ContactSection({ header, paragraph, scrollToTop }) {
  return (
    <div id="contact" className="section say-hello" data-aos="fade">
      
      {/* Contact section copy from db */}
      <div className="container-medium">
        <div className="text-center">
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <ContactButton scrollToTop={scrollToTop} />
        </div>
      </div>
      
      {/* Giant 'Contact Me' banners on top and bottom */}
      <div className="text-big-cta top">Contact Me</div>
      <div className="text-big-cta bottom">Contact Me</div>
    </div>
  )
}
