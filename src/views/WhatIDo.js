import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useTrail, animated } from 'react-spring'

// import styled from 'styled-components'
// import tw from 'tailwind.macro'
// import { contentful, css3, flutter } from '../images'
import H2 from '../typo/h2'
import { Content } from '../components/elements'
import doList from '../data/do'

const WhatIDo = ({ offset }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  })
  const trail = useTrail(doList.length, { opacity: inView ? 1 : 0 })

  return (
    <Content speed={1} offset={offset}>
      <H2 ref={ref}>What I do</H2>
      {/* <img src={contentful} alt="Contentful" />
      <img src={css3} alt="css3" />
      <img src={flutter} alt="flutter" /> */}

      {trail.map((props, i) => (
        <animated.div key={doList[i].name} style={props}>
          {doList[i].name} {doList[i].list.join(', ')}
        </animated.div>
      ))}
    </Content>
  )
}
export default WhatIDo
