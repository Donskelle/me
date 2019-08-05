import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { graphql, useStaticQuery } from 'gatsby'
import { useSpring, animated } from 'react-spring'

import { Content, ContentBG } from '../components/elements'
import H1 from '../typo/h1'
import Subheading from '../typo/subheading'
import { colors } from '../../tailwind'
import GitImg from '../components/gitimg'

const Wrapper = styled.div`
  ${tw`w-full  text-center flex-col xl:w-2/3 flex md:flex-row md:text-left`};
`
const Container = styled.div`
  ${tw`flex-1 self-stretch`};
`
const ImgWrapper = styled(animated.div)`
  ${tw`w-32 xl:w-48 mx-auto`};
`
const ImgDes = styled.p`
  ${tw`text-center`};
`
const ImgRoll = styled(animated.div)`
  ${tw`rounded-full h-auto shadow-lg overflow-hidden`};
`
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Intro = ({ offset }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          name
          company
        }
      }
    }
  `)
  const [flipped, setFlip] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <>
      <ContentBG
        bg={colors['green-darkest']}
        speed={0.2}
        offset={offset}
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      />
      <Content speed={0.7} offset={offset}>
        <Wrapper>
          <Container>
            <H1>Hi there,</H1>
            <Subheading>I like to build stuff</Subheading>
          </Container>
          <Container onClick={() => setFlip(state => !state)}>
            <ImgWrapper
              style={{ transform: props.xys.interpolate(trans) }}
              onMouseMove={({ clientX: x, clientY: y, target }) => {
                const rect = target.getBoundingClientRect()
                const xys = [
                  -(y - rect.top - target.offsetHeight / 2) / 4,
                  (x - rect.left - target.offsetWidth / 2) / 4,
                  1.4,
                ]
                set({ xys })
              }}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
            >
              <ImgRoll
                style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
              >
                <GitImg />
              </ImgRoll>
              <ImgRoll
                style={{
                  opacity,
                  transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                  marginTop: '-100%',
                }}
              >
                <GitImg />
              </ImgRoll>
            </ImgWrapper>
            <ImgDes>{data.github.viewer.name}</ImgDes>
            <ImgDes>working @ {data.github.viewer.company}</ImgDes>
          </Container>
        </Wrapper>
      </Content>
    </>
  )
}

export default Intro
