// Shared blog post data — imported by both the client listing page and the server detail page.
// Replace this with a Payload CMS fetch when the CMS is connected.

export type BlogPost = {
  slug: string;
  title: string;
  snippet: string;
  image: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: '5-signs-your-it-infrastructure-needs-an-upgrade',
    title: '5 Signs Your IT Infrastructure Needs an Upgrade',
    snippet:
      "Slow systems and constant workarounds add up. Here's how to know it's time to modernize before it costs you more.",
    image: '/blog-post-1.png',
    category: 'MANAGED IT',
  },
  {
    slug: 'common-compliance-mistakes-costing-you-money',
    title: 'Common Compliance Mistakes That Are Costing You Money',
    snippet:
      "Compliance isn't a checkbox exercise. Even well-run teams miss these gaps more often than you'd think.",
    image: '/blog-post-2.png',
    category: 'CYBERSECURITY',
  },
  {
    slug: '5-ways-to-boost-remote-work-security',
    title: "5 Ways to Boost Your Team's Remote Work Security",
    snippet:
      "Distributed teams need more than a VPN. Here's what actually keeps remote work secure.",
    image: '/blog-post-3.png',
    category: 'REMOTE WORK',
  },
  {
    slug: 'why-247-monitoring-matters',
    title: 'Why 24/7 Monitoring Matters More Than You Think',
    snippet:
      "Most outages don't happen during business hours. Here's what round-the-clock coverage actually prevents.",
    image: '/blog-post-4.png',
    category: 'MANAGED IT',
  },
  {
    slug: 'how-to-choose-the-right-cloud-provider',
    title: 'How to Choose the Right Cloud Provider for Your Business',
    snippet:
      "Not all cloud platforms fit every business. Here's how to match the provider to how your team actually works.",
    image: '/blog-post-5.png',
    category: 'CLOUD',
  },
  {
    slug: 'setting-up-your-office-for-long-term-it-success',
    title: 'Setting Up Your Office for Long-Term IT Success',
    snippet:
      "The decisions you make early shape how easy (or painful) scaling your systems will be later.",
    image: '/blog-post-6.png',
    category: 'IT CONSULTANCY',
  },
];

export const categories = ['MANAGED IT', 'CYBERSECURITY', 'CLOUD', 'IT CONSULTANCY'];

export const featuredPost = {
  slug: 'is-your-business-ready-for-a-cyberattack',
  title: "Is Your Business Ready for a Cyberattack? Here's How to Prepare Early",
  category: 'CYBERSECURITY',
  snippet:
    "A breach can be a stressful event for business owners, especially if you're not prepared. Recovering can feel like a daunting task, and if you don't plan ahead, you may end up scrambling to contain the damage at the last minute. However, with a bit of preparation...",
};
