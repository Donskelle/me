import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'

import SEO from '../components/seo'
import GlobalStyle from '../styles/global'
import Footer from '../views/Footer'
import GithubStars from '../views/GithubStars'
import Intro from '../views/Intro'
import WhatIDo from '../views/WhatIDo'
import WhatIWannaDo from '../views/WhatIWannaDo'
import Contact from '../views/Contact'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO
      title="Donskelle - Frontend Developer Hamburg"
      keywords={[`javascript`, `hamburg`, `frontend`]}
    />

    <Parallax pages={6}>
      <Intro offset={0} />
      <WhatIDo offset={1} />
      <WhatIWannaDo offset={2} />
      <GithubStars offset={3} />
      <Contact offset={4} />
      <Footer offset={5} />
    </Parallax>
  </>
)

export default IndexPage
