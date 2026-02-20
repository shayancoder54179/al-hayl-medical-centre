"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1B4FD8] text-white overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal as="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold text-lg">Al Hayl Medical Centre</h3>
            <p className="mt-2 text-white/90 text-sm">Healing Hands, Caring Hearts</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/90 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href="tel:+971547279513" className="hover:text-white transition-colors">054 727 9513</a>
              </li>
              <li>
                <a href="mailto:Admin@alhaylmedicalcenter.com" className="hover:text-white transition-colors break-all">
                  Admin@alhaylmedicalcenter.com
                </a>
              </li>
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal as="div" className="mt-10 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          © 2026 Al Hayl Medical Centre
        </ScrollReveal>
      </div>
    </footer>
  );
}
