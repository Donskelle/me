import { API, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';

import { sendMail as sendMailMutation } from '../graphql/mutations';
import { useForm } from '../hooks/useForm';
import H2 from '../typo/h2';
import Button from "./Button";
import InputField from "./InputField";
import TextArea from "./TextArea";

const ContactForm = () => {
  const [{ name, email, message }, setValue] = useForm();
  const [formSending, setFormSending] = useState(false);
  const [submited, setSubmited] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    setFormSending(true);
    API.graphql(graphqlOperation(sendMailMutation, { name, email, message }))
      .then(() => setSubmited(true))
      .catch((err) => alert(err))
      .finally(() => setFormSending(false));
  };

  if (submited) return <H2>Thanks</H2>;

  return (
    <form onSubmit={sendMail} disabled={formSending} onChange={setValue}>
      <InputField
        name="name"
        placeholder="Name"
        required
      />
      <InputField
        name="email"
        placeholder="E-Mail"
        type="email"
        required
      />
      <TextArea
        name="message"
        placeholder="Message"
        rows="4"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
