import React from 'react'
import TextField from '@material-ui/core/TextField'
import { animated } from 'react-spring'

import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'
import H2 from '../typo/h2'

// import hook from '../sound/hook.mp3'

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
  return (
    <>
      <ContentBG speed={0.2} offset={offset} bg={colors['blue-light']} />
      <Content speed={0.5} offset={offset}>
        <H2>Lets get in touch !</H2>
        <HookDiv>
          <TextField
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="E-Mail"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Nachricht"
            margin="normal"
            variant="outlined"
            multiline
            rows="4"
          />
        </HookDiv>
        <HookWrapper>{/* <Hook></Hook> */}</HookWrapper>
      </Content>
    </>
  )
}

export default Contact
