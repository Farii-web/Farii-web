import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles, Award, Film, Eye } from 'lucide-react';

// Import high resolution furniture pictures
import bedDukanImage from '../assets/images/real_chiniot_dukan_bed_1784739413104.jpg';
import safeAlmariImage from '../assets/images/chinioti_safe_almari_1784739769587.jpg';
import sofaImage from '../assets/images/chinioti_carved_sofa_1784559762922.jpg';
import diningImage from '../assets/images/chinioti_dining_table_1784559784870.jpg';
import consoleImage from '../assets/images/chinioti_console_mirror_1784739788572.jpg';
import roomSetImage from '../assets/images/chinioti_room_set_1784617930498.jpg';
import jhulaImage from '../assets/images/chinioti_royal_jhula_1784740393068.jpg';
import dressingImage from '../assets/images/chinioti_dressing_table_1784740414730.jpg';
import cornerCabinetImage from '../assets/images/chinioti_corner_cabinet_1784740434049.jpg';
import deewanImage from '../assets/images/chinioti_royal_deewan_1784740450170.jpg';

interface HeroSlideshowProps {
  lang: 'en' | 'ur';
}

export interface SlideItem {
  id: string;
  titleEn: string;
  titleUr: string;
  categoryEn: string;
  categoryUr: string;
  priceEn: string;
  priceUr: string;
  image: string;
  tagEn: string;
  tagUr: string;
}

export const SLIDES: SlideItem[] = [
  {
    id: 'bed-1',
    titleEn: 'Royal Hand-Carved Sheesham Bed Set',
    titleUr: 'شاہی چنیوٹی بیڈ سیٹ (خالص شیشم لکڑی)',
    categoryEn: 'Master Bedroom',
    categoryUr: 'ماسٹر بیڈ روم',
    priceEn: 'PKR 185,000',
    priceUr: '185,000 روپے',
    image: bedDukanImage,
    tagEn: 'Masterpiece',
    tagUr: 'شاہکار بیڈ'
  },
  {
    id: 'jhula-1',
    titleEn: 'Royal Hand-Carved Sheesham Jhula (Swing)',
    titleUr: 'شاہی چنیوٹی منقش جھولا (مع پیتل کی زنجیریں)',
    categoryEn: 'Living & Courtyard',
    categoryUr: 'نشست و شاہی جھولا',
    priceEn: 'PKR 165,000',
    priceUr: '165,000 روپے',
    image: jhulaImage,
    tagEn: 'Handicraft Jhula',
    tagUr: 'خالص لکڑی کا جھولا'
  },
  {
    id: 'dressing-1',
    titleEn: 'Sovereign Bridal Dressing Table (Singhar Table)',
    titleUr: 'شاہی دلہن سنگھار ٹیبل مع بڑا منقش آئینہ',
    categoryEn: 'Bedroom & Vanity',
    categoryUr: 'سنگھار و بیڈ روم',
    priceEn: 'PKR 115,000',
    priceUr: '115,000 روپے',
    image: dressingImage,
    tagEn: 'Brass Inlay',
    tagUr: 'پیتل تارکشی سنگھار'
  },
  {
    id: 'safe-1',
    titleEn: '3-Door Sheesham Safe Vault Almari',
    titleUr: 'چنیوٹی 3 در سیف الماری (مع سٹیل والٹ)',
    categoryEn: 'Storage & Safe',
    categoryUr: 'وارڈروب و سیف والٹ',
    priceEn: 'PKR 195,000',
    priceUr: '195,000 روپے',
    image: safeAlmariImage,
    tagEn: 'Heavy Security Vault',
    tagUr: 'فولادی تزوری مع الماری'
  },
  {
    id: 'sofa-1',
    titleEn: 'Royal Darbar 5-Seater Carved Sofa',
    titleUr: 'شاندار مغلائی 5 سیٹر صوفہ سیٹ',
    categoryEn: 'Living Room',
    categoryUr: 'ڈرائنگ روم',
    priceEn: 'PKR 245,000',
    priceUr: '245,000 روپے',
    image: sofaImage,
    tagEn: 'Double Carving',
    tagUr: 'دہرے نقش کا صوفہ'
  },
  {
    id: 'deewan-1',
    titleEn: 'Traditional Royal Carved Sheesham Deewan',
    titleUr: 'روایتی مغلائی شاہی دیوان (کتھی سیٹ)',
    categoryEn: 'Living & Lounge',
    categoryUr: 'نشست و دیوان',
    priceEn: 'PKR 95,000',
    priceUr: '95,000 روپے',
    image: deewanImage,
    tagEn: 'Royal Settee',
    tagUr: 'مخمل شاہی دیوان'
  },
  {
    id: 'corner-1',
    titleEn: 'Heritage Glass Corner Showcase Cabinet',
    titleUr: 'شاہی کارنر شوکیس الماری (شیشے والی)',
    categoryEn: 'Storage & Decor',
    categoryUr: 'شوکیس و سجاوٹ',
    priceEn: 'PKR 78,000',
    priceUr: '78,000 روپے',
    image: cornerCabinetImage,
    tagEn: 'Corner Display',
    tagUr: 'کارنر الماری شوکیس'
  },
  {
    id: 'dining-1',
    titleEn: 'Imperial 8-Seater Dining Table Set',
    titleUr: '8 سیٹر شاہی ڈائننگ ٹیبل مع کرسیاں',
    categoryEn: 'Dining Room',
    categoryUr: 'ڈائننگ روم',
    priceEn: 'PKR 210,000',
    priceUr: '210,000 روپے',
    image: diningImage,
    tagEn: 'Brass Inlay',
    tagUr: 'پیتل کی تارکشی'
  },
  {
    id: 'console-1',
    titleEn: 'Mughal Console Table & Arched Mirror',
    titleUr: 'مغلائی کنسول ٹیبل مع محرابی آئینہ',
    categoryEn: 'Decor & Entryway',
    categoryUr: 'سجاوٹ و ہال',
    priceEn: 'PKR 85,000',
    priceUr: '85,000 روپے',
    image: consoleImage,
    tagEn: 'Handicraft',
    tagUr: 'نفیس دستکاری'
  },
  {
    id: 'roomset-1',
    titleEn: 'Complete Bridal Room Set (Shahan-e-Mughlia)',
    titleUr: 'مکمل شاہی دلہن روم سیٹ (بیڈ، ڈریسنگ، الماری)',
    categoryEn: 'Bridal Furniture',
    categoryUr: 'دلہن جہیز فرنیچر',
    priceEn: 'PKR 450,000',
    priceUr: '450,000 روپے',
    image: roomSetImage,
    tagEn: 'Complete Set',
    tagUr: 'مکمل برائیڈل سیٹ'
  }
];

export default function HeroSlideshow({ lang }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000; // 5 seconds per picture for smooth aesthetic viewing

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-play interval effect
  useEffect(() => {
    if (isPlaying) {
      setProgress(0);
      const step = 50; // update progress every 50ms
      const increment = (step / SLIDE_DURATION) * 100;

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + increment;
        });
      }, step);

      timerRef.current = setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-500/30 bg-stone-950 transition-all duration-500">
      
      {/* Aesthetic Story Segment Progress Bars at Top */}
      <div className="absolute top-3 left-4 right-4 z-30 flex items-center gap-1.5 pointer-events-none">
        {SLIDES.map((slide, idx) => (
          <div 
            key={`bar-${slide.id}`} 
            className="h-1 flex-1 bg-white/20 backdrop-blur-xs rounded-full overflow-hidden transition-all duration-300"
          >
            <div 
              className="h-full bg-linear-to-r from-amber-400 via-amber-300 to-amber-500 rounded-full transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(251,191,36,0.9)]"
              style={{
                width: idx < currentIndex ? '100%' : idx === currentIndex ? `${progress}%` : '0%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Top Floating Aesthetic Glass Badge & Controls */}
      <div className="absolute top-7 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        
        {/* Aesthetic Live Showreel Pill */}
        <div className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/40 text-white text-xs font-medium shadow-xl">
          <Film className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
          <span className="tracking-widest text-[11px] uppercase font-serif text-amber-100">
            {lang === 'en' ? 'Aesthetic Showreel' : 'استھیٹک شاہی شوکیس'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        </div>

        {/* Action Controls (Play/Pause, Fullscreen) */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            className="p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-900/90 text-white backdrop-blur-md border border-amber-500/30 transition-all cursor-pointer shadow-lg hover:scale-105 hover:border-amber-400"
          >
            {isPlaying ? <Pause className="h-4 w-4 text-amber-300" /> : <Play className="h-4 w-4 text-emerald-400 fill-emerald-400" />}
          </button>
          
          <button
            onClick={() => setIsFullscreen(true)}
            title="Expand Fullscreen"
            className="p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-900/90 text-white backdrop-blur-md border border-amber-500/30 transition-all cursor-pointer shadow-lg hover:scale-105 hover:border-amber-400"
          >
            <Maximize2 className="h-4 w-4 text-amber-200" />
          </button>
        </div>
      </div>

      {/* Main Image Stage with Cinematic Ken Burns Motion Effect */}
      <div className="relative aspect-[16/11] md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden bg-stone-950 flex items-center justify-center">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? 'opacity-100 z-10 scale-100'
                  : 'opacity-0 z-0 scale-105 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={lang === 'en' ? slide.titleEn : slide.titleUr}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover select-none transition-transform ease-out duration-5000 ${
                  isActive && isPlaying ? 'scale-108 translate-y-[-1.5%]' : 'scale-100'
                }`}
              />
              {/* Aesthetic Radial & Vignette Darkness Gradients */}
              <div className="absolute inset-0 bg-radial from-transparent via-stone-950/30 to-stone-950/80 pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* Left & Right Smooth Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-950/50 hover:bg-amber-600/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-2xl opacity-75 hover:opacity-100 hover:scale-110"
          aria-label="Previous Design"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-amber-100" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-950/50 hover:bg-amber-600/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-2xl opacity-75 hover:opacity-100 hover:scale-110"
          aria-label="Next Design"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-amber-100" />
        </button>

        {/* Aesthetic Glassmorphism Info Overlay Card */}
        <div className="absolute bottom-16 left-4 right-4 z-20 p-4 sm:p-5 rounded-2xl bg-stone-950/80 backdrop-blur-xl border border-amber-500/30 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1.5 max-w-md">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-semibold tracking-widest uppercase">
                {lang === 'en' ? currentSlide.tagEn : currentSlide.tagUr}
              </span>
              <span className="text-xs text-stone-300 font-serif">
                {lang === 'en' ? currentSlide.categoryEn : currentSlide.categoryUr}
              </span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-100 font-serif leading-snug tracking-wide">
              {lang === 'en' ? currentSlide.titleEn : currentSlide.titleUr}
            </h3>
          </div>

          <div className="flex items-center sm:flex-col items-end gap-2 sm:gap-1 self-end shrink-0">
            <span className="text-[10px] text-amber-300/80 font-mono uppercase tracking-widest">
              {lang === 'en' ? 'Estimated Value' : 'تخمینہ قیمت'}
            </span>
            <span className="text-sm sm:text-base font-bold text-amber-400 font-serif tracking-tight">
              {lang === 'en' ? currentSlide.priceEn : currentSlide.priceUr}
            </span>
          </div>
        </div>

        {/* Bottom Minimal Aesthetic Thumbnail Strip */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
          {SLIDES.map((slide, idx) => (
            <button
              key={`thumb-${slide.id}`}
              onClick={() => goToSlide(idx)}
              className={`relative h-8 w-11 sm:h-10 sm:w-14 rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 ${
                idx === currentIndex
                  ? 'border-amber-400 scale-105 shadow-[0_0_12px_rgba(251,191,36,0.7)]'
                  : 'border-white/20 opacity-40 hover:opacity-100 hover:border-white/60'
              }`}
            >
              <img
                src={slide.image}
                alt="Thumbnail"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {idx === currentIndex && (
                <div className="absolute inset-0 bg-amber-500/20 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Aesthetic Gold Stamp Badge */}
      <div className="absolute -top-3 -right-3 z-30 w-16 h-16 sm:w-20 sm:h-20 bg-stone-900 border-2 border-amber-500/50 rounded-full flex flex-col items-center justify-center text-amber-300 shadow-2xl select-none">
        <span className="text-[6px] sm:text-[7px] font-mono tracking-[0.2em] font-semibold text-center leading-none text-amber-200/80">ROYAL</span>
        <Award className="h-4 w-4 sm:h-5 sm:w-5 my-0.5 text-amber-400 animate-pulse" />
        <span className="text-[6px] sm:text-[7px] font-mono tracking-[0.2em] font-semibold text-center leading-none text-amber-200/80">CHINIOT</span>
      </div>

      {/* Fullscreen Aesthetic Lightbox View */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-amber-500/20 text-white transition-all cursor-pointer z-50 border border-white/20"
          >
            <X className="h-6 w-6 text-amber-200" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <img
              src={currentSlide.image}
              alt={lang === 'en' ? currentSlide.titleEn : currentSlide.titleUr}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-amber-500/40 shadow-[0_0_50px_rgba(251,191,36,0.2)]"
            />
            <div className="mt-5 text-center text-white space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-300">
                {lang === 'en' ? currentSlide.titleEn : currentSlide.titleUr}
              </h2>
              <p className="text-sm text-stone-300 font-serif">
                {lang === 'en' ? currentSlide.priceEn : currentSlide.priceUr} • {lang === 'en' ? currentSlide.categoryEn : currentSlide.categoryUr}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

