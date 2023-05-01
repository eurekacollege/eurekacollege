// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   const { fname, lname, email, message } = req.body;
//   console.log(fname, lname, email, message )

//   // Create a transporter object using nodemailer and the Sendinblue SMTP server
//   const transporter = nodemailer.createTransport({
//     host: 'smtp-relay.sendinblue.com',
//     port: 587,
//     auth: {
//       user: 'sangilemiljan@gmail.com',
//       pass: 'NJt9AwgPvR04fnZp',
//     },
//     tls: {
//         rejectUnauthorized: false
//       }
//   });

//   try {
//     // Send the email using nodemailer
//     await transporter.sendMail({
//       from: email,
//       to: 'sangilemiljan@gmail.com',
//       subject: `New message from ${fname} ${lname}`,
//       text: message,
//     });

//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred while sending the email' });
//   }
// }

import nodemailer from "nodemailer";

// Set a cooldown period of 30 seconds between each email submission
const COOLDOWN_PERIOD = 30000;
let lastSubmitTime = 0;

export default async function handler(req, res) {
  const { fname, lname, email, message, subject } = req.body;
  console.log(fname, lname, email, message);

  // Check if the cooldown period has elapsed since the last submission
  const currentTime = Date.now();
  if (currentTime - lastSubmitTime < COOLDOWN_PERIOD) {
    return res
      .status(429)
      .json({ message: "Please wait before submitting another email." });
  }

  //   // Validate the input fields
  //   if (!fname || !lname || !email || !message || !subject) {
  //     return res.status(400).json({ message: 'Please fill in all required fields.' });
  //   }

  //   // Validate the email address
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   if (!emailRegex.test(email)) {
  //     return res.status(400).json({ message: 'Please enter a valid email address.' });
  //   }

  const errors = [];
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (!fname) {
    errors.push("Please enter your first name.");
  } else if (!nameRegex.test(fname)) {
    errors.push("Please enter a valid first name.");
  }
  if (!lname) {
    errors.push("Please enter your last name.");
  } else if (!nameRegex.test(lname)) {
    errors.push("Please enter a valid last name.");
  }
  if (!email) {
    errors.push("Please enter your email address.");
  } else {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }
  }
  if (!message) {
    errors.push("Please enter a message.");
  } else if (!/^.{1,500}$/.test(message)) {
    errors.push("Please enter a message with no more than 500 characters.");
  }
  if (!subject) {
    errors.push("Please enter a subject.");
  } else if (!/^.{1,100}$/.test(subject)) {
    errors.push("Please enter a subject with no more than 100 characters.");
  }
  if (errors.length > 0) {
    return res.status(400).json({ message: errors });
  }

  // Create a transporter object using nodemailer and the Sendinblue SMTP server
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Send the email using nodemailer
    await transporter.sendMail({
      from: email,
      to: "eurekacollegecanada@gmail.com",
      subject: `${subject} from ${fname} ${lname}`,
      text: message,
    });

    // Update the last submission time
    lastSubmitTime = currentTime;

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "There has been an error try again later" });
  }
}
