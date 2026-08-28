import type { CollectionConfig } from 'payload';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
              <!-- Header -->
              <tr>
                <td style="background:#0a0d53;padding:28px 40px;">
                  <img src="${SITE_URL}/davethan_logo.webp" alt="Davethan Technologies" width="110" style="display:block;" />
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding:40px;color:#0a0d53;font-size:15px;line-height:1.8;">
                  ${body}
                </td>
              </tr>
              <!-- Divider -->
              <tr>
                <td style="padding:0 40px;">
                  <hr style="border:none;border-top:1px solid #e4e9f2;" />
                </td>
              </tr>
              <!-- Footer -->
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
    // Read-only stats — populated automatically after send
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
    afterChange: [
      async ({ doc, previousDoc, req }) => {
        // Only trigger when status transitions from anything → 'sent'
        if (doc.status !== 'sent') return;
        if (previousDoc?.status === 'sent') return; // Guard: already sent — skip

        const { payload } = req;

        try {
          // Fetch ONLY active subscribers (excludes unsubscribed users)
          const { docs: subscribers } = await payload.find({
            collection: 'subscribers',
            where: {
              status: { equals: 'active' },
            },
            limit: 50000, // Support large lists
            depth: 0,
          });

          if (subscribers.length === 0) {
            console.warn('[Newsletter] No active subscribers found. Nothing sent.');
            return;
          }

          const fromEmail = 'noreply@davethan.tech';

          // Send in batches of 50 to stay within Resend rate limits
          const BATCH_SIZE = 50;
          let sent = 0;

          for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
            const batch = subscribers.slice(i, i + BATCH_SIZE);

            await Promise.all(
              batch.map((subscriber) => {
                // Build a unique, one-click unsubscribe token per subscriber
                const token = Buffer.from(subscriber.email).toString('base64');
                const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?token=${token}`;

                return resend.emails.send({
                  from: `Davethan Technologies <${fromEmail}>`,
                  to: [subscriber.email],
                  subject: doc.subject,
                  html: buildNewsletterHtml(doc.subject, doc.body, unsubscribeUrl),
                  headers: {
                    // RFC 8058 one-click unsubscribe header — respected by Gmail/Outlook
                    'List-Unsubscribe': `<${unsubscribeUrl}>`,
                    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
                  },
                });
              })
            );

            sent += batch.length;
          }

          // Update the newsletter record with send stats
          await payload.update({
            collection: 'newsletters',
            id: doc.id,
            data: {
              sentAt: new Date().toISOString(),
              recipientCount: sent,
            },
          });

          console.log(`[Newsletter] Successfully sent to ${sent} active subscribers.`);
        } catch (error) {
          console.error('[Newsletter] Error sending newsletter:', error);
        }
      },
    ],
  },
};
