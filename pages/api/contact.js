import nodemailer from "nodemailer"

const emailPass = "yourPassword"

const transporter = nodemailer.createTransport({
        port: 465,     
        host: "smtp.gmail.com",
           auth: {
                user: 'razzraja13@gmail.com',
                pass: 'wnxhnmyvjtjjjpas',
             },
        secure: true,
      });
      
//[1]

export default async (req, res) => {
    const { email,name, No, message } = req.body
//[2]

    // Check if fields are all filled
    if (email==="" || name === "" || No === "" || message === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mailerRes = await mailer({ email, name, text: message, No })
    res.send(mailerRes)
//[4]
}

const mailer = ({ email, name, text, No }) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
        from,
        to: `spriyambada2369@gmail.com`,
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}
// ..............................................................................

// export default function (req, res) {

//     let nodemailer = require('nodemailer')
//     const transporter = nodemailer.createTransport({
//       port: 465,     
//       host: "smtp.gmail.com",
//          auth: {
//               user: 'razzraja13@gmail.com',
//               pass: 'wnxhnmyvjtjjjpas',
//            },
//       secure: true,
//     });
    
//     const mailData = {
//         from: 'razzraja13@gmail.com',
//         to: 'dash.s.sashank@gmail.com',
//         subject: `Message From ${req.body.name}`,
//         text: req.body.message + " | Sent from: " + req.body.email+ "No:"+req.body.No,
//         html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
//     }
//   console.log(mailData)
//     transporter.sendMail(mailData, function (err, info) {
//         if(err)
//           console.log(err)
//         else
//           console.log(info);
//     })
  
//     console.log(req.body.No)
    
//     res.send('success')
//   }