/* Renders about detail: columnOne and columnTwo */

export default function AboutDetail({ columnOne, columnTwo }) {
  return (
    <div className="about-detail">
      <div className="container-default w-container">
        <h2>More About Me</h2>
        <div className="w-layout-grid grid-2-columns about-story">
          <p data-aos="fade">{columnOne}</p>
          <p data-aos="fade">{columnTwo}</p>
        </div>
      </div>
    </div>
  )
}