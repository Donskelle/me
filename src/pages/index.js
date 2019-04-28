import React from 'react'

import { Parallax } from 'react-spring/renderprops-addons'
import SEO from '../components/seo'
import GlobalStyle from '../styles/global'
import Footer from '../views/Footer'
import GithubStars from '../views/GithubStars'
import Header from '../views/Header'
import Exp from '../views/Exp'
import Contact from '../views/Contact'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO
      title="Donskelle - Frontend Developer Hamburg"
      keywords={[`javascript`, `cv`, `hamburg`, `frontend`]}
    />

    <Parallax pages={5}>
      <Header />
      <GithubStars offset={1} />
      <Exp offset={2} />
      <Contact offset={3} />
      <Footer offset={4}>
        © {new Date().getFullYear()}, Built with
        {`❤`}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <a href="https://github.com/Donskelle/me">Source</a>
      </Footer>
    </Parallax>
  </>
)

export default IndexPage
