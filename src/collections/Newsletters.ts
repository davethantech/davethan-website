import type { CollectionConfig, CollectionBeforeChangeHook } from 'payload';
import { Resend } from 'resend';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://davethan.tech';

function buildNewsletterHtml(subject: string, body: string, unsubscribeUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${subject}</title>
    </head>
    <body style="margin:0;padding:0;background:#f8f9fc;font-family:sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:40px 16px;">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;border:1px solid #e4e9f2;overflow:hidden;">
              <tr>
                <td style="background:#0a0d53;padding:28px 40px;">
                  <img src="${SITE_URL}/davethan_logo.webp" alt="Davethan Technologies" width="110" style="display:block;" />
                </td>
              </tr>
              <tr>
                <td style="padding:40px;color:#0a0d53;font-size:15px;line-height:1.8;">
                  ${body}
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px;">
                  <hr style="border:none;border-top:1px solid #e4e9f2;" />
                </td>
              </tr>
              <tr>
                <td style="padding:24px 40px;text-align:center;">
                  <p style="color:#9ca3af;font-size:12px;margin:0 0 8px;">
                    You're receiving this because you subscribed to the Davethan Technologies newsletter.
                  </p>
                  <a href="${unsubscribeUrl}" style="color:#06bae1;font-size:12px;">Unsubscribe</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

const sendNewsletterHook: CollectionBeforeChangeHook = async ({ data, originalDoc, req }) => {
  // Only fire when status transitions to 'sent' for the first time
  if (data.status !== 'sent') return data;
  if (originalDoc?.status === 'sent') return data; // Already sent — skip entirely

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { payload } = req;

  try {
    // Fetch ONLY active subscribers — unsubscribed users are excluded
    const { docs: subscribers } = await payload.find({
      collection: 'subscribers',
      where: { status: { equals: 'active' } },
      limit: 50000,
      depth: 0,
    });

    if (subscribers.length === 0) {
      console.warn('[Newsletter] No active subscribers found. Nothing sent.');
      // Still update the data with 0 recipients so the admin reflects this
      return { ...data, sentAt: new Date().toISOString(), recipientCount: 0 };
    }

    const fromEmail = 'noreply@davethan.tech';
    const BATCH_SIZE = 50;
    let sent = 0;

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);

      await Promise.all(
        batch.map((subscriber) => {
          const token = Buffer.from(subscriber.email).toString('base64');
          const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?token=${token}`;

          return resend.emails.send({
            from: `Davethan Technologies <${fromEmail}>`,
            to: [subscriber.email],
            subject: data.subject,
            html: buildNewsletterHtml(data.subject, data.body, unsubscribeUrl),
            headers: {
              'List-Unsubscribe': `<${unsubscribeUrl}>`,
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            },
          });
        })
      );

      sent += batch.length;
    }

    console.log(`[Newsletter] Successfully sent to ${sent} active subscriber(s).`);

    // Inject sentAt and recipientCount directly into the data being saved.
    // This is atomic — no second payload.update() call needed.
    return {
      ...data,
      sentAt: new Date().toISOString(),
      recipientCount: sent,
    };
  } catch (error) {
    console.error('[Newsletter] Error during send:', error);
    // Still save the newsletter but mark it with 0 recipients so admin can retry
    return { ...data, recipientCount: 0 };
  }
};

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'status', 'recipientCount', 'sentAt'],
    description: 'Compose newsletters and send them to all active subscribers directly from here.',
    group: 'Email',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Email Subject Line',
      admin: {
        description: 'This will be the subject line recipients see in their inbox.',
      },
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      label: 'Email Body (HTML supported)',
      admin: {
        description:
          'Write the newsletter content here. Basic HTML tags are supported (e.g. <b>, <a href="">, <br>).',
        rows: 20,
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: '📝 Draft (not sent)', value: 'draft' },
        { label: '🚀 Send Now', value: 'sent' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        description:
          'Change to "Send Now" and save to immediately dispatch this newsletter to all ACTIVE subscribers. ⚠️ This action cannot be undone.',
      },
    },
    {
      name: 'sentAt',
      type: 'date',
      label: 'Sent At',
      admin: {
        readOnly: true,
        description: 'Automatically set when the newsletter is dispatched.',
        date: { displayFormat: 'dd/MM/yyyy HH:mm' },
      },
    },
    {
      name: 'recipientCount',
      type: 'number',
      label: 'Recipients',
      admin: {
        readOnly: true,
        description: 'Number of active subscribers this newsletter was sent to.',
      },
    },
  ],
  hooks: {
    beforeChange: [sendNewsletterHook],
  },
};
