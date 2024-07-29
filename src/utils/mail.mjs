import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'silas.tromp@ethereal.email',
    pass: 'Ba9NG1ghGX1VmUkqWb' // ethereal password
  },
});

async function sendMail(email,token) {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Email Verification" <maddison53@ethereal.email>', // sender address
      to: `${email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>token : ${token}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    return info;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { sendMail };
