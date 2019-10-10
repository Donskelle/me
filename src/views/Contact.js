import React from 'react'
import TextField from '@material-ui/core/TextField'
import { animated } from 'react-spring'
import styled from 'styled-components'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'
import H2 from '../typo/h2'

const Contact = ({ offset }) => {
  // const sendMail = () => {

  // }

  return (
    <>
      <ContentBG speed={0.2} offset={offset} bg={colors['blue-light']} />
      <Content speed={0.5} offset={offset}>
        <H2>Lets get in touch !</H2>
        <div>
          <TextField label="Name" margin="normal" variant="outlined" />
          <TextField label="E-Mail" margin="normal" variant="outlined" />
          <TextField
            label="Nachricht"
            margin="normal"
            variant="outlined"
            multiline
            rows="4"
          />
        </div>
      </Content>
    </>
  )
}

export default Contact
