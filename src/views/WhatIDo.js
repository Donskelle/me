import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated, useTransition } from 'react-spring'

// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import doList from '../data/do'

const WhatIDo = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  })
  // const springRef = useRef()
  // const props = useSpring({ opacity: inView ? 1 : 0 })

  // const transRef = useRef()
  const transitions = useTransition(inView ? doList : [], item => item.name, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 400 / doList.length,
    unique: true,
  })

  return (
    <Content speed={1} offset={offset}>
      <H2 ref={ref}>What I do</H2>

      {transitions.map(({ item, key, propsItem }) => (
        <animated.div key={key} style={{...propsItem}}>
          {item.name} {item.list.join(', ')}
        </animated.div>
      ))}
    </Content>
  )
}
export default WhatIDo
