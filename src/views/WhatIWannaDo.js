import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'

const WhatIWannaDo = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  })
  const props = useSpring({ opacity: inView ? 1 : 0 })

  return (
    <Content speed={0.6} offset={offset}>
      <H2 ref={ref}>What I wanna do?</H2>
      <animated.div style={props}>Frontend React, Relay, Svelte 3</animated.div>
      <animated.div style={props}>State Managment Relay, MobX, Apollo, Redux</animated.div>
      <animated.div style={props}>
        Backend Serverless NodeJS, Prisma, Firebase
      </animated.div>
      <animated.div style={props}>Apps React Native, Flutter, PWA</animated.div>
      <animated.div style={props}>CMS/Shop JAMstack based with GraphQL </animated.div>
    </Content>
  )
}
export default WhatIWannaDo
