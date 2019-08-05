import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import { textSizes } from '../../tailwind'

export const Content = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50 overflow-y-hidden`};
`
export const ContentBG = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
`

const Wrapper = styled.span`
  ${tw`absolute`};
  ${props => props.hiddenMobile && 'display: none;'};
  left: ${props => props.left};
  top: ${props => props.top};
  font-size: ${props => props.size};
`

export const Emoji = ({ left, top, hiddenMobile, emoji }) => {
  const randomSize = Math.floor(Math.random() * textSizes.length)
  const size = textSizes[Object.keys(textSizes)[randomSize]]
  return (
    <Wrapper left={left} top={top} hiddenMobile={hiddenMobile} fontSize={size}>
      {emoji}
    </Wrapper>
  )
}

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  ${tw`pin absolute`};
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  ${tw`pin absolute`};
`