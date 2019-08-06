import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useTrail, animated } from 'react-spring'

// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import H2 from '../typo/h2'
import { Content } from '../components/elements'
import wannaDoList from '../data/wannaDo'


const WhatIWannaDo = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  })
  const trail = useTrail(wannaDoList.length, { opacity: inView ? 1 : 0 })


  return (
    <Content speed={0.6} offset={offset}>
      <H2 ref={ref}>What I wanna do?</H2>
      {trail.map((props, i) => (
        <animated.div key={wannaDoList[i].name} style={props}>
          {wannaDoList[i].name} {wannaDoList[i].list.join(', ')}
        </animated.div>
      ))}
    </Content>
  )
}
export default WhatIWannaDo
