const axios = require('axios')

exports.handler = (event, context, callback) => {
  const { name, email, message } = event.arguments
  axios({
    url: 'https://api.sendgrid.com/v3/mail/send',
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.SENDGRID_APIKEY}` },
    data: {
      personalizations: [{ to: [{ email: 'donskelle@gmail.com' }] }],
      from: { email },
      subject: `Contact Form Mail from ${name}`,
      content: [{ type: 'text/plain', value: message }],
    },
  })
    .then(() => {
      context.done(null, 'Success')
    })
    .catch(e => {
      callback(e)
    })
}
