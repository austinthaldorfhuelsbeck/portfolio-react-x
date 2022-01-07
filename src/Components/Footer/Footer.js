// Components
import BlocksSection from "../../Routes/Home/BlocksSection/BlocksSection"

// CSS
import "./Footer.css"

export default function Footer({ blocks, scrollToTop }) {
  return (
    <footer>

      {/* Subfooter displays a back-to-top button */}
      <div className="container-default" data-aos="fade">
        <div className="w-layout-grid footer-grid-top">
          <div
            className="footer-logo-container w-inline-block"
            onClick={scrollToTop}
          >
            <h3 className="footer-logo">Back To Top</h3>
          </div>
        </div>
      </div>

      {/* Use BlocksSection to render full site nav + contact links */}
      <BlocksSection blocks={blocks} alt={true} />

    </footer>
  )
}
