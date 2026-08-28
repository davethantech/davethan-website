import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://davethan.tech';

function htmlResponse(content: string, status = 200) {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Newsletter — Davethan Technologies</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: #f8f9fc; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }
    .card { background: #fff; border: 1px solid #e4e9f2; border-radius: 16px; max-width: 480px; width: 100%; padding: 48px 40px; text-align: center; }
    img { width: 100px; margin-bottom: 24px; }
    h2 { color: #0a0d53; font-size: 22px; font-weight: 700; margin-bottom: 12px; }
    p { color: #5b6472; font-size: 15px; line-height: 1.7; margin-bottom: 24px; }
    a { color: #06bae1; font-weight: 600; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <img src="${SITE_URL}/davethan_logo.webp" alt="Davethan Technologies" />
    ${content}
    <a href="${SITE_URL}">&larr; Return to website</a>
  </div>
</body>
</html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return htmlResponse(
      `<h2>Invalid Link</h2><p>This unsubscribe link is invalid or has expired. Please contact us at <a href="mailto:info@davethan.tech">info@davethan.tech</a>.</p>`,
      400
    );
  }

  let email: string;
  try {
    email = Buffer.from(token, 'base64').toString('utf-8');
    // Basic sanity check
    if (!email.includes('@')) throw new Error('Invalid token');
  } catch {
    return htmlResponse(
      `<h2>Invalid Link</h2><p>This unsubscribe link is malformed. Please contact us at <a href="mailto:info@davethan.tech">info@davethan.tech</a>.</p>`,
      400
    );
  }

  try {
    const payload = await getPayload({ config: configPromise });

    const { docs } = await payload.find({
      collection: 'subscribers',
      where: { email: { equals: email } },
      limit: 1,
    });

    if (docs.length === 0) {
      return htmlResponse(
        `<h2>Already Unsubscribed</h2><p>The address <strong>${email}</strong> is not on our newsletter list.</p>`,
        200
      );
    }

    const subscriber = docs[0];

    if (subscriber.status === 'unsubscribed') {
      return htmlResponse(
        `<h2>Already Unsubscribed</h2><p>You've already been removed from our newsletter list.</p>`,
        200
      );
    }

    // Update status to 'unsubscribed'
    await payload.update({
      collection: 'subscribers',
      id: subscriber.id,
      data: { status: 'unsubscribed' },
    });

    return htmlResponse(
      `<h2>You've been unsubscribed.</h2><p>The address <strong>${email}</strong> has been removed from the Davethan Technologies newsletter. You won't receive any more emails from us.</p><p>Changed your mind? <a href="mailto:info@davethan.tech">Contact us</a> and we'll add you back.</p>`,
      200
    );
  } catch (error) {
    console.error('[Unsubscribe] Error:', error);
    return htmlResponse(
      `<h2>Something went wrong.</h2><p>We couldn't process your request. Please contact us at <a href="mailto:info@davethan.tech">info@davethan.tech</a> and we'll remove you manually.</p>`,
      500
    );
  }
}
