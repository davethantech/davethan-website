import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/shared/CtaBlock";
import { productsData } from "@/lib/productsData";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  
  if (!product) {
    return { title: 'Product Not Found | Davethan Technologies' };
  }
  
  return {
    title: `${product.name} | Davethan Technologies`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-[#f8f9fc] pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-[1000px] mx-auto">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#5b6472] hover:text-[#06bae1] font-inter font-bold text-[12px] uppercase tracking-widest transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Products
            </Link>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
              {/* Product Image */}
              <div className="w-full lg:w-1/3 relative h-[200px] sm:h-[250px] bg-white border border-[#e4e9f2] rounded-[16px] shadow-sm flex items-center justify-center p-8 shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Product Info */}
              <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h1 className="text-[#0a0d53] font-roboto font-bold text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] mb-4">
                  {product.name}
                </h1>
                <p className="text-[#06bae1] font-inter font-bold text-[14px] uppercase tracking-widest mb-8">
                  {product.tagline}
                </p>
                
                <a 
                  href={product.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a0d53] hover:bg-[#06bae1] text-white font-inter font-bold text-[14px] px-10 py-4 rounded-[10px] transition-all duration-300 shadow-md"
                >
                  Start Free Trial Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="prose prose-lg max-w-none prose-headings:text-[#0a0d53] prose-headings:font-roboto prose-headings:font-bold prose-p:text-[#5b6472] prose-p:leading-relaxed prose-strong:text-[#0a0d53]">
              <ReactMarkdown>{typeof product.content === 'string' ? product.content : ''}</ReactMarkdown>
            </div>

            <div className="mt-20 pt-12 border-t border-[#e4e9f2] flex flex-col items-center text-center">
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[28px] mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-[#5b6472] font-inter text-[16px] mb-8 max-w-md mx-auto">
                Join thousands of satisfied users who have chosen {product.name} to optimize their workflows.
              </p>
              <a 
                href={product.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[14px] px-10 py-4 rounded-[10px] transition-all duration-300 shadow-md"
              >
                Start Free Trial Now
              </a>
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>

      <Footer />
    </div>
  );
}
