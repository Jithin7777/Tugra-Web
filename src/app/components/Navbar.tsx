'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Plus, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Drinks & Desserts', href: '/drinks-desserts' },
  { label: 'Shinsa', href: '/shinsa' },
  { label: 'Reservation', href: '/reservation' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50 border-b border-[#FEC67961]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty space in place of logo */}
          <div className="w-12" /> {/* Just a spacer */}

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-white hover:text-yellow-300 font-medium transition font-open-sans"
              >
                {link.label}
                <Plus size={16} className="text-[#FEC67961]" />
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 py-2 shadow-md space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between text-white hover:text-yellow-300 font-medium"
            >
              {link.label}
              <Plus size={16} className="text-[#FEC67961]" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
