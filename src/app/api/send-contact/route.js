import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, mobile, subject, message } = await request.json();

    // Create a transporter with your Google Workspace credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,       // or 587 if you prefer
      secure: true,    // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Living Glory Website" <${process.env.EMAIL_USER}>`,
      to: "info@livingglorysocialcare.com",
      subject: subject || "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Subject: ${subject}

        Message:
        ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
