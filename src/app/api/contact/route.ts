import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, name, email, phone, subject, message } = data;

    if (!email || !message || !name) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Payload CMS Form Submissions collection
    const payload = await getPayload({ config: configPromise });

    await payload.create({
      collection: 'form-submissions',
      data: {
        formType: formType || 'contact',
        name,
        email,
        phone: phone || '',
        subjectOrPosition: subject || '',
        message,
      },
    });

    // 2. Send email notification via Resend
    // NOTE: Resend free tier requires sending FROM onboarding@resend.dev until
    // the domain (davethan.tech) is verified in the Resend dashboard.
    // Once verified, change fromEmail to 'noreply@davethan.tech'
    const fromEmail = 'onboarding@resend.dev';
    const toEmail = 'info@davethan.tech';

    const formLabels: Record<string, string> = {
      contact: 'Contact Us',
      consultancy: 'IT Consultancy',
      careers: 'Careers',
    };
    const formLabel = formLabels[formType] ?? 'General';

    await resend.emails.send({
      from: `Davethan Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[${formLabel}] New submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e4e9f2;border-radius:12px;">
          <h2 style="color:#0a0d53;margin-bottom:4px;">New ${formLabel} Submission</h2>
          <hr style="border:none;border-top:1px solid #e4e9f2;margin-bottom:20px;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject / Position:</strong> ${subject || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f8f9fc;padding:16px;border-radius:8px;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border:none;border-top:1px solid #e4e9f2;margin-top:24px;" />
          <p style="color:#9ca3af;font-size:12px;">This submission was automatically saved to the Davethan CMS at <a href="https://davethan-website.vercel.app/admin/collections/form-submissions">Form Submissions</a>.</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
