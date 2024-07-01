import * as React from "react"
import { Link } from "gatsby"
import headerImage from '../images/gatsby-icon.png'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <img src={headerImage} alt="header" height={70} />
          {/* {title} */}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Made by
        {` `}
        <a href="https://github.com/tryNlog">tryNlog</a>
      </footer>
    </div>
  )
}

export default Layout
