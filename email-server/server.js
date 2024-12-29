// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, company, email, phone, projectIdea } = req.body;

  // Basic validation
  if (!name || !company || !email || !phone || !projectIdea) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: 'gundapuneniakash@gmail.com', // list of receivers
    subject: `New Message from "${name}"`,
    text: `
      You have received a new project discussion request.

      Name: ${name}
      Company: ${company}
      Email: ${email}
      Phone: ${phone}

      Message:
      ${projectIdea}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${projectIdea}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
