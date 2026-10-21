'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b" style={{ borderColor: '#CCFBF1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-7 h-7" style={{ color: '#2D7D6F' }} fill="#2D7D6F" />
            <span className="text-2xl font-extrabold" style={{ color: '#1A4A42' }}>Omohan</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {[['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact'], ['/privacy', 'Privacy'], ['/terms', 'Terms']].map(([href, label]) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-md text-sm font-medium transition-colors" style={{ color: isActive(href) ? '#2D7D6F' : '#4B7A72' }}>
                {label}
              </Link>
            ))}
            <Link href="/signup" className="ml-4 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 shadow-md" style={{ backgroundColor: '#2D7D6F' }}>
              Get Care Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
