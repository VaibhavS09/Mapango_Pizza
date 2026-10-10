import { useState, useEffect } from 'react';
import { Menu, X, Pizza, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Pizza className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -inset-1 rounded-full bg-brand-400/30 blur-md -z-10 group-hover:bg-brand-400/50 transition-colors duration-300" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold text-white tracking-wide">Mapango</span>
            <span className="font-script text-brand-300 text-sm -mt-0.5">Pizza</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-charcoal-100 hover:text-brand-300 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-400 group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:09259597005"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-lg hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-charcoal-900/98 backdrop-blur-lg border-t border-charcoal-700 animate-fade-in">
          <div className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-charcoal-100 hover:text-brand-300 hover:bg-charcoal-800 rounded-lg transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:09259597005"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call to Order
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
