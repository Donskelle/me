import React from 'react'
import TextField from '@material-ui/core/TextField'
import { animated } from 'react-spring'

import styled from 'styled-components'
import tw from 'tailwind.macro'

import {
  Content,
  ContentBG,
  UpDown,
  Emoji,
  UpDownWide,
} from '../components/elements'
import { colors, textSizes } from '../../tailwind'
import H2 from '../typo/h2'

// import hook from '../sound/hook.mp3'
// const AnimatedHeader = styled(animated.h1)`

const HookDiv = styled(animated.div)`
  background: green;
`
const HookWrapper = styled(animated.div)`
  ${tw`absolute`}
  top: calc(50% - 2px);
  right: 0;
  height: 5px;
  background: black;
  width: 30px;
`

const Contact = ({ offset }) => {
  const [hidden, setHidden] = React.useState(false)
  const handleChange = () => setHidden(true)

  return (
    <>
      <ContentBG speed={0.2} offset={offset} bg={colors['blue-light']}>
        <UpDown>
          <Emoji
            hiddenMobile
            size={textSizes.xl}
            left="10%"
            top="20%"
            emoji="🚀"
          />
          <Emoji
            width={48}
            left="60%"
            size={textSizes['5xl']}
            top="70%"
            emoji="🚀"
          />
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
      </ContentBG>
      <Content speed={0.5} offset={offset}>
        <H2>Lets get in touch !</H2>
        <HookDiv>
          <TextField
            label="Name"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            label="E-Mail"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            label="Nachricht"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            multiline
            rows="4"
          />
        </HookDiv>
        <HookWrapper>
          {/* <Hook></Hook> */}
        </HookWrapper>
      </Content>
    </>
  )
}

export default Contact
