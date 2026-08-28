import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://davethan.tech';

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
    const unsubscribeToken = Buffer.from(email).toString('base64');
    const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?token=${unsubscribeToken}`;

    await resend.emails.send({
      from: `Davethan Newsletter <${fromEmail}>`,
      to: [email],
      subject: 'Welcome to the Davethan Newsletter!',
      headers: {
        'List-Unsubscribe': `<${unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f8f9fc;font-family:sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:40px 16px;">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;border:1px solid #e4e9f2;overflow:hidden;">
                  <tr>
                    <td style="background:#0a0d53;padding:28px 40px;">
                      <img src="${SITE_URL}/davethan_logo.webp" alt="Davethan" width="110" style="display:block;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:40px;">
                      <h2 style="color:#0a0d53;margin:0 0 16px;">Welcome aboard! 👋</h2>
                      <p style="color:#5b6472;font-size:15px;line-height:1.8;margin:0 0 20px;">
                        Thank you for subscribing to the Davethan Technologies newsletter. You're now on the list to receive our latest insights on IT strategy, cybersecurity, cloud solutions, and digital transformation.
                      </p>
                      <p style="color:#5b6472;font-size:15px;line-height:1.8;margin:0;">
                        Stay tuned — great things are coming your way.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e4e9f2;" /></td>
                  </tr>
                  <tr>
                    <td style="padding:24px 40px;text-align:center;">
                      <p style="color:#9ca3af;font-size:12px;margin:0 0 8px;">You're receiving this because you subscribed to the Davethan Technologies newsletter.</p>
                      <a href="${unsubscribeUrl}" style="color:#06bae1;font-size:12px;">Unsubscribe</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
