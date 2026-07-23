import React, { useState } from 'react';
import { Trees, Wind, Hammer, Flame, Palette, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'ur';
}

export default function AboutChiniot({ lang }: AboutProps) {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      title: "1. Wood Selection",
      titleUr: "1. لکڑی کا انتخاب",
      icon: Trees,
      desc: "We select only 100% genuine dark reddish-brown solid Sheesham (Indian Rosewood / Tali) heartwood. This wood is chosen for its extreme density, resistance to termites, and rich natural grain patterns.",
      descUr: "ہم صرف 100٪ خالص گہرے لال رنگ کی پکی شیشم (ٹالی) کے تنے کا انتخاب کرتے ہیں۔ یہ لکڑی اپنی بے پناہ مضبوطی، دیمک کے خلاف مزاحمت اور لکڑی کے خوبصورت قدرتی نقش و نگار کے لیے جانی جاتی ہے۔"
    },
    {
      title: "2. Seasoning & Kiln Drying",
      titleUr: "2. لکڑی کی سیزننگ",
      icon: Wind,
      desc: "Our wood undergoes 6-8 weeks of seasoning in customized steam-kilns. This lowers the moisture content below 10%, guaranteeing the finished furniture will never warp, bend, or crack under any weather condition.",
      descUr: "ہماری منتخب کردہ لکڑی کو چیمبرز میں سیزننگ (خشک) کیا جاتا ہے جس سے اس کی نمی 10 فیصد سے کم ہو جاتی ہے۔ اس بات کی ضمانت ہے کہ شدید سردی یا گرمی میں بھی فرنیچر کبھی بھی ٹیڑھا نہیں ہو گا اور نہ ہی دراڑیں پڑیں گی۔"
    },
    {
      title: "3. Naqashi (Hand Carving)",
      titleUr: "3. ہاتھ کی نقاشی اور تراش",
      icon: Hammer,
      desc: "Chiniot's world-famous manual 'Naqashi' carving. Our veteran artisans spend hundreds of hours using traditional chisels to sculpt intricate Mughal-style crowns (Taj), floral wreaths, and complex 3D carvings.",
      descUr: "چنیوٹ کی عالمی شہرت یافتہ ہاتھ کی نقاشی۔ ہمارے ماہر کاریگر روایتی چھینیوں کی مدد سے گھنٹوں کی محنت سے مغلائی تاج، پھول پتے اور گہرے تھری ڈی (3D) ڈیزائن تراشتے ہیں، جو کمپیوٹر مشین سے ناممکن ہیں۔"
    },
    {
      title: "4. Solid Wood Joinery",
      titleUr: "4. مضبوط جڑائی اور کساؤ",
      icon: Flame,
      desc: "Instead of nails or simple screws, we use authentic mortise-and-tenon interlocking joinery. This traditional technique provides unmatched structural integrity, keeping the joints tight for generations.",
      descUr: "ہم فرنیچر کی جڑائی میں کیلوں یا معمولی پیچ کی جگہ مضبوط مولی کساؤ اور روایتی چوکھٹ جوائنٹس کا استعمال کرتے ہیں۔ یہ طریقہ فرنیچر کو بے پناہ پائیداری بخشتا ہے جو نسل در نسل ہلتا بھی نہیں ہے۔"
    },
    {
      title: "5. Polish & Lacquer Finish",
      titleUr: "5. پالش اور فائنل فنشنگ",
      icon: Palette,
      desc: "We apply multi-layered moisture-resistant polishes. Choose from high-gloss glass polish, modern Walnut matte, antique golden highlights, or custom Deco paints that preserve and highlight the wood's natural grain.",
      descUr: "ہم کئی تہوں والی نمی سے محفوظ رکھنے والی چمکدار پالش کرتے ہیں۔ آپ شیشے جیسی تیز چمک (Glossy)، جدید والنٹ میٹ (Matt)، اینٹیک گولڈ پتے یا مرضی کا ڈیکو کلر منتخب کر سکتے ہیں جو لکڑی کی قدرتی خوبصورتی کو نکھارتی ہے۔"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-wood-cream/40 border-b border-wood-accent/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-wood-accent font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            {lang === 'en' ? 'Our Traditional Legacy' : 'ہمارا روایتی ورثہ'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-wood-dark">
            {lang === 'en' ? 'The Legendary Art of Chinioti Woodwork' : 'چنیوٹی لکڑی کے شاہکاروں کا سفر'}
          </h2>
          <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Chiniot is globally celebrated for hand-carving masterpieces. At Al-Haram Furniture, we preserve this centuries-old manual art form, blending it with modern wood seasoning technology.'
              : 'چنیوٹ اپنے ہاتھ سے بنے دیدہ زیب فرنیچر کی وجہ سے پوری دنیا میں مانا جاتا ہے۔ الحرم فرنیچر پر ہم چنیوٹ کے اس صدیوں پرانے فن کو جدید سیزننگ ٹیکنالوجی کے ساتھ ملا کر آپ تک پہنچاتے ہیں۔'}
          </p>
        </div>

        {/* Layout: Interactive Steps Timeline and Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Step Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={idx}
                  id={`craftsmanship-step-btn-${idx}`}
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-wood-accent/15 border-wood-accent shadow-md'
                      : 'bg-white border-wood-accent/15 hover:bg-wood-cream hover:border-wood-accent/25'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg transition-colors ${
                    isSelected ? 'bg-wood-accent text-white font-bold' : 'bg-wood-cream text-wood-accent'
                  }`}>
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm sm:text-base font-semibold ${
                      isSelected ? 'text-wood-dark font-bold' : 'text-wood-dark/80 hover:text-wood-dark'
                    }`}>
                      {lang === 'en' ? step.title : step.titleUr}
                    </h3>
                    <p className="text-wood-dark/50 text-[10px] sm:text-xs mt-0.5">
                      {lang === 'en' ? 'Click to view process' : 'طریقہ کار دیکھنے کے لیے کلک کریں'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Process Details Viewer (Right Column) */}
          <div className="lg:col-span-7 bg-white border border-wood-accent/25 rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-xs">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-wood-accent/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-wood-accent tracking-widest font-bold uppercase">
                  {lang === 'en' ? 'CHINIOT CRAFT CYCLE' : 'چنیوٹی مہارت کا سفر'}
                </span>
                <span className="text-3xl sm:text-4xl font-serif text-wood-accent/20 font-bold">
                  0{selectedStep + 1}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-wood-dark">
                  {lang === 'en' ? steps[selectedStep].title : steps[selectedStep].titleUr}
                </h3>
                
                <p className="text-wood-dark/90 text-sm sm:text-base leading-relaxed urdu-text">
                  {lang === 'en' ? steps[selectedStep].desc : steps[selectedStep].descUr}
                </p>
              </div>

              {/* Core Quality Promise */}
              <div className="pt-6 border-t border-wood-accent/20 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-wood-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-wood-dark">
                    {lang === 'en' ? 'Al-Haram Showroom Quality Standard' : 'الحرم فرنیچر کوالٹی گارنٹی'}
                  </h4>
                  <p className="text-wood-dark/75 text-xs mt-0.5">
                    {lang === 'en' 
                      ? 'Every piece carries a stamp of lifetime durability and wood authenticity.' 
                      : 'لکڑی خالص ہونے کی تصدیق اور نسلوں تک پائیداری کی تحریری گارنٹی دی جاتی ہے۔'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
