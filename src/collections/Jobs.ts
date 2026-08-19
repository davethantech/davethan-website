import type { CollectionConfig } from 'payload';

/**
 * Jobs Collection
 * Manages career openings displayed on the /career page.
 * Set `active` to false to remove a listing from the site without deleting it.
 */
export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'type', 'active', 'updatedAt'],
    description: 'Manage job listings shown on the Career page.',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Job Title',
      required: true,
      admin: {
        placeholder: 'e.g. Senior IT Support Engineer',
      },
    },
    {
      name: 'department',
      type: 'text',
      label: 'Department',
      required: true,
      admin: {
        placeholder: 'e.g. Engineering, Sales, Operations',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      required: true,
      admin: {
        placeholder: 'e.g. Remote · UK, Lagos · Nigeria',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Employment Type',
      required: true,
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' },
      ],
      defaultValue: 'full-time',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Job Description',
      required: true,
      admin: {
        description: 'Full job description, requirements, and responsibilities.',
      },
    },
    {
      name: 'applicationEmail',
      type: 'email',
      label: 'Application Email',
      required: true,
      admin: {
        description: 'Email address applicants should send their CV to.',
        placeholder: 'careers@davethan.tech',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Show on site',
      defaultValue: true,
      admin: {
        description: 'Uncheck to hide this job from the Career page without deleting it.',
      },
    },
  ],
};
