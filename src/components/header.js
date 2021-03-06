import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          margin: 0,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
