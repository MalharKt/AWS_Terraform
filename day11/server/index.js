const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email Config Error:", error);
  } else {
    console.log("✅ Email server ready to send messages");
  }
});

// POST route to handle form submission
app.post("/send", async (req, res) => {
  const { name, email, mobile, course, message } = req.body;

  if (!name || !email || !mobile || !course) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  //  Admin email with full details
  const adminMailOptions = {
    from: process.env.MY_EMAIL,
    to: email, // Your admin email (set in .env)
    cc: process.env.MY_EMAIL,
    subject: "New Registration Received",
    text: `
New registration details:

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
📚 Course: ${course}
📝 Message: ${message || "N/A"}
`,
  };

  //  User email with thank-you message
  const userMailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: "Registration Successful",
    text: `Hello ${name},\n\nThank you for registering for the ${course} course. We have received your details and will get back to you soon.\n\nBest regards,\nTeam,`
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log("✅ Admin and user emails sent");
    res.status(200).json({ message: "Registration successful!" });
  } catch (err) {
    console.error("❌ Error sending emails:", err);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});