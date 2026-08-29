import type { CollectionConfig } from 'payload';

/**
 * Posts Collection
 * Full blog post schema — wires to the /blog page and /blog/[slug] detail page.
 * Content is stored in MongoDB Atlas and images served via Cloudinary CDN (via Media collection).
 */
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'publishedDate', 'updatedAt'],
    description: 'Create and manage blog articles. Mark one post as "Featured" to pin it at the top of the blog.',
    group: 'Content',
    preview: (doc) => {
      if (doc?.slug) {
        return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${doc.slug}`;
      }
      return null;
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    // ─── Identity ────────────────────────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      label: 'Post Title',
      required: true,
      admin: {
        placeholder: 'e.g. 5 Signs Your IT Infrastructure Needs an Upgrade',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-safe identifier. Example: "5-signs-your-it-infrastructure-needs-an-upgrade". Must be unique.',
        placeholder: 'auto-filled-from-title',
      },
    },

    // ─── Taxonomy ─────────────────────────────────────────────────────────────
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Category',
      admin: {
        description: 'Select the category this post belongs to (Managed IT, Cybersecurity, Cloud, IT Consultancy).',
      },
    },

    // ─── Hero Image ───────────────────────────────────────────────────────────
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
      admin: {
        description: 'Main image shown on the blog listing card and the article header. Recommended: 1200×630px.',
      },
    },

    // ─── Post Metadata ────────────────────────────────────────────────────────
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt / Snippet',
      required: true,
      admin: {
        description: 'Short summary shown on the blog listing cards (1–2 sentences).',
        rows: 3,
      },
    },
    {
      name: 'readTime',
      type: 'text',
      label: 'Read Time',
      admin: {
        description: 'Estimated read time, e.g. "6 Min".',
        placeholder: '5 Min',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Post',
      defaultValue: false,
      admin: {
        description: 'Check to display this post as the featured article at the top of the blog page. Only one post should be featured at a time.',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd MMM yyyy',
        },
      },
    },

    // ─── Author ───────────────────────────────────────────────────────────────
    {
      name: 'author',
      type: 'text',
      label: 'Author Name',
      required: true,
      admin: {
        placeholder: 'e.g. Davethan Security Team',
      },
    },
    {
      name: 'authorRole',
      type: 'text',
      label: 'Author Role / Department',
      admin: {
        placeholder: 'e.g. CYBERSECURITY',
        description: 'Displayed in uppercase below the author name in the sidebar.',
      },
    },

    // ─── Content ──────────────────────────────────────────────────────────────
    {
      name: 'content',
      type: 'richText',
      label: 'Article Content',
      required: true,
      admin: {
        description: 'Select any text to reveal the formatting toolbar. Use Heading 2 for section titles, Heading 3 for sub-sections. Bold, italic, lists, and links are all available.',
      },
    },
  ],
};
