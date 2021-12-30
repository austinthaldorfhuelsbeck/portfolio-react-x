export default function AboutHero({ header, paragraph, img_src }) {
  return (
    <div className="section hero-about-page">
      <div className="container-medium w-container">
        <div className="text-center" data-aos="fade-down">
          <h1>{header}</h1>
          <p className="paragraph-large dark-text">{paragraph}</p>
        </div>
        <img
          className="about-image-hero"
          alt="Austin Thaldorf-Huelsbeck"
          src={img_src}
        />
      </div>
    </div>
  )
}