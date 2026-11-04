import type { MetadataRoute } from 'next';
import { getPayloadClient } from '@/lib/payload';
import { productsData } from '@/lib/productsData';

// Revalidate sitemap dynamically every hour (ISR)
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davethan.tech';
  const now = new Date();

  // 1. Static Core Public Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/cloud-services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/cybersecurity`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/it-consultancy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/managed-it`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/industry`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/industry/fintech`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/industry/healthcare`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/industry/retail`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/career`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. Product Detail Routes
  const productRoutes: MetadataRoute.Sitemap = productsData.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Dynamic Published Blog Posts (Excludes drafts, private/admin content)
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayloadClient();
    const { docs: posts } = await payload.find({
      collection: 'posts',
      where: {
        status: { not_equals: 'draft' },
      },
      limit: 500,
      select: {
        slug: true,
        updatedAt: true,
        publishedDate: true,
      },
    });

    blogRoutes = posts
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt
          ? new Date(String(post.updatedAt))
          : post.publishedDate
            ? new Date(String(post.publishedDate))
            : now,
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
  } catch (error) {
    console.error('[Sitemap] Failed to load blog posts for sitemap:', error);
  }

  // 4. Dynamic Active Job Openings (Active listings only)
  let careerRoutes: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayloadClient();
    const { docs: jobs } = await payload.find({
      collection: 'jobs',
      where: {
        active: { equals: true },
      },
      limit: 200,
      select: {
        id: true,
        updatedAt: true,
        createdAt: true,
      },
    });

    careerRoutes = jobs.map((job) => ({
      url: `${siteUrl}/career/${job.id}`,
      lastModified: job.updatedAt
        ? new Date(String(job.updatedAt))
        : job.createdAt
          ? new Date(String(job.createdAt))
          : now,
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error('[Sitemap] Failed to load career jobs for sitemap:', error);
  }

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...careerRoutes];
}

