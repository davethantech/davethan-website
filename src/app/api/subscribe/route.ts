import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    // 1. Initialize Payload
    const payload = await getPayload({ config: configPromise });

    // 2. Check if the subscriber already exists
    const existing = await payload.find({
      collection: 'subscribers',
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existing.docs.length > 0) {
      return NextResponse.json(
        { error: 'You are already subscribed!' },
        { status: 400 }
      );
    }

    // 3. Save to Payload CMS (Backup list)
    await payload.create({
      collection: 'subscribers',
      data: {
        email,
        status: 'active',
      },
    });

    // 4. Send Welcome Email via Resend
    // (If the Resend Audience feature is fully set up, we could also use the Contacts API here:
    //  resend.contacts.create({ email, audienceId: '...' }))
    // For now, we send the recommended Welcome email.
    
    const fromEmail = 'noreply@davethan.tech';

    await resend.emails.send({
      from: `Davethan Newsletter <${fromEmail}>`,
      to: [email],
      subject: 'Welcome to the Davethan Newsletter!',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#ffffff;border:1px solid #e4e9f2;border-radius:12px;text-align:center;">
          <img src="https://davethan.tech/davethan_logo.webp" alt="Davethan" width="120" style="margin-bottom:24px;" />
          <h2 style="color:#0a0d53;margin-bottom:16px;">Welcome aboard!</h2>
          <p style="color:#5b6472;font-size:16px;line-height:1.6;margin-bottom:24px;">
            Thank you for subscribing to the Davethan Technologies newsletter. You're now on the list to receive our latest insights on IT strategy, cybersecurity, and digital transformation.
          </p>
          <hr style="border:none;border-top:1px solid #e4e9f2;margin-bottom:24px;" />
          <p style="color:#9ca3af;font-size:12px;">
            If you didn't request this, you can safely ignore this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}
