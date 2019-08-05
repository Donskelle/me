import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'

import SEO from '../components/seo'
import GlobalStyle from '../styles/global'
import Footer from '../views/Footer'
import GithubStars from '../views/GithubStars'
import Me from '../views/Me'
import Header from '../views/Header'
import Exp from '../views/Exp'
import Contact from '../views/Contact'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO
      title="Donskelle - Frontend Developer Hamburg"
      keywords={[`javascript`, `hamburg`, `frontend`]}
    />

    <Parallax pages={6}>
      <Header offset={0}/>
      <Me offset={1} />
      <GithubStars offset={2} />
      <Exp offset={3} />
      <Contact offset={4} />
      <Footer offset={5}>
        © {new Date().getFullYear()}, Built with
        {`❤`}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <a href="https://github.com/Donskelle/me">Source</a>
      </Footer>
    </Parallax>
  </>
)

export default IndexPage
