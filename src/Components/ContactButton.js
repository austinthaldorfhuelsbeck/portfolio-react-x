import { Link } from "react-router-dom"

export default function ContactButton({ scrollToTop }) {
  return (
    <div className="mg-top-56px">
      <div className="flex center left-ml">
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
