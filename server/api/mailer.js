const nodemailer = require('nodemailer');

const mailer = ({ firstName, lastName, email, message }) => {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    secure: true
  });

  const messageData = {
    from: 'portfolio contact form',
    to: process.env.EMAIL,
    subject: `message from ${firstName} ${lastName}`,
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
