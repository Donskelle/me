import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Content, ContentBG } from '../components/elements'
import { colors } from '../../tailwind'
import { useForm } from '../hooks/useForm'
import { sendMail as sendMailMutation } from '../graphql/mutations'
import H2 from '../typo/h2'

const Contact = ({ offset }) => {
  const [{ name, email, message }, setValue] = useForm({})
  const [formSending, setFormSending] = useState(false)
  const [submited, setSubmited] = useState(false)

  const sendMail = e => {
    e.preventDefault()
    setFormSending(true)
    API.graphql(graphqlOperation(sendMailMutation, { name, email, message }))
      .then(() => setSubmited(true))
      .catch(err => alert(err))
      .finally(() => setFormSending(false))
  }

  const form = submited ? (
    <H2>Thanks</H2>
  ) : (
    <form onSubmit={sendMail} disabled={formSending}>
      <TextField
        name="name"
        label="Name"
        margin="normal"
        variant="outlined"
        onChange={setValue}
        required
      />
      <TextField
        name="email"
        label="E-Mail"
        margin="normal"
        variant="outlined"
        onChange={setValue}
        required
      />
      <TextField
        name="message"
        label="Message"
        margin="normal"
        variant="outlined"
        multiline
        rows="4"
        onChange={setValue}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  )

  return (
    <>
      <ContentBG speed={0.2} offset={offset} bg={colors['blue-light']} />
      <Content speed={0.5} offset={offset}>
        <H2>Lets get in touch !</H2>
        {form}
      </Content>
    </>
  )
}

export default Contact
