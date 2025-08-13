import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, countryCode } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with actual email service)
    // For now, using Gmail as an example
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content
    const emailContent = `
      New Contact Form Submission from GAAC Website
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${countryCode || '+91'} ${phone}
      
      Message:
      ${message}
      
      Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aeroastro_vzg@gitam.in',
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #09C0F9;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${countryCode || '+91'} ${phone}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #09C0F9; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
