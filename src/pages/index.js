import React from 'react'
// import { Link } from "gatsby"

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Image from '../components/image'
import SEO from '../components/seo'
import GlobalStyle from '../styles/global'
import Footer from '../views/Footer'
import GithubStars from '../views/GithubStars';


const IndexPage = () => (
  <Parallax pages={4}>
    <GlobalStyle />
    <SEO
      title="Donskelle - Frontend Developer Hamburg"
      keywords={[`webdev`, `cv`, `hamburg`, `frontend`]}
    />
    <Footer>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Footer>
    <GithubStars offset={1}>dasdwqe</GithubStars>
    <Footer offset={2}>dasdwqe</Footer>

    <ParallaxLayer offset={3}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </ParallaxLayer>
  </Parallax>
)

export default IndexPage
