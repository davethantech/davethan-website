import { CollectionConfig } from 'payload';
import { isAdmin } from '../access';

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'formType', 'createdAt'],
  },
  access: {
    create: () => true, // allow public submissions
    read: isAdmin, // only super-admins can read
    update: isAdmin,
    delete: isAdmin,
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
