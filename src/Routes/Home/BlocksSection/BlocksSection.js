import BlocksColumn from "./BlocksColumn"
import "./BlocksSection.css"

export default function BlocksSection({ blocks, alt }) {
  // Find the left side block or the alt left side block
  const leftBlock = alt
    ? blocks.find((b) => b.side === "left" && b.alt)
    : blocks.find((b) => b.side === "left" && !b.alt)
  // Find the right side block; there is only one
  const rightBlock = blocks.find((b) => b.side === "right")

  // Generate elements from block objects
  const leftElement = <BlocksColumn {...leftBlock} />
  const rightElement = <BlocksColumn {...rightBlock} />

  return (
    <div id="blocks" className="section blocks-and-social" data-aos="fade">
      <div className="container-default">
        <div className="w-layout-grid grid-2-columns home-blocks">
          {leftElement}
          {rightElement}
        </div>
      </div>
    </div>
  )
}
