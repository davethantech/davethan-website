import type { CollectionConfig } from 'payload';

/**
 * Media Collection
 * Handles image uploads for blog posts and any other site content.
 * Images are stored on Cloudinary via the cloud-storage plugin configured in payload.config.ts.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    description: 'Upload images for blog posts and site content. Images are served via Cloudinary CDN.',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  upload: {
    // Accepted MIME types
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
      admin: {
        description: 'Describe the image for screen readers and SEO. E.g. "Team collaborating in office"',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption (optional)',
      admin: {
        description: 'Optional caption shown beneath the image on the post.',
      },
    },
  ],
};
