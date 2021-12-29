// Import sections
import NavBar from "../NavBar/NavBar"
import HeroHome from "./HeroHome/HeroHome"
import BlocksSection from "./BlocksSection/BlocksSection"
import PortfolioSection from "./PortfolioSection/PortfolioSection"
import AboutSection from "./AboutSection/AboutSection"
import ContactSection from "./ContactSection/ContactSection"

export default function Home({ nav, sections, projects, blocks, scrollToTop }) {
  // Find each section and store as objects
  const hero = sections.find((s) => s.title === "hero")
  const about = sections.find((s) => s.title === "about")
  const contact = sections.find((s) => s.title === "contact")

  return (
    <div>
      <NavBar nav={nav} />
      <HeroHome {...hero} />
      <BlocksSection blocks={blocks} alt={false} />
      <PortfolioSection projects={projects} scrollToTop={scrollToTop} />
      <AboutSection {...about} scrollToTop={scrollToTop} />
      <ContactSection {...contact} scrollToTop={scrollToTop} />
    </div>
  )
}
