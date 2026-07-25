import React from 'react';
import { PhoneCall, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'ur';
  heroImage: string; // Dynamic path to our generated hero image
  bedImage: string;  // Premium hand-carved bed set image on the side
  onActionClick: (targetId: string) => void;
}

export default function Hero({ lang, heroImage, bedImage, onActionClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative pt-24 sm:pt-28 md:pt-36 pb-12 md:pb-24 overflow-hidden bg-linear-to-b from-wood-cream via-wood-cream/95 to-wood-cream/90"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#C05800_1px,transparent_1px)] [background-size:16px_16px]"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="ltr">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8 text-left relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white/30 backdrop-blur-xs border border-wood-accent/5 shadow-xs">
            <div className="relative z-10 flex flex-col space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-wood-accent/15 rounded-full border border-wood-accent/30 text-wood-accent text-xs font-semibold uppercase tracking-wider w-fit">
                <Award className="h-3.5 w-3.5" />
                <span>Chiniot's Most Renowned Showroom</span>
              </div>
  
              {lang === 'en' ? (
                <div className="space-y-4">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-wood-dark leading-[1.15]">
                    Masterpieces of <br />
                    <span className="text-wood-accent italic font-normal font-serif">Hand-Carved</span> <br />
                    Royal Wood
                  </h1>
                  <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed max-w-xl">
                    Al Haram Furniture Chiniot brings you the luxury of legendary Mughal wood craftsmanship. Each piece is meticulously hand-sculpted in 100% seasoned pure Sheesham (Rosewood) to stand as an heirloom for generations.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-wood-dark leading-[1.25] urdu-text">
                    چنیوٹ کا سب سے مشہور <br />
                    <span className="text-wood-accent font-normal italic font-serif">ہاتھ سے تراشا گیا</span> <br />
                    شاہکار فرنیچر
                  </h1>
                  <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed max-w-xl urdu-text">
                    الحرم فرنیچر چنیوٹ آپ کے لیے لایا ہے مغلائی نفاست اور کاریگری۔ ہمارا تیار کردہ ہر صوفہ، بیڈ اور ڈائننگ سیٹ 100 فیصد خالص پکی شیشم (ٹالی) کی لکڑی سے تیار کیا جاتا ہے جو نسلوں تک آپ کے گھر کی زینت بنے گا۔
                  </p>
                </div>
              )}
  
              {/* Quick trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col p-3 rounded-lg bg-white/90 backdrop-blur-xs shadow-xs border border-wood-accent/15">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-wood-accent">100%</span>
                  <span className="text-[10px] sm:text-xs text-wood-dark/90 font-medium">
                    {lang === 'en' ? 'Seasoned Shisham' : 'پکی شیشم لکڑی'}
                  </span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-white/90 backdrop-blur-xs shadow-xs border border-wood-accent/15">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-wood-accent">50+</span>
                  <span className="text-[10px] sm:text-xs text-wood-dark/90 font-medium">
                    {lang === 'en' ? 'Master Artisans' : 'ماہر نقاش کاریگر'}
                  </span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-white/90 backdrop-blur-xs shadow-xs border border-wood-accent/15">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-wood-accent">PK</span>
                  <span className="text-[10px] sm:text-xs text-wood-dark/90 font-medium">
                    {lang === 'en' ? 'Secure Delivery' : 'محفوظ کارگو ڈیلیوری'}
                  </span>
                </div>
              </div>
  
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-quote-cta"
                  onClick={() => onActionClick('quote')}
                  className="px-6 py-3 bg-wood-accent hover:bg-wood-brown text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-md shadow-md hover:shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-white" />
                  {lang === 'en' ? 'Design Your Custom Furniture' : 'اپنا فرنیچر ڈیزائن کریں'}
                </button>
                <a
                  id="hero-whatsapp-cta"
                  href="https://wa.me/923431778196?text=Assalam-o-Alaikum%20Al-Haram%20Furniture%20Chiniot!%20I%20am%20interested%20in%20custom%20wooden%20furniture.%20Please%20share%20latest%20designs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-wood-cream text-wood-dark border border-wood-accent/20 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4 text-[#25D366]" />
                  {lang === 'en' ? 'WhatsApp Showroom' : 'واٹس ایپ پر رابطہ کریں'}
                </a>
              </div>
            </div>
          </div>
 
          {/* Original Majestic Single Picture Display of Chinioti Bed */}
          <div className="lg:col-span-7 relative group">
            {/* Elegant framing border around the image */}
            <div className="absolute -inset-1.5 rounded-lg bg-[linear-gradient(to_bottom_right,var(--color-wood-brown),var(--color-wood-accent))] opacity-25 blur-xs group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative rounded-lg overflow-hidden bg-stone-900 shadow-xl border border-wood-accent/15 aspect-[16/9] md:aspect-[4/3] lg:aspect-[4/3]">
              <img 
                src={heroImage} 
                alt="Al-Haram Showroom Chinioti Sheesham Bed" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700"
              />
              
              {/* Clean hero photo container */}
            </div>

            {/* Subtle decorative stamp */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white border border-wood-accent/20 rounded-full flex flex-col items-center justify-center text-wood-accent shadow-xl select-none">
              <span className="text-[6px] sm:text-[7px] font-mono tracking-[0.2em] font-semibold text-center leading-none text-wood-dark/70">ORIGINAL</span>
              <Award className="h-5 w-5 sm:h-6 sm:w-6 my-0.5 text-wood-accent" />
              <span className="text-[6px] sm:text-[7px] font-mono tracking-[0.2em] font-semibold text-center leading-none text-wood-dark/70">CHINIOT</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
