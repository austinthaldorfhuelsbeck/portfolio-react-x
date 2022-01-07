// Components
import BlocksSubcolumn from "./BlocksSubcolumn"

export default function BlocksColumn({ side, subtext, columns }) {
  return (
    <div className={"blocks-column " + side}>
      <div className="subtext grey-medium">{subtext}</div>
      <div className="footer-menu-container">
        {columns.map((column) => (
          <ul key={column.title} className={"list-blocks " + column.title}>
            <BlocksSubcolumn {...column} />
          </ul>
        ))}
      </div>
    </div>
  )
}
