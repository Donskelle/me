import React from 'react'
// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'

const WhatIWannaDo = ({ offset }) => (
  <Content speed={0.6} offset={offset}>
    <H2>What I wanna do?</H2>
    <article>Frontend React, Relay, Svelte 3</article>
    <article>Backend Serverless NodeJS, Prisma, Firebase</article>
    <article>Apps React Native, Flutter, PWA</article>
    <article>CMS/Shop JAMstack and GraphQL</article>
  </Content>
)
export default WhatIWannaDo
