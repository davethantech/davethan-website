import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/shared/CtaBlock";
import { productsData } from "@/lib/productsData";

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px] flex items-center justify-center mt-16 sm:mt-0 bg-[#070933]">
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px] text-center">
            <h1 className="text-white font-roboto font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-3">
              Our Products
            </h1>
            <p className="text-gray-300 font-inter text-[14px] sm:text-[16px] max-w-2xl mx-auto">
              Innovative digital solutions designed to streamline operations, enhance productivity, and drive real growth for your business.
            </p>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-20 bg-white relative z-10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {productsData.map((product) => (
                <div key={product.id} className="flex flex-col h-full bg-white border border-[#e4e9f2] rounded-[16px] shadow-[0px_8px_24px_0px_rgba(10,13,51,0.06)] overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                  {/* Image Link */}
                  <Link href={`/products/${product.slug}`} className="block relative w-full h-[220px] bg-gray-50 border-b border-[#e4e9f2]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8"
                    />
                  </Link>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[#0a0d53] font-roboto font-bold text-[24px] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[#06bae1] font-inter font-bold text-[13px] uppercase tracking-widest mb-6">
                      {product.tagline}
                    </p>
                    
                    <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                      <Link href={`/products/${product.slug}`} className="flex-1">
                        <div className="bg-[#f8f9fc] border border-[#e4e9f2] text-[#0a0d53] rounded-[8px] h-[48px] flex items-center justify-center hover:bg-gray-100 transition-colors font-inter font-bold text-[13px]">
                          View Details
                        </div>
                      </Link>
                      <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <div className="bg-[#0a0d53] text-white rounded-[8px] h-[48px] flex items-center justify-center hover:bg-[#06bae1] transition-colors font-inter font-bold text-[13px]">
                          Start Free Trial Now
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>

      <Footer />
    </div>
  );
}
