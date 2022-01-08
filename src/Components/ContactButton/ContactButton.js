// Dependencies
import { Link } from "react-router-dom"

export default function ContactButton({ scrollToTop }) {
  return (
    <div className="mg-top-32px">
      <div  data-aos="fade"className="flex center left-ml">
        <Link
          to="/contact"
          className="button-primary w-button"
          onClick={scrollToTop}
        >
          Send Me A Message
        </Link>
      </div>
    </div>
  )
}
