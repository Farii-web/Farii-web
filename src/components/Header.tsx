import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, PhoneCall, MapPin, Sparkles, Crown, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import mascotPointingImage from '../assets/images/pointing_artisan_avatar_1784955181465.jpg';

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
          ? 'bg-wood-dark backdrop-blur-md shadow-lg py-1 border-b border-wood-accent/20' 
          : 'bg-wood-dark/95 backdrop-blur-sm py-1.5 border-b border-transparent'
      }`}
    >
      {/* Top Notification Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs text-wood-cream/85 border-b border-wood-accent/15 pb-1">
        <div className="flex items-center gap-2">
          {/* Eye-catching Glowing Royal Gold Showroom Timing Capsule Badge */}
          <div className="relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-950 border border-amber-400 shadow-md group hover:scale-105 transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <Clock className="h-3.5 w-3.5 text-amber-300 stroke-[2.5]" />
            <span className="font-extrabold tracking-wider text-amber-100 text-[10px] sm:text-xs font-serif">
              {lang === 'en' ? 'SHOWROOM OPEN (9 AM - 10 PM)' : 'شوروم کھلا ہے (صبح 9 تا رات 10)'}
            </span>
          </div>

          {/* Decorated Royal Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-900 border border-amber-400/50">
            <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-100 text-[10px] sm:text-xs">
              {lang === 'en' ? 'Shaheed Chowk near Sabz Mehal, Chiniot' : 'شہید چوک، نزد سبز محل، چنیوٹ'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="tel:+923431778196" 
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold shadow-sm border border-amber-400/80 hover:scale-105 transition-all"
          >
            <PhoneCall className="h-3 w-3 text-amber-200 animate-bounce" />
            <span className="font-mono text-[11px] sm:text-xs">
              0343 1778196
            </span>
          </a>
          <span className="hidden lg:inline-flex text-amber-300 font-bold items-center gap-1 text-[10px] bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-400/30">
            <Sparkles className="h-3 w-3 text-amber-400" />
            {lang === 'en' ? 'Delivery Across Pakistan' : 'پورے پاکستان میں ڈیلیوری'}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Al Haram Brand Identity */}
          <div 
            className="cursor-pointer group flex items-center gap-2 py-0.5"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            {/* Royal Golden Crown Emblem Icon */}
            <div className="relative flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-md shrink-0">
              <div className="h-full w-full bg-wood-dark/95 rounded-[6px] flex items-center justify-center border border-amber-400/50 relative overflow-hidden">
                <Crown className="h-4 w-4 text-amber-400" />
              </div>
            </div>

            {/* Brand Name Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 bg-clip-text text-transparent">
                  Al Haram <span className="text-amber-300 font-serif italic font-bold">Furniture</span>
                </span>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/25 border border-amber-400/60 text-[9px] sm:text-[10px] font-mono text-amber-300 font-bold uppercase hidden xs:inline-block">
                  Chiniot
                </span>
              </div>
            </div>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs sm:text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer ${
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
 
          {/* Controls: Language with Refined Cartoon Mascot Avatar */}
          <div className="flex items-center gap-2">
            <div 
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="relative group flex items-center gap-2 cursor-pointer bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 px-2.5 py-1 rounded-lg border border-amber-400/60 hover:border-amber-400 shadow-sm transition-all select-none"
              title="اردو اور English میں تبدیل کریں"
            >
              {/* Mascot Avatar */}
              <div className="relative shrink-0">
                <img 
                  src={mascotPointingImage} 
                  alt="Guide Mascot" 
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-amber-300 shadow-sm animate-bounce"
                />
              </div>

              {/* Language Switch Button */}
              <button
                id="lang-toggle-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLang(lang === 'en' ? 'ur' : 'en');
                }}
                className="flex items-center gap-1 px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs shadow-xs cursor-pointer"
              >
                <Globe className="h-3.5 w-3.5 text-amber-950" />
                <span>{lang === 'en' ? 'اردو' : 'English'}</span>
              </button>
            </div>
 
            {/* Inquire Button */}
            <button
              id="header-inquiry-btn"
              onClick={() => handleNavClick('quote')}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-wood-accent hover:bg-wood-brown text-white font-bold text-xs tracking-wider uppercase rounded shadow-xs transition-all cursor-pointer"
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
          className="lg:hidden absolute top-full left-0 right-0 bg-wood-dark/98 backdrop-blur-md border-b-2 border-amber-400/40 shadow-2xl py-4 px-6 flex flex-col gap-4 animate-fadeIn"
        >
          {/* Prominent Cartoon Mascot Banner in Mobile Drawer */}
          <div 
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-2 border-amber-400/80 shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img 
                src={mascotPointingImage} 
                alt="Guide Mascot" 
                className="h-12 w-12 rounded-full object-cover border-2 border-amber-300 shadow-md shrink-0 animate-bounce"
              />
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-amber-400 text-amber-950 font-black text-xs shrink-0 flex items-center gap-1 shadow-md">
              <Globe className="h-4 w-4" />
              <span>{lang === 'en' ? 'اردو' : 'English'}</span>
            </button>
          </div>

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
