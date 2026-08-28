import { CollectionConfig } from 'payload';

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Anyone can subscribe
    read: ({ req: { user } }) => Boolean(user), // Only admins can read the list
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      admin: {
        description: 'The email address of the subscriber.',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Unsubscribed', value: 'unsubscribed' },
      ],
      defaultValue: 'active',
      required: true,
      admin: {
        description: 'Whether this user is actively receiving newsletters.',
      },
    },
  ],
};
