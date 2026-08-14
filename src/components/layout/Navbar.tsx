"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Utility Bar */}
      <div className="hidden lg:flex w-full bg-[#070933] text-white py-2 px-8 justify-end items-center text-xs font-roboto gap-4">
        <span>+44 0208 058 0860</span>
        <span className="text-gray-500">·</span>
        <span>+234 812 279 8051</span>
        <span className="text-gray-500">·</span>
        <span>✉ info@davethan.tech</span>
        <span className="text-gray-500">·</span>
        <Link href="/admin" className="hover:text-cyan-400 transition-colors">Client Login</Link>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-38 mt-4 pb-4">
        <div className="bg-white rounded-xl shadow-[0px_4px_16px_rgba(159,233,220,0.4)] h-[64px] flex items-center justify-between px-4 relative">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/davethan_logo.webp"
              alt="Davethan Technologies Limited"
              width={100}
              height={150}
              style={{ width: 150, height: 100 }}
              className="rounded-full object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 font-inter font-semibold text-sm text-[#070933]">
            <Link href="/" className="hover:text-cyan-500 transition-colors">HOME</Link>
            <Link href="/about" className="hover:text-cyan-500 transition-colors">ABOUT</Link>
            <Link href="/industry" className="hover:text-cyan-500 transition-colors">INDUSTRY</Link>
            {/* Services with dropdown hint */}
            <div className="relative group">
              <Link href="/services" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                SERVICES
                <svg className="w-3 h-3 mt-0.5 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {[
                    { label: "Managed IT", href: "/services/managed-it" },
                    { label: "IT Consultancy", href: "/services/it-consultancy" },
                    { label: "Cybersecurity", href: "/services/cybersecurity" },
                    { label: "Cloud Services", href: "/services/cloud-services" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-[#070933] hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link href="/services" className="block px-4 py-2.5 text-sm text-cyan-500 font-bold hover:bg-cyan-50 transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/blog" className="hover:text-cyan-500 transition-colors">BLOG</Link>
            <Link href="/contact" className="hover:text-cyan-500 transition-colors">CONTACT</Link>
            <Link href="/career" className="hover:text-cyan-500 transition-colors">CAREER</Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary" size="sm">contact us &rarr;</Button>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-[#070933] focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white rounded-xl mt-2 shadow-[0px_4px_16px_rgba(159,233,220,0.4)] overflow-hidden">
            <nav className="flex flex-col font-inter font-semibold text-sm text-[#070933]">
              <Link
                href="/"
                className="px-6 py-4 border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="px-6 py-4 border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/industry"
                className="px-6 py-4 border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                INDUSTRY
              </Link>

              {/* Services with mobile accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  <span>SERVICES</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="bg-gray-50">
                    {[
                      { label: "Managed IT", href: "/services/managed-it" },
                      { label: "IT Consultancy", href: "/services/it-consultancy" },
                      { label: "Cybersecurity", href: "/services/cybersecurity" },
                      { label: "Cloud Services", href: "/services/cloud-services" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-10 py-3 text-sm text-[#070933] border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-10 py-3 text-sm text-cyan-500 font-bold border-b border-gray-100 hover:bg-cyan-50 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="px-6 py-4 border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="px-6 py-4 border-b border-gray-100 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                href="/career"
                className="px-6 py-4 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                CAREER
              </Link>

              {/* Mobile CTA */}
              <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full justify-center">contact us →</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
