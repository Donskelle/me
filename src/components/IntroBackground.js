

import styled from 'styled-components'

import { colors } from '../../tailwind'
import { ContentBG } from './elements'


const IntroBackground = styled(ContentBG)`
  animation: gradientBgAnimation 15s ease infinite alternate;
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

  @keyframes gradientBgAnimation {
    0% {
      background-size: 100% 100%;
    }
    100% {
      background-size: 110% 110%;
    }
  }
`
export {
    IntroBackground
}