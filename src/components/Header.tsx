import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'ur';
  setLang: (lang: 'en' | 'ur') => void;
  activeSection: string;
}

export default function Header({ lang, setLang, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', labelUr: 'صفحہ اول' },
    { id: 'about', label: 'Artistry of Chiniot', labelUr: 'چنیوٹی مہارت' },
    { id: 'catalog', label: 'Showroom Gallery', labelUr: 'شوروم گیلری' },
    { id: 'quote', label: 'Quote Builder', labelUr: 'بجٹ کیلکولیٹر' },
    { id: 'contact', label: 'Contact Us', labelUr: 'رابطہ کریں' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-wood-dark backdrop-blur-md shadow-lg py-3 border-b border-wood-accent/20' 
          : 'bg-wood-dark/95 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      {/* Top Notification Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-wood-cream/85 border-b border-wood-accent/10 pb-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {lang === 'en' ? 'Showroom Open (9 AM - 10 PM)' : 'شوروم کھلا ہے (صبح 9 تا رات 10)'}
          </span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="h-3 w-3 text-wood-accent" />
            {lang === 'en' ? 'Shaheed Chowk near Sabz Mehal, Chiniot' : 'شہید چوک، نزد سبز محل، چنیوٹ'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+923431778196" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone className="h-3 w-3 text-wood-accent" />
            0343 1778196
          </a>
          <span className="hidden sm:inline text-wood-accent font-semibold flex items-center gap-1">
            <Sparkles className="h-3 w-3 animate-spin-slow" />
            {lang === 'en' ? 'Reasonable Delivery Across Pakistan' : 'پورے پاکستان میں مناسب ڈیلیوری'}
          </span>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Al-Haram Brand Identity */}
          <div 
            className="cursor-pointer group flex flex-col"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-wood-accent transition-colors">
              Al-Haram <span className="text-wood-cream font-medium font-serif italic">Furniture</span>
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-wood-cream/75 uppercase leading-none mt-0.5 font-semibold">
              CHINIOT MASTERPIECES
            </span>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-wood-accent font-bold' 
                    : 'text-wood-cream/80 hover:text-white'
                }`}
              >
                {lang === 'en' ? item.label : item.labelUr}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-wood-accent rounded-full" />
                )}
              </button>
            ))}
          </nav>
 
          {/* Controls: Language and Phone */}
          <div className="flex items-center gap-3">
            {/* Language Switch Capsule */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-wood-accent/30 bg-wood-dark/70 shadow-xs hover:border-wood-accent text-xs font-semibold text-wood-cream/90 hover:text-white transition-all cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-wood-accent" />
              <span>{lang === 'en' ? 'اردو (Urdu)' : 'English'}</span>
            </button>
 
            {/* Inquire Button */}
            <button
              id="header-inquiry-btn"
              onClick={() => handleNavClick('quote')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-wood-accent hover:bg-wood-brown text-white font-bold tracking-wider uppercase rounded-md shadow-sm transition-all cursor-pointer"
            >
              {lang === 'en' ? 'Get Quote' : 'بجٹ معلوم کریں'}
            </button>
 
            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-wood-cream hover:text-wood-accent lg:hidden focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
 
        </div>
      </div>
  
      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-wood-dark/95 backdrop-blur-md border-b border-wood-accent/20 shadow-2xl py-4 px-6 flex flex-col gap-4 animate-fadeIn"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-medium py-2 transition-colors border-b border-wood-accent/10 last:border-b-0 cursor-pointer ${
                activeSection === item.id 
                  ? 'text-wood-accent font-bold pl-2 border-l-2 border-l-wood-accent' 
                  : 'text-wood-cream/80 hover:text-white'
              }`}
            >
              {lang === 'en' ? item.label : item.labelUr}
            </button>
          ))}
          <button
            id="mobile-inquiry-btn"
            onClick={() => handleNavClick('quote')}
            className="w-full text-center py-2.5 bg-wood-accent text-white font-bold rounded-md shadow-sm uppercase text-sm tracking-wider cursor-pointer"
          >
            {lang === 'en' ? 'Get Direct Custom Quote' : 'ڈیزائن اور قیمت معلوم کریں'}
          </button>
        </div>
      )}
    </header>
  );
}
