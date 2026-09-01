import type { CollectionConfig } from 'payload';
import { isAdminOrEditor } from '../access';

/**
 * Categories Collection
 * Taxonomy for blog posts. Each category has a display title and a URL slug
 * used for filtering on the /blog page.
 */
export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    description: 'Blog post categories. Add new categories here before assigning them to posts.',
    group: 'Content',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Category Name',
      required: true,
      admin: {
        placeholder: 'e.g. Managed IT',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      required: true,
      unique: true,
      admin: {
        placeholder: 'e.g. managed-it',
        description: 'Lowercase, hyphenated. Used for URL filtering.',
      },
    },
  ],
};
