export default function AboutHero({ header, paragraph, imgSrc }) {
  return (
    <div className="section hero-about-page">
      <div className="container-medium w-container">
        <div className="text-center">
          <h1>{header}</h1>
          <p className="paragraph-large">{paragraph}</p>
        </div>
        <img
          className="about-image-hero"
          alt="Austin Thaldorf-Huelsbeck"
          src={imgSrc}
        />
      </div>
    </div>
  )
}