import { getPayloadClient } from '@/lib/payload';
import BlogContent from './BlogContent';
import type { Post, Category } from '@/payload-types';

export const metadata = {
  title: 'The Blog | Davethan Technologies Limited',
  description: 'Stay up to date on tips, tricks & trends for IT, Cybersecurity & Cloud Strategy',
  openGraph: {
    title: 'The Blog | Davethan Technologies Limited',
    description: 'Stay up to date on tips, tricks & trends for IT, Cybersecurity & Cloud Strategy.',
    url: 'https://davethan.tech/blog',
  },
};

// Re-validate at most every 60 seconds (ISR) — new posts appear within a minute of publishing
export const revalidate = 60;

export default async function BlogPage() {
  const payload = await getPayloadClient();

  // Fetch all posts, newest first
  const { docs: allPosts } = await payload.find({
    collection: 'posts',
    sort: '-publishedDate',
    limit: 50,
    depth: 2, // populate category and heroImage relationships
  });

  // Fetch all categories for the filter bar
  const { docs: allCategories } = await payload.find({
    collection: 'categories',
    sort: 'title',
    limit: 100,
  });

  // Identify the featured post (first one marked featured, else most recent)
  const featuredPost = (allPosts as Post[]).find((p) => p.featured) ?? (allPosts[0] as Post) ?? null;

  // All non-featured posts go into the grid
  const gridPosts = (allPosts as Post[]).filter((p) => p.id !== featuredPost?.id);

  return (
    <BlogContent
      allPosts={gridPosts}
      featuredPost={featuredPost}
      categories={allCategories as Category[]}
    />
  );
}
