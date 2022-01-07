// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function BlocksSubcolumn({ items }) {
  return items.map((item) => {

    /* Three cases to consider for a possible element */
    let element = ""
    
    /* External links: display icon, open in new tab */
    if (item.link && item.external) {
      element = (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="link-social-media w-inline-block"
        >
          {item.title + " "}
          <FontAwesomeIcon icon={faExternalLinkAlt} className="scroll-right-image-less" />
        </a>
      )
    }  
    
    /* Internal links: basic a element */
    else if (item.link) {
      element = (
        <a href={item.url} className="w-inline-block">
          {item.title}
        </a>
      )
    }
    
    /* No link: simply display text */
    else {
      element = item.title
    }

    /* 'item' is a string and can be used as a key */
    return (
      <li key={item} className="blocks-list-item">
        {element}
      </li>
    )
  })
}
