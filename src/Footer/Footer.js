import BlocksSection from "../Home/BlocksSection/BlocksSection"
import "./Footer.css"

export default function Footer({ blocks, scrollToTop }) {
  return (
    <footer>
      <div className="container-default" data-aos="fade">
        <div className="w-layout-grid footer-grid-top">
          <div
            className="footer-logo-container w-inline-block"
            onClick={scrollToTop}
          >
            <h3 className="footer-logo">Back To Top</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed
            sapien quisque posuere.
          </p>
        </div>
      </div>
      <BlocksSection blocks={blocks} alt={true} />
    </footer>
  )
}