import React from 'react'
import TextField from '@material-ui/core/TextField'
import { animated } from 'react-spring'

import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'
import H2 from '../typo/h2'


const HookDiv = styled(animated.div)`
  background: green;
`

const Contact = ({ offset }) => {
  const sendMail = () => {

  }

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
            onChange
            multiline
            rows="4"
          />

        </HookDiv>
      </Content>
    </>
  )
}

export default Contact
