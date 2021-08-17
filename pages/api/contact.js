import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, No } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user:'razzraja13@gmail.com',
      pass: 'wnxhnmyvjtjjjpas',
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'spriyambada2369@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>No: </strong> ${No} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
    });
console.log(emailRes)
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
