// Components
import ExperienceBox from "./ExperienceBox";
import ResumeButton from "../../../Components/ResumeButton/ResumeButton"

export default function Experience({ experiences }) {

    /* Uses css-grid to position boxes */
    
    return (
    <div className="experience-section">
      <div className="container-default w-container">
        <h2 data-aos="fade">Experience + Education</h2>
        <ResumeButton />
        <div data-aos="fade" className="w-layout-grid grid-2-columns my-experience">
          <div className="experience-box top-left">
            <ExperienceBox experience={experiences[0]} />
          </div>
          <div className="experience-box top-right">
            <ExperienceBox experience={experiences[1]} />
          </div>
          <div className="experience-box bottom-left">
            <ExperienceBox experience={experiences[2]} />
          </div>
          <div className="experience-box bottom-right">
            <ExperienceBox experience={experiences[3]} />
          </div>
        </div>
      </div>
    </div>
  )
}