import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files (your website)
app.use(express.static("public")); // change to your folder name if different

// GoDaddy mail SMTP configuration
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form endpoint
app.post("/send", async (req, res) => {
  const { name, email, phone, company, service, budget, message } = req.body;

  const mailOptions = {
    from: `"LaunchQuests Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `🚀 New Inquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>
      <p><b>Service Needed:</b> ${service}</p>
      <p><b>Budget Range:</b> ${budget}</p>
      <p><b>Message:</b><br>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Email failed:", error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));