const nodemailer = require('nodemailer');
const from = process.env.MAIL_USER;

module.exports.sendMail = async function (to, subject, text) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  transporter
    .verify()
    .then(() => console.info('Connected to email server'))
    .catch(() =>
      console.warn(
        'Unable to connect to email server. Make sure you have configured the SMTP options in .env'
      )
    );

  //DEBUG
  console.log('Message sent: %s to: ', to, 'subject', subject);
 

//if (checkEmailAddress(to) && process.env.NODE_ENV === 'production') {
    // if(process.env.NODE_ENV === 'development' && process.env.NODE_ENV !== 'production'){
    let info = await transporter.sendMail({
      from: from, // '"Fred Foo 👻" <foo@example.com>',
      to: to, //'bar@example.com, baz@example.com',
      subject: subject, // 'Hello ✔', // Subject line
      text: text,}) //'Hello world?', // plain text body
    //   html: `   <b>Task: </b>${taskTheme}<br/>
    //             ${text}`, // html body
    // });

    console.log('info.messageId', info.messageId);
    return true;
//   } else {
//     return 'Некорректный адрес электронной почты!';
//   }
};

// function checkEmailAddress(email) {
//   let isMail = false;
//   if (email.indexOf('@')) isMail = true;

//   return isMail;
// }