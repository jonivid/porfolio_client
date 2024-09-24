// src/app/api/send-email/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Or any other email service like SendGrid
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send the main email to your inbox
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // Your email address
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });

    // Send an automated response email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // Send back to the user
      subject: "Thank you for contacting us!",
      text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\n[Your Name]\n[Your Portfolio Site]`,
    });

    // Return a success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Return an error response
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
