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
          ? 'bg-wood-dark backdrop-blur-md shadow-lg py-3 border-b border-wood-accent/20' 
          : 'bg-wood-dark/95 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      {/* Top Notification Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-wood-cream/85 border-b border-wood-accent/15 pb-2">
        <div className="flex items-center gap-3">
          {/* Eye-catching Glowing Royal Gold Showroom Timing Capsule Badge */}
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-950 border-2 border-amber-400 shadow-xl shadow-amber-950/80 ring-2 ring-amber-400/40 group hover:scale-105 transition-all">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,1)]"></span>
            </span>
            <Clock className="h-5 w-5 text-amber-300 animate-pulse stroke-[2.75] drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <span className="font-extrabold tracking-wider text-amber-100 text-xs sm:text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-serif">
              {lang === 'en' ? 'SHOWROOM OPEN (9 AM - 10 PM)' : 'شوروم کھلا ہے (صبح 9 تا رات 10)'}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/40 text-[10px] font-black text-amber-200 border border-amber-300/80 uppercase tracking-widest hidden xs:inline-block shadow-inner">
              LIVE NOW
            </span>
          </div>

          {/* Decorated Royal Location Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-950/90 via-stone-900 to-amber-950/90 border border-amber-400/70 shadow-md ring-1 ring-amber-400/30 group hover:scale-105 transition-all">
            <MapPin className="h-4 w-4 text-amber-400 stroke-[2.5] animate-bounce text-amber-300 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <span className="font-bold text-amber-100 text-xs tracking-wide">
              {lang === 'en' ? 'Shaheed Chowk near Sabz Mehal, Chiniot' : 'شہید چوک، نزد سبز محل، چنیوٹ'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="tel:+923431778196" 
            className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 hover:from-amber-500 hover:to-amber-800 text-white font-black tracking-wider shadow-lg shadow-amber-950/90 border-2 border-amber-400/80 ring-2 ring-amber-400/40 hover:scale-105 transition-all group"
          >
            <div className="relative flex items-center justify-center h-6 w-6 rounded-full bg-white/20">
              <PhoneCall className="h-4 w-4 text-amber-200 animate-bounce stroke-[2.75] drop-shadow-xs" />
            </div>
            <span className="font-extrabold text-white text-xs sm:text-sm font-mono tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              0343 1778196
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-400/30 border border-amber-300/40 text-[9px] font-black uppercase tracking-widest text-amber-200 hidden md:inline-block shadow-inner">
              CALL NOW
            </span>
          </a>
          <span className="hidden lg:inline-flex text-amber-300 font-bold items-center gap-1.5 text-xs bg-amber-950/60 px-3 py-1 rounded-full border border-amber-400/30">
            <Sparkles className="h-3.5 w-3.5 animate-spin-slow text-amber-400" />
            {lang === 'en' ? 'Delivery Across Pakistan' : 'پورے پاکستان میں ڈیلیوری'}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Al Haram Brand Identity */}
          <div 
            className="cursor-pointer group flex items-center gap-2.5 sm:gap-3 py-1"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            {/* Royal Golden Crown Emblem Icon */}
            <div className="relative flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-md shadow-amber-900/40 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="h-full w-full bg-wood-dark/95 rounded-[10px] flex items-center justify-center border border-amber-400/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-200/30"></div>
                <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 drop-shadow-[0_2px_6px_rgba(245,158,11,0.6)] animate-pulse" />
              </div>
            </div>

            {/* Brand Name Text with Golden Highlight & Badge */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(217,119,6,0.4)] group-hover:from-white group-hover:to-amber-200 transition-all duration-300">
                  Al Haram <span className="text-amber-300 font-serif italic font-bold">Furniture</span>
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/25 border border-amber-400/60 text-[10px] sm:text-[11px] font-mono text-amber-300 font-bold tracking-widest uppercase hidden xs:inline-block shadow-xs">
                  Chiniot
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-amber-200/90 uppercase font-bold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  CHINIOT HAND-CARVED MASTERPIECES
                </span>
              </div>
            </div>
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
 
          {/* Controls: Language with Refined Gentleman Artisan Guide and Phone */}
          <div className="flex items-center gap-3">
            {/* Elegant Language Guide Badge */}
            <div 
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="relative group flex items-center gap-2.5 sm:gap-3 cursor-pointer bg-gradient-to-r from-amber-950/90 via-amber-900/90 to-amber-950/90 hover:from-amber-900 hover:to-amber-950 px-3 py-1.5 rounded-xl border border-amber-400/60 hover:border-amber-400 shadow-md transition-all hover:scale-[1.02] select-none"
              title="اردو اور English میں تبدیل کریں"
            >
              {/* Refined Master Artisan Avatar */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 opacity-70 blur-xs animate-pulse"></div>
                <img 
                  src={mascotPointingImage} 
                  alt="Urdu English Master Guide" 
                  className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-amber-300 shadow-lg animate-bounce"
                />
              </div>

              {/* Speech Text - Elegant Guide Badge */}
              <div className="flex flex-col text-right pr-0.5">
                <span className="text-xs sm:text-sm md:text-base font-bold text-amber-100 leading-tight drop-shadow-xs flex items-center">
                  <span className="bg-amber-400/15 px-2.5 py-1 rounded-lg border border-amber-400/30 urdu-text">
                    انگلش یا اردو میں پڑھ سکتے ہیں
                  </span>
                </span>
              </div>

              {/* Language Switch Capsule Button */}
              <button
                id="lang-toggle-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLang(lang === 'en' ? 'ur' : 'en');
                }}
                className="ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-amber-950 font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer border border-amber-300"
              >
                <Globe className="h-4 w-4 text-amber-950" />
                <span>{lang === 'en' ? 'اردو' : 'English'}</span>
              </button>
            </div>
 
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
              <div className="flex flex-col text-right">
                <span className="text-base sm:text-lg font-black text-amber-100 leading-tight urdu-text">
                  انگلش یا اردو میں پڑھ سکتے ہیں
                </span>
              </div>
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
