export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'razzraja13@gmail.com',
              pass: 'wnxhnmyvjtjjjpas',
           },
      secure: true,
    });
    
    const mailData = {
        from: 'razzraja13@gmail.com',
        to: 'dash.s.sashank@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email+ "No:"+req.body.No,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body.No)
    res.send('success')
  }