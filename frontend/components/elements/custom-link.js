import Link from "next/link"
import PropTypes from "prop-types"
import { linkPropTypes } from "utils/types"

const CustomLink = ({ link, children, childCloseSelf }) => {
  const isInternalLink = link.url.startsWith("/")

  const handleClick = () => {
    if (typeof childCloseSelf == 'function') {
      childCloseSelf();
    }
  }

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href={link.url}>

        <a onClick={() => handleClick()}>{children}</a>
      </Link>
    )
  }

  // Plain <a> tags for external links
  if (link.newTab) {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <a href={link.url} target="_self">
      {children}
    </a>
  )
}

CustomLink.propTypes = {
  link: linkPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  childCloseSelf: PropTypes.func
}

export default CustomLink
