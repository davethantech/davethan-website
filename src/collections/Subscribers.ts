import { CollectionConfig } from 'payload';
import { isAdmin } from '../access';

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Anyone can subscribe
    read: isAdmin, // Only admins can read the list
    update: isAdmin,
    delete: isAdmin,
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
