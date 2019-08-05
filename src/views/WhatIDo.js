import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'

const WhatIDo = ({ offset }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 1,
  })

  const props = useSpring({ opacity: inView ? 1 : 0 })

  return (
    <Content speed={1} offset={offset}>
      <H2 ref={ref}>What I do</H2>
      <animated.div style={props}>
        Frontend CSS, Javascript, React, Custom Elements
      </animated.div>
      <animated.div style={props}>
        Backend NodeJS, PHP, MongoDB, MySQL
      </animated.div>
      <animated.div style={props}>
        Apps React Native, Electron, PhoneGap
      </animated.div>
      <animated.div style={props}>
        CMS/Shop Gatsby, Magento, Xt-Commerce, Wordpress, Typo3
      </animated.div>
    </Content>
  )
}
export default WhatIDo
