import Link from 'next/link';
import Image from 'next/image';
import { NewsletterForm } from '@/components/shared/NewsletterForm';
const FacebookIcon = ({ size = 18, className = "", fill = "currentColor", stroke = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 18, className = "", fill = "currentColor", stroke = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "", fill = "currentColor", stroke = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18, className = "", fill = "none", stroke = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ThreadsIcon = ({ size = 18, className = "", fill = "none", stroke = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 12.5a2.5 2.5 0 0 0-5 0V14a2.5 2.5 0 0 0 5 0V12c0-2-1.5-3.5-3.5-3.5h-.5A4.5 4.5 0 0 0 6 13a4.5 4.5 0 0 0 8.8 1.5"/>
    <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Line */}
        <div className="w-full h-[1px] bg-[rgba(6,186,225,0.53)] mb-12" />

        {/* Newsletter & Main Sections */}
        <div className="flex flex-col lg:flex-row justify-between mb-12 gap-12">

          {/* Logo & Info */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
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

            {/* Social Icons */}
            <div className="mt-2 text-center lg:text-left">
              <h4 className="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">FOLLOW US</h4>
              <div className="flex items-center gap-4">
                {[
                  { name: 'LinkedIn', Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/davethantech', isFill: true },
                  { name: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/davethantech', isFill: true },
                  { name: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61564751790083', isFill: true },
                  { name: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/davethantechnologies_/', isFill: false },
                  { name: 'Threads', Icon: ThreadsIcon, href: 'https://www.threads.net/@davethantech', isFill: false },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[40px] h-[40px] bg-black text-white rounded-full flex items-center justify-center hover:bg-[#06bae1] transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.Icon
                      size={18}
                      fill={social.isFill ? "currentColor" : "none"}
                      stroke={social.isFill ? "none" : "currentColor"}
                    />
                  </a>
                ))}
              </div>
            </div>
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
              <li>+44 1454 800509 (UK)</li>
              <li>+234 814 882 3613 (Nigeria)</li>
              <li>info@davethan.tech</li>
              <li className="pt-2">UK: Rombourne Office Suite, 160 Aztec West, Almondsbury, Bristol, BS32 4TU</li>
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
