import Amplify from 'aws-amplify';
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';

import awsconfig from '../aws-exports';
import SEO from '../components/SEO';
import Contact from '../views/Contact';
import Footer from '../views/Footer';
import GithubStars from '../views/GithubStars';
import Intro from '../views/Intro';
import Music from '../views/Music';
import WhatIDo from '../views/WhatIDo';
import WhatIWannaDo from '../views/WhatIWannaDo';


Amplify.configure(awsconfig);

// Configure a custom GraphQL endpoint
const IndexPage = () => (
  <>
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
);

export default IndexPage;
