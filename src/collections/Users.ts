import type { CollectionConfig } from 'payload';

/**
 * Users Collection
 * Admin users who can log into the Payload dashboard.
 */
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    description: 'Admin users who have access to the Payload CMS dashboard.',
    group: 'Admin',
  },
  auth: true,
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'editor',
      required: true,
    },
  ],
};
