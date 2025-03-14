import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, mobile, subject, message } = await request.json();

    // Create a transporter with your Google Workspace credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. info@livingglorysocialcare.com
        pass: process.env.EMAIL_PASS, // the Google Workspace App Password
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
