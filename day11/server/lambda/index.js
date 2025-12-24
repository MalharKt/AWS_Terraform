const nodemailer = require("nodemailer");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST"
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_APP_PASSWORD,
  },
  tls: { rejectUnauthorized: true }
});

exports.handler = async (event) => {
  console.log("Incoming event:", JSON.stringify(event));

  // Handle CORS preflight (OPTIONS)
  if (
    event.requestContext &&
    event.requestContext.http &&
    event.requestContext.http.method === "OPTIONS"
  ) {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ""
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { name, email, mobile, course, message } = body;

    if (!name || !email || !mobile || !course) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Please fill all required fields" })
      };
    }

    const adminMailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,   // admin email
      cc: email,                  // cc user optionally
      subject: "New Registration Received",
      text: `
New registration details:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Course: ${course}
Message: ${message || "N/A"}
`
    };

    const userMailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Registration Successful",
      text: `Hello ${name},\n\nThank you for registering for the ${course} course. We have received your details and will get back to you soon.\n\nBest regards,\nTeam`
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    console.log("✅ Admin and user emails sent");

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Registration successful!" })
    };
  } catch (err) {
    console.error("❌ Error sending emails:", err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Failed to send emails", details: err.message || String(err) })
    };
  }
};
