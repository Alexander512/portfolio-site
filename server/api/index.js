require('dotenv').config();
const nodemailer = require('nodemailer');

const mailer = ({ firstName, lastName, email, message }) => {

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    },
    secure: false
  });

  const messageData = {
    from: 'stoisolovich.a@gmail.com',
    to: 'stoisolovich.a@gmail.com',
    subject: `message from: <${firstName} ${lastName}> email address: <${email}>`,
    text: `${message}`
  };

  transporter.sendMail(messageData, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });

};

module.exports = mailer;
