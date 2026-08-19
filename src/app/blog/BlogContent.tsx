'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import type { Post, Category, Media } from '@/payload-types';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Safely extract a Cloudinary / public-folder image URL from a Payload Media relationship */
function getImageUrl(heroImage: Post['heroImage']): string {
  if (!heroImage) return '/Blog-Hero.png';
  if (typeof heroImage === 'string') return heroImage;
  // Payload populates `url` on the Media doc when cloud storage is active
  return (heroImage as Media).url ?? '/Blog-Hero.png';
}

/** Format a Payload ISO date string to a display string, e.g. "23RD NOVEMBER 2024" */
function formatDate(iso?: string | null): string {
  if (!iso) return '';
  const date = new Date(iso);
  const day = date.getDate();
  const suffix = ['TH', 'ST', 'ND', 'RD'][
    day % 10 < 4 && (day < 11 || day > 13) ? day % 10 : 0
  ];
  return `${day}${suffix} ${date.toLocaleString('en-GB', { month: 'long' }).toUpperCase()} ${date.getFullYear()}`;
}

/** Extract the category display title from a Payload relationship (string id or populated object) */
function getCategoryTitle(category: Post['category']): string {
  if (!category) return '';
  if (typeof category === 'string') return category.toUpperCase();
  return ((category as Category).title ?? '').toUpperCase();
}

// ─── Props ───────────────────────────────────────────────────────────────────

interface BlogContentProps {
  allPosts: Post[];
  featuredPost: Post | null;
  categories: Category[];
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function BlogContent({ allPosts, featuredPost, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? allPosts.filter((p) => getCategoryTitle(p.category) === activeCategory)
    : allPosts;

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* ─── HERO SECTION ─── */}
        <section className="bg-[#070933] py-20 lg:py-28 text-center px-4">
          <h1 className="text-white font-roboto font-bold text-[40px] sm:text-[48px] lg:text-[60px] tracking-wide mb-6">
            THE BLOG
          </h1>
          <p className="text-[#BFF9EA] font-inter font-bold text-[11px] sm:text-[13px] lg:text-[20px] tracking-[1px] uppercase max-w-[900px] mx-auto leading-relaxed">
            STAY UP TO DATE ON TIPS, TRICKS &amp; TRENDS FOR IT, CYBERSECURITY &amp; CLOUD STRATEGY
          </p>
        </section>

        {/* ─── BROWSE CATEGORIES ─── */}
        <section className="border-b border-[#e4e9f2] bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-6 flex flex-row items-center gap-4 overflow-x-auto scrollbar-hide">
            <span className="text-[#0a0d53] font-poppins font-medium italic text-[16px] shrink-0">
              Browse the blog :
            </span>
            <div className="flex items-center gap-6 md:gap-10 shrink-0">
              {/* "All" reset button */}
              <button
                onClick={() => setActiveCategory(null)}
                className={`font-inter font-bold text-[11px] uppercase tracking-widest transition-colors whitespace-nowrap ${
                  activeCategory === null
                    ? 'text-[#06bae1] underline underline-offset-4'
                    : 'text-[#0a0d53] hover:text-[#06bae1]'
                }`}
              >
                ALL
              </button>
              {categories.map((cat) => {
                const label = cat.title.toUpperCase();
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(activeCategory === label ? null : label)}
                    className={`font-inter font-bold text-[11px] uppercase tracking-widest transition-colors whitespace-nowrap ${
                      activeCategory === label
                        ? 'text-[#06bae1] underline underline-offset-4'
                        : 'text-[#0a0d53] hover:text-[#06bae1]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── FEATURED POST — hide when category filter is active ─── */}
        {activeCategory === null && featuredPost && (
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                {/* Left: Image */}
                <div className="relative w-full lg:w-1/2 shrink-0">
                  <div
                    className="relative w-full rounded-[24px] overflow-hidden"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <Image
                      src={getImageUrl(featuredPost.heroImage)}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 left-6 -translate-y-1/2 bg-[#0a0d53] w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center text-white text-[11px] font-bold tracking-widest leading-tight z-10">
                    <span>READ</span>
                    <span>THE</span>
                    <span>LATEST</span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 max-w-[600px]">
                  <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-widest block mb-4">
                    {getCategoryTitle(featuredPost.category)}
                  </span>
                  <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] mb-6">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-block border-2 border-[#0a0d53] text-[#0a0d53] font-bold font-inter text-[12px] uppercase tracking-widest px-8 py-3 rounded-[8px] hover:bg-[#0a0d53] hover:text-white transition-colors"
                  >
                    READ POST
                  </Link>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* ─── POSTS GRID ─── */}
        <section className={`pb-24 lg:pb-32 bg-white ${activeCategory !== null ? 'pt-16 lg:pt-24' : ''}`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">

            {/* Category heading when filter is active */}
            {activeCategory !== null && (
              <div className="mb-12 flex items-center gap-4">
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[28px] lg:text-[36px]">
                  {activeCategory}
                </h2>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-[#5b6472] font-inter text-[13px] hover:text-[#06bae1] transition-colors underline underline-offset-4"
                >
                  Clear filter
                </button>
              </div>
            )}

            {filteredPosts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <p className="text-[#5b6472] font-inter text-[15px] text-center">
                  No posts in this category yet.
                </p>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-[#06bae1] font-inter font-bold text-[13px] hover:underline"
                >
                  View all posts →
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="group cursor-pointer flex flex-col h-full">

                    {/* Image */}
                    <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden mb-6">
                      <Image
                        src={getImageUrl(post.heroImage)}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Vertical Category Ribbon */}
                      <div className="absolute top-0 left-8 bg-[#0a0d53] h-[140px] w-[36px] flex items-center justify-center rounded-b-[8px]">
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap">
                          {getCategoryTitle(post.category)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-[#0a0d53] font-roboto font-bold text-[22px] leading-tight mb-4 group-hover:text-[#06bae1] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#0a0d53] font-poppins font-bold text-[13px] inline-flex items-center gap-2 group-hover:text-[#06bae1] transition-colors"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
