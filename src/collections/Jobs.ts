import type { CollectionConfig } from 'payload';
import {
  lexicalEditor,
  HeadingFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  UnorderedListFeature,
  OrderedListFeature,
  BlockquoteFeature,
  LinkFeature,
  ParagraphFeature,
  AlignFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical';

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
      editor: lexicalEditor({
        features: [
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          StrikethroughFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          BlockquoteFeature(),
          LinkFeature(),
          AlignFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      label: 'Job Description',
      required: true,
      admin: {
        description: 'Use the toolbar above to format the job description. Use Heading 2 for sections (e.g. "Responsibilities", "Requirements"), bullet lists for items.',
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
