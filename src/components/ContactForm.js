import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { API, graphqlOperation } from 'aws-amplify'
import React, { useState } from 'react'

import { sendMail as sendMailMutation } from '../graphql/mutations'
import { useForm } from '../hooks/useForm'
import H2 from '../typo/h2'

const ContactForm = () => {
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

  if (submited) return <H2>Thanks</H2>

  return (
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
        type="email"
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
}

export default ContactForm
