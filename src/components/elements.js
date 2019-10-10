import styled, { keyframes, css } from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

export const Content = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50 overflow-y-hidden flex-col`};
`
export const ContentBG = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
`

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
