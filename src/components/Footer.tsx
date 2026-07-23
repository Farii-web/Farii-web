import React from 'react';
import { Award, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ur';
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-wood-dark text-wood-cream/80 border-t border-wood-accent/20">
      
      {/* Upper Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Brand identity */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex flex-col cursor-pointer" onClick={handleScrollToTop}>
            <span className="font-serif text-2xl font-bold tracking-tight text-white hover:text-wood-accent transition-colors">
              Al-Haram <span className="text-wood-accent italic font-normal font-serif">Furniture</span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-wood-accent uppercase mt-0.5">
              CHINIOT MASTERPIECES
            </span>
          </div>
          <p className="text-wood-cream/70 text-xs sm:text-sm leading-relaxed max-w-sm">
            {lang === 'en'
              ? 'Known across Pakistan for high-end solid Sheesham wood (Tali) furniture, intricately hand-carved in classic royal Mughal & Italian designs since generations.'
              : 'الحرم فرنیچر چنیوٹ پاکستان بھر میں اپنے اعلیٰ اور خالص پکی شیشم کی لکڑی کے ہاتھ سے تراشے گئے صوفے، بیڈ اور مغلائی فرنیچر کی وجہ سے مشہور ہے۔'}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-wood-accent">{lang === 'en' ? 'Core Collections' : 'خاص ورائٹی'}</h4>
          <ul className="text-xs space-y-2 text-wood-cream/60">
            <li><a href="#catalog" className="hover:text-wood-accent transition-colors">Sovereign Royal Bed Sets (شاہی بیڈز)</a></li>
            <li><a href="#catalog" className="hover:text-wood-accent transition-colors">Darbar 5-Seater Sofa Sets (نشستیں اور صوفے)</a></li>
            <li><a href="#catalog" className="hover:text-wood-accent transition-colors">Shalimar Banquet Dining Tables (ڈائننگ سیٹس)</a></li>
            <li><a href="#catalog" className="hover:text-wood-accent transition-colors">Traditional Handcrafted Jharoka Screens (جھروکہ الماری)</a></li>
          </ul>
        </div>

        {/* Quality Seal */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-wood-accent">{lang === 'en' ? 'Showroom Seal' : 'کوالٹی مہر'}</h4>
          <div className="flex gap-2 p-3.5 bg-wood-dark/40 border border-wood-accent/15 rounded-xl">
            <Award className="h-8 w-8 text-wood-accent shrink-0" />
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">100% Genuine Chiniot</h5>
              <p className="text-[10px] text-wood-cream/60 mt-0.5">Verified carpentry, manual naqashi handcrafting, lifetime wood durability guarantee.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Copyright section */}
      <div className="bg-wood-dark/95 py-6 border-t border-wood-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-wood-cream/50 gap-4">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>© {currentYear} Al-Haram Furniture Chiniot. All Rights Reserved.</span>
            <span className="hidden sm:inline text-wood-cream/20">|</span>
            <span className="flex items-center gap-1 text-wood-cream/70">
              Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> in Chiniot, Pakistan
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="hover:text-wood-accent transition-colors font-semibold uppercase tracking-wider text-[10px] cursor-pointer"
          >
            {lang === 'en' ? '↑ Scroll to Top' : '↑ اوپر جائیں'}
          </button>
        </div>
      </div>

    </footer>
  );
}
