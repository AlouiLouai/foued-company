
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import ContactFormEmail from '@/components/emails/contact-form-email';
import { render } from '@react-email/render';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, discussion } = await req.json();

    if (!name || !email || !message || !discussion) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = await render(ContactFormEmail({ name, email, message, discussion }));

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'New Contact Form Submission',
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
