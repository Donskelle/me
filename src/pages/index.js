import React from "react"
// import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import GlobalStyle from "../styles/global"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO
      title="Donskelle - Frontend Developer Hamburg"
      keywords={[`webdev`, `cv`, `hamburg`, `frontend`]}
    />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
)

export default IndexPage
