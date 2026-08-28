import Link from 'next/link';
import Image from 'next/image';
import { NewsletterForm } from '@/components/shared/NewsletterForm';

export function Footer() {
  return (
    <footer className="w-full bg-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Line */}
        <div className="w-full h-[1px] bg-[rgba(6,186,225,0.53)] mb-12" />

        {/* Newsletter & Main Sections */}
        <div className="flex flex-col lg:flex-row justify-between mb-12 gap-12">

          {/* Logo & Info */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/davethan_logo.webp"
                alt="Davethan Technologies Limited"
                width={100}
                height={150}
                style={{ width: 150, height: 100 }}
                className="rounded-full object-contain"
              />
            </Link>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <NewsletterForm />
          </div>
        </div>

        {/* Middle Line */}
        <div className="w-full h-[1px] bg-[rgba(6,186,225,0.47)] mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">ABOUT</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-cyan-600 transition-colors">About Us</Link></li>
              <li><Link href="/career" className="hover:text-cyan-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">SERVICES</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/services/managed-it" className="hover:text-cyan-600 transition-colors">Managed IT</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-cyan-600 transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/it-consultancy" className="hover:text-cyan-600 transition-colors">IT Consultancy</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-cyan-600 transition-colors">Cloud Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">ADDRESS</h4>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <li>+44 0208 058 0860 (UK)</li>
              <li>+234 812 279 8051 (Nigeria)</li>
              <li>info@davethan.tech</li>
              <li className="pt-2">UK: 4th floor Victoria House, Chelmsford, Essex CM1 1JR</li>
              <li className="pt-2">Nigeria: Plot 104 Emmanuel Adiele Street, off Mike Akhigbe Way, Jabi, Abuja 240102, FCT</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full h-[1px] bg-[rgba(6,186,225,0.57)] mb-8" />

        {/* Copyright */}
        <div className="text-xs text-[#5b6472]">
          &copy; {new Date().getFullYear()} Davethan Technologies Limited. Registered in England and Wales, No. 14779945.
        </div>
      </div>
    </footer>
  );
}
