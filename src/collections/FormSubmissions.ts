import { CollectionConfig } from 'payload';

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'formType', 'createdAt'],
  },
  access: {
    create: () => true, // allow public submissions
    read: ({ req: { user } }) => Boolean(user), // only admins can read
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      options: [
        { label: 'Contact Us', value: 'contact' },
        { label: 'IT Consultancy', value: 'consultancy' },
        { label: 'Careers', value: 'careers' },
      ],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'subjectOrPosition',
      type: 'text',
      label: 'Subject / Position of Interest',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
};
