import React from 'react'
// import styled from 'styled-components'
// import tw from 'tailwind.macro'

import {
  Content,
  ContentBG,
  UpDown,
  Emoji,
  UpDownWide,
} from '../components/elements'
import { colors, textSizes } from '../../tailwind'

const Contact = ({ offset }) => (
  <>
    <ContentBG speed={0.2} offset={offset} bg={colors['blue-light']}>
      <UpDown>
        <Emoji hiddenMobile size={textSizes.xl} left="10%" top="20%" emoji="🚀" />
        <Emoji width={48} left="60%"  size={textSizes['5xl']} top="70%" emoji="🚀" />
        <Emoji emoji="🚀" width={6} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Emoji emoji="🚀" hiddenMobile width={16} left="80%" top="10%" />
        <Emoji emoji="🚀" width={12} left="90%" top="50%" />
        <Emoji emoji="🚀" width={16} left="70%" top="90%" />
        <Emoji emoji="🚀" width={16} left="30%" top="65%" />
        <Emoji emoji="🚀" width={6} left="75%" top="10%" />
        <Emoji emoji="🚀" hiddenMobile width={8} left="45%" top="10%" />
      </UpDownWide>
      <Emoji emoji="🚀" hiddenMobile width={24} left="5%" top="70%" />
      <Emoji emoji="🚀" width={6} left="4%" top="20%" />
      <Emoji width={12} left="50%" top="60%" emoji="🚀" />
      <Emoji width={8} left="95%" top="90%" emoji="🚀" />
      <Emoji hiddenMobile width={24} left="40%" top="80%" emoji="🚀" />
      <Emoji width={8} left="25%" top="5%" emoji="🚀" />
      <Emoji emoji="🚀" width={64} left="95%" top="5%" />
      <Emoji emoji="🚀" hiddenMobile width={64} left="5%" top="90%" />
      <Emoji emoji="🚀" width={6} left="10%" top="10%" />
      <Emoji emoji="🚀" width={12} left="40%" top="30%" />
      <Emoji emoji="🚀" width={16} left="10%" top="50%" />
      <Emoji emoji="🚀" width={8} left="80%" top="70%" />
    </ContentBG>
    <Content speed={0.5} offset={offset}>
      <h2>Lets get in touch !</h2>
    </Content>
  </>
)


export default Contact