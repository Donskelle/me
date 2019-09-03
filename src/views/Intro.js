import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useSpring, animated } from 'react-spring'

import './intro.css'
import { Content, ContentBG } from '../components/elements'
import H1 from '../typo/h1'
import Subheading from '../typo/subheading'
import { colors } from '../../tailwind'
import GitImg from '../components/gitimg'
import {useGithubInfo} from '../hooks/static/githubInfo'

const Wrapper = styled.div`
  ${tw`w-full  text-center flex-col xl:w-2/3 flex md:flex-row md:text-left`};
`
const Container = styled.div`
  ${tw`flex-1 self-stretch`};
`
const ContentStyledBG = styled(ContentBG)`
  background: linear-gradient(45deg, ${colors['blue-darkest']}, transparent),
    repeating-linear-gradient(
      45deg,
      ${colors['blue-light']} 0%,
      ${colors['blue-light']} 5%,
      transparent 5%,
      transparent 10%
    ),
    ${colors['blue-darker']}
      repeating-linear-gradient(
        -45deg,
        ${colors['blue-dark']} 0%,
        ${colors['blue-dark']} 5%,
        transparent 5%,
        transparent 10%
      );
`
const ImgWrapper = styled(animated.div)`
  ${tw`w-32 xl:w-48 mx-auto`};
`
const ImgDes = styled.p`
  ${tw`text-center`};
`
const ImgRoll = styled(animated.div)`
  ${tw`h-auto shadow-lg rounded-full overflow-hidden`};
`
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const calcXys = ({ clientX: x, clientY: y, target }) => {
  const rect = target.getBoundingClientRect()
  return [
    -(y - rect.top - target.offsetHeight / 2) / 4,
    (x - rect.left - target.offsetWidth / 2) / 4,
    1.3,
  ]
}

const Intro = ({ offset }) => {
  const info = useGithubInfo();
  const [flipped, setFlip] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5 },
  }))

  return (
    <>
      <ContentStyledBG
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
              onMouseMove={event => {
                set({ xys: calcXys(event) })
              }}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              className="imgWrapper"
            >
              <ImgRoll
                style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
                className="imgRoll"
              >
                <GitImg />
              </ImgRoll>
              <ImgRoll
                className="imgRoll"
                style={{
                  opacity,
                  transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                  marginTop: '-100%',
                }}
              >
                <GitImg />
              </ImgRoll>
            </ImgWrapper>
            <ImgDes>{info.name}</ImgDes>
            <ImgDes>working @ {info.company}</ImgDes>
          </Container>
        </Wrapper>
      </Content>
    </>
  )
}

export default Intro
