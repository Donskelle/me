import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
import Amplify from 'aws-amplify'

import SEO from '../components/seo'
import GlobalStyle from '../styles/global'
import Footer from '../views/Footer'
import GithubStars from '../views/GithubStars'
import Intro from '../views/Intro'
import WhatIDo from '../views/WhatIDo'
import WhatIWannaDo from '../views/WhatIWannaDo'
import Contact from '../views/Contact'
import Music from '../views/Music'

import awsconfig from '../aws-exports';


Amplify.configure(awsconfig);

// Configure a custom GraphQL endpoint
const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO
      title="Donskelle - Frontend Developer Hamburg"
      keywords={[`javascript`, `hamburg`, `frontend`]}
    />

    <Parallax pages={7}>
      <Intro offset={0} />
      <Music offset={1} />
      <WhatIDo offset={2} />
      <WhatIWannaDo offset={3} />
      <GithubStars offset={4} />
      <Contact offset={5} />
      <Footer offset={6} />
    </Parallax>
  </>
)

export default IndexPage
