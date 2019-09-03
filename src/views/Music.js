import React from 'react'
// import { useInView } from 'react-intersection-observer'
// import { useTrail, animated } from 'react-spring'

// import styled from 'styled-components'
// import tw from 'tailwind.macro'
// import { Contentful } from '../images'
import H2 from '../typo/h2'
import { Content } from '../components/elements'

const WhatIDo = ({ offset }) => {
  return (
    <Content speed={1} offset={offset}>
      <H2>Let some music here</H2>
    </Content>
  )
}
export default WhatIDo
