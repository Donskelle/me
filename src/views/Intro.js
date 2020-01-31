import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Content } from '../components/elements'
import GitImgRoll from '../components/GitImgRoll'
import { IntroBackground } from '../components/IntroBackground'
import { useGithubInfo } from '../hooks/static/githubInfo'
import H1 from '../typo/h1'
import Subheading from '../typo/subheading'

const Wrapper = styled.div`
  ${tw`w-full  text-center flex-col xl:w-2/3 flex md:flex-row md:text-left`};
`
const Container = styled.div`
  ${tw`flex-1 self-stretch`};
`

const ImgDes = styled.p`
  ${tw`text-center`};
`

const Intro = ({ offset }) => {
  const info = useGithubInfo()

  return (
    <>
      <IntroBackground
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
          <Container>
            <GitImgRoll />
            <ImgDes>{info.name}</ImgDes>
            <ImgDes>working @ {info.company}</ImgDes>
          </Container>
        </Wrapper>
      </Content>
    </>
  )
}

export default Intro
