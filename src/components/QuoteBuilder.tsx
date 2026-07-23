import React, { useState, useEffect } from 'react';
import { Landmark, Calculator, Sparkles, Send, Receipt, Check, FileText, Smartphone } from 'lucide-react';
import { Product, QuoteConfig, Inquiry } from '../types';

interface QuoteBuilderProps {
  lang: 'en' | 'ur';
  selectedProductFromGallery: Product | null;
  onInquirySubmitted: (inquiry: Inquiry) => void;
}

export default function QuoteBuilder({ lang, selectedProductFromGallery, onInquirySubmitted }: QuoteBuilderProps) {
  const [config, setConfig] = useState<QuoteConfig>({
    selectedProduct: null,
    woodType: 'Sheesham',
    carvingDepth: 'Medium',
    polishType: 'Glossy',
    upholsteryType: 'Premium Velvet',
    size: 'Standard',
    customNotes: ''
  });

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);

  // Sync if selected product changes from gallery
  useEffect(() => {
    if (selectedProductFromGallery) {
      setConfig(prev => ({
        ...prev,
        selectedProduct: selectedProductFromGallery,
        // Match default features of product if possible
        woodType: 'Sheesham',
        carvingDepth: 'Deep (3D Mughal)',
        polishType: 'Glossy'
      }));
    }
  }, [selectedProductFromGallery]);

  // Pricing configuration
  const woodPriceMultipliers = {
    'Sheesham': 1.0,  // Standard Chiniot Wood
    'Walnut': 1.25,   // Premium walnut (Akhrot)
    'Teak': 1.35      // Luxury teak (Sagan)
  };

  const carvingPriceAdditions = {
    'Light': 0,
    'Medium': 15000,
    'Deep (3D Mughal)': 45000
  };

  const polishPriceAdditions = {
    'Glossy': 0,
    'Deco': 18000,
    'Walnut Matt': 8000,
    'Antique Gold': 15000
  };

  const upholsteryPriceAdditions = {
    'None': 0,
    'Premium Velvet': 12000,
    'Brocade Fabric': 18000
  };

  // Calculate dynamic price
  const estimatedPrice = React.useMemo(() => {
    const base = config.selectedProduct ? config.selectedProduct.priceEstimate : 120000; // default base for completely custom design
    const woodMult = woodPriceMultipliers[config.woodType];
    const carvingCost = carvingPriceAdditions[config.carvingDepth];
    const polishCost = polishPriceAdditions[config.polishType];
    const upholsteryCost = upholsteryPriceAdditions[config.upholsteryType];

    return Math.round((base * woodMult) + carvingCost + polishCost + upholsteryCost);
  }, [config]);

  const handleReset = () => {
    setConfig({
      selectedProduct: null,
      woodType: 'Sheesham',
      carvingDepth: 'Medium',
      polishType: 'Glossy',
      upholsteryType: 'Premium Velvet',
      size: 'Standard',
      customNotes: ''
    });
    setCustomerName('');
    setPhone('');
    setIsSuccess(false);
    setSubmittedInquiry(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;

    const inquiryId = `inq-${Date.now()}`;
    const newInquiry: Inquiry = {
      id: inquiryId,
      customerName,
      phone,
      selectedProduct: config.selectedProduct ? config.selectedProduct.name : 'Custom Wood Piece',
      woodType: config.woodType,
      carvingDepth: config.carvingDepth,
      polishType: config.polishType,
      customNotes: config.customNotes,
      estimatedPrice,
      status: 'pending',
      date: new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    onInquirySubmitted(newInquiry);
    setSubmittedInquiry(newInquiry);
    setIsSuccess(true);
  };

  // Pre-fill WhatsApp message link
  const whatsappLink = React.useMemo(() => {
    if (!submittedInquiry) return '';
    const message = `Assalam-o-Alaikum Al-Haram Furniture Chiniot!

*New Custom Wood Furniture Inquiry*
----------------------------------
*Name:* ${submittedInquiry.customerName}
*Phone:* ${submittedInquiry.phone}
*Item:* ${submittedInquiry.selectedProduct}
*Wood WoodType:* ${submittedInquiry.woodType}
*Carving Detail:* ${submittedInquiry.carvingDepth}
*Polish finish:* ${submittedInquiry.polishType}
*Upholstery:* ${config.upholsteryType}
*Estimated Quote:* PKR ${submittedInquiry.estimatedPrice.toLocaleString()}

*Custom Request Details:*
${submittedInquiry.customNotes || "No extra requests"}

Please contact me back to confirm Wood Seasoning and design process. Shukriya!`;

    return `https://wa.me/923431778196?text=${encodeURIComponent(message)}`;
  }, [submittedInquiry, config]);

  return (
    <section id="quote" className="py-16 md:py-24 bg-linear-to-b from-wood-cream via-wood-cream/95 to-wood-cream/90 border-b border-wood-accent/15 relative">
      {/* Decorative frame border for the section */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-15 bg-[radial-gradient(var(--color-wood-accent)_2px,transparent_2px)] [background-size:12px_12px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-wood-accent font-mono text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-1">
            <Calculator className="h-4 w-4" />
            {lang === 'en' ? 'Interactive Wood Estimator' : 'انٹرایکٹو بجٹ کیلکولیٹر'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-wood-dark">
            {lang === 'en' ? 'Build & Value Your Dream Furniture' : 'اپنے خوابوں کا فرنیچر ڈیزائن کریں'}
          </h2>
          <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Select wood types, custom carvings, and upholstery fabrics to get an instant estimated showroom price. Send specifications straight to our Chiniot team.'
              : 'لکڑی کا انتخاب، نقاشی کی گہرائی، پالش اور کپڑا منتخب کریں اور فوری تخمینہ شدہ قیمت معلوم کریں۔ اپنا ڈیزائن فائنل کر کے ہمیں واٹس ایپ پر ارسال کریں۔'}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-wood-accent/20 shadow-lg p-6 md:p-10">
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column - Specifications Selection */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-serif text-lg font-bold text-wood-dark border-b border-wood-accent/15 pb-2 flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-wood-accent" />
                  {lang === 'en' ? '1. Choose Custom Woodwork Specs' : '1. اپنی مرضی کا ڈیزائن مٹیریل سلیکٹ کریں'}
                </h3>

                {/* Selected Item Indicator */}
                {config.selectedProduct ? (
                  <div className="bg-wood-cream border border-wood-accent/25 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-wood-dark/50 uppercase font-mono block">Base model selected</span>
                      <span className="text-sm font-bold text-wood-dark">
                        {lang === 'en' ? config.selectedProduct.name : config.selectedProduct.nameUrdu}
                      </span>
                    </div>
                    <button
                      type="button"
                      id="remove-selected-product"
                      onClick={() => setConfig(prev => ({ ...prev, selectedProduct: null }))}
                      className="text-xs text-rose-600 hover:text-rose-700 underline font-semibold cursor-pointer"
                    >
                      {lang === 'en' ? 'Reset to Custom' : 'خالص کسٹم ڈیزائن'}
                    </button>
                  </div>
                ) : (
                  <div className="bg-wood-cream/30 border border-wood-accent/10 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-wood-dark/50 uppercase font-mono block">Design approach</span>
                      <span className="text-sm font-bold text-wood-dark/80">
                        {lang === 'en' ? 'Completely Custom Furniture Piece' : 'مکمل نیا کسٹم ڈیزائن فرنیچر'}
                      </span>
                    </div>
                    <span className="text-xs text-wood-accent font-semibold">
                      {lang === 'en' ? 'Standard Base Active' : 'بنیادی ماڈل لاگو'}
                    </span>
                  </div>
                )}

                {/* Grid for Wood and Carving */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Wood Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-wood-dark/80 uppercase tracking-wider block">
                      {lang === 'en' ? 'Wood Selection' : 'لکڑی کا انتخاب'}
                    </label>
                    <select
                      id="quote-wood-select"
                      value={config.woodType}
                      onChange={(e) => setConfig(prev => ({ ...prev, woodType: e.target.value as any }))}
                      className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                    >
                      <option value="Sheesham">Chinioti Sheesham (Tali) (100% Solid)</option>
                      <option value="Walnut">Premium Walnut Wood (Akhrot) (+25%)</option>
                      <option value="Teak">Luxury Teak Wood (Saghan) (+35%)</option>
                    </select>
                  </div>

                  {/* Carving Depth */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-wood-dark/80 uppercase tracking-wider block">
                      {lang === 'en' ? 'Carving Density & Depth' : 'نقاش کی گہرائی اور تراش'}
                    </label>
                    <select
                      id="quote-carving-select"
                      value={config.carvingDepth}
                      onChange={(e) => setConfig(prev => ({ ...prev, carvingDepth: e.target.value as any }))}
                      className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                    >
                      <option value="Light">Light Elegant Carving (+0 PKR)</option>
                      <option value="Medium">Medium Fine Hand Carving (+15k PKR)</option>
                      <option value="Deep (3D Mughal)">Deep 3D Royal Mughal Carving (+45k PKR)</option>
                    </select>
                  </div>

                  {/* Polish Polish */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-wood-dark/80 uppercase tracking-wider block">
                      {lang === 'en' ? 'Polish Finish' : 'پالش کا رنگ اور کوٹنگ'}
                    </label>
                    <select
                      id="quote-polish-select"
                      value={config.polishType}
                      onChange={(e) => setConfig(prev => ({ ...prev, polishType: e.target.value as any }))}
                      className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                    >
                      <option value="Glossy">Walnut High-Gloss Glass Polish (+0 PKR)</option>
                      <option value="Walnut Matt">Modern Matte Walnut Polish (+8,000 PKR)</option>
                      <option value="Antique Gold">Antique Highlights & Golden Leaf (+15,000 PKR)</option>
                      <option value="Deco">Moisture-Proof Deco Paint (+18,000 PKR)</option>
                    </select>
                  </div>

                  {/* Upholstery */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-wood-dark/80 uppercase tracking-wider block">
                      {lang === 'en' ? 'Upholstery Fabric' : 'صوفہ یا بیڈ کا کپڑا'}
                    </label>
                    <select
                      id="quote-upholstery-select"
                      value={config.upholsteryType}
                      onChange={(e) => setConfig(prev => ({ ...prev, upholsteryType: e.target.value as any }))}
                      className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                    >
                      <option value="None">None (Pure Solid Wood Only) (+0 PKR)</option>
                      <option value="Premium Velvet">Premium Royal Soft Velvet (+12,000 PKR)</option>
                      <option value="Brocade Fabric">Floral Golden Brocade Fabric (+18,000 PKR)</option>
                    </select>
                  </div>

                </div>

                {/* Custom Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-wood-dark/80 uppercase tracking-wider block">
                    {lang === 'en' ? 'Customization Notes & Dimensions' : 'خصوصی تبدیلی یا سائز کی ہدایات'}
                  </label>
                  <textarea
                    id="quote-custom-notes"
                    value={config.customNotes}
                    onChange={(e) => setConfig(prev => ({ ...prev, customNotes: e.target.value }))}
                    rows={3}
                    placeholder={lang === 'en' ? "E.g., Bed size should be 6x7 feet, or fabric color should be Dark Emerald Velvet." : "مثال کے طور پر: بیڈ کا سائز 6x7 فٹ ہونا چاہیے، یا صوفہ کے لیے گہرے لال رنگ کا مخمل کپڑا چاہیے۔"}
                    className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                  ></textarea>
                </div>

                {/* Contact details */}
                <h3 className="font-serif text-lg font-bold text-wood-dark border-b border-wood-accent/15 pb-2 pt-4 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-wood-accent" />
                  {lang === 'en' ? '2. Fill Contact Details' : '2. رابطے کے کوائف درج کریں'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-wood-dark/80 block">{lang === 'en' ? 'Your Name' : 'آپ کا نام'}</label>
                    <input
                      type="text"
                      id="quote-name-input"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={lang === 'en' ? "E.g., Muhammad Ahmad" : "جیسے: محمد احمد چودھری"}
                      className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-wood-dark/80 block">{lang === 'en' ? 'Phone / WhatsApp Number' : 'واٹس ایپ نمبر / موبائل'}</label>
                    <input
                      type="tel"
                      id="quote-phone-input"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full bg-white border border-wood-accent/25 rounded-lg px-3 py-2 text-sm text-wood-dark focus:border-wood-accent focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Right Column - Estimate Receipt */}
              <div className="lg:col-span-5 bg-wood-cream/50 border border-wood-accent/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 border-b border-wood-accent/15 pb-3 mb-4">
                    <Receipt className="h-5 w-5 text-wood-accent" />
                    <h4 className="font-serif text-base font-bold text-wood-dark">
                      {lang === 'en' ? 'Estimated Showroom Quote' : 'بجٹ کا تخمینہ رسید'}
                    </h4>
                  </div>

                  {/* Calculations Details List */}
                  <div className="space-y-3 text-xs text-wood-dark/80">
                    <div className="flex justify-between">
                      <span>{lang === 'en' ? 'Base Wood Model' : 'بنیادی لکڑی ماڈل'}</span>
                      <span className="font-semibold text-wood-dark">
                        PKR {config.selectedProduct ? config.selectedProduct.priceEstimate.toLocaleString() : (120000).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>{lang === 'en' ? 'Wood Quality' : 'لکڑی کی قسم'} ({config.woodType})</span>
                      <span className="font-semibold text-wood-dark">
                        x{woodPriceMultipliers[config.woodType].toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>{lang === 'en' ? 'Carving Handwork' : 'نقاشی کی تراش'}</span>
                      <span className="font-semibold text-wood-dark">
                        +PKR {carvingPriceAdditions[config.carvingDepth].toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>{lang === 'en' ? 'Polish Finish' : 'پالش کا رنگ'}</span>
                      <span className="font-semibold text-wood-accent">
                        +PKR {polishPriceAdditions[config.polishType].toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>{lang === 'en' ? 'Upholstery Velvet' : 'کپڑے کا انتخاب'}</span>
                      <span className="font-semibold text-wood-dark">
                        +PKR {upholsteryPriceAdditions[config.upholsteryType].toLocaleString()}
                      </span>
                    </div>

                    <div className="border-t border-wood-accent/20 pt-3 flex justify-between items-center text-sm font-bold text-wood-dark mt-4">
                      <span>{lang === 'en' ? 'Grand Total Estimate' : 'کل تخمینہ رقم'}</span>
                      <span className="text-wood-accent font-serif text-xl">
                        PKR {estimatedPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Seasonal advice advice banner */}
                  <div className="mt-6 bg-wood-cream rounded-xl p-4 border border-wood-accent/20 text-[11px] text-wood-dark/90 leading-relaxed flex gap-2">
                    <Sparkles className="h-4 w-4 text-wood-accent shrink-0" />
                    <span>
                      {lang === 'en' 
                        ? 'Notice: This estimate includes high-end double seasoning of the Sheesham wood in our kiln chambers to prevent future cracking.' 
                        : 'نوٹ: اس تخمینہ میں لکڑی کی بہترین بھٹی خشک (سیزننگ) پالش شامل ہے تا کہ فرنیچر پائیدار رہے اور کریک نہ ہو۔'}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  id="submit-quote-btn"
                  className="w-full py-3 bg-wood-accent hover:bg-wood-brown text-white font-bold text-xs sm:text-sm tracking-widest uppercase rounded-lg shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>{lang === 'en' ? 'Submit Inquiry & Print Receipt' : 'رجسٹریشن اور رسید تیار کریں'}</span>
                </button>
              </div>

            </form>
          ) : (
            // Success State - Show confirmation and WhatsApp button
            <div id="quote-success-panel" className="text-center py-8 max-w-xl mx-auto space-y-6">
              <div className="h-16 w-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <Check className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-wood-dark">
                  {lang === 'en' ? 'Quote Registry Successful!' : 'بجٹ رسید تیار کر دی گئی ہے!'}
                </h3>
                <p className="text-wood-dark/80 text-sm leading-relaxed">
                  {lang === 'en' 
                    ? 'Your inquiry is saved in Al-Haram Showroom Registry. Now click below to send this directly to our carving master on WhatsApp for final booking!'
                    : 'آپ کا ڈیزائن ہمارے چنیوٹ ریکارڈ میں درج ہو چکا ہے۔ فائنل آرڈر یا مزید تفصیلات کے لیے نیچے واٹس ایپ بٹن دبا کر ہم سے رابطہ کریں۔'}
                </p>
              </div>

              {/* Submitted specifications printout */}
              {submittedInquiry && (
                <div className="bg-wood-cream border border-wood-accent/20 rounded-2xl p-5 text-left text-xs space-y-3 shadow-xs">
                  <div className="flex justify-between border-b border-wood-accent/15 pb-2">
                    <span className="font-bold text-wood-dark">{lang === 'en' ? 'Showroom Ticket' : 'ٹکٹ نمبر:'}</span>
                    <span className="font-mono text-wood-dark/70 font-bold">{submittedInquiry.id}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-wood-dark/90">
                    <div><strong>{lang === 'en' ? 'Customer:' : 'گاہک:'}</strong> {submittedInquiry.customerName}</div>
                    <div><strong>{lang === 'en' ? 'Phone:' : 'فون نمبر:'}</strong> {submittedInquiry.phone}</div>
                    <div><strong>{lang === 'en' ? 'Model:' : 'فرنیچر ماڈل:'}</strong> {submittedInquiry.selectedProduct}</div>
                    <div><strong>{lang === 'en' ? 'Wood Quality:' : 'لکڑی قسم:'}</strong> {submittedInquiry.woodType}</div>
                    <div><strong>{lang === 'en' ? 'Carving Style:' : 'نقاش کا کام:'}</strong> {submittedInquiry.carvingDepth}</div>
                    <div><strong>{lang === 'en' ? 'Polish Coat:' : 'پالش رنگ:'}</strong> {submittedInquiry.polishType}</div>
                  </div>
                  <div className="pt-2 border-t border-wood-accent/15 flex justify-between items-center text-sm font-bold text-wood-dark">
                    <span>{lang === 'en' ? 'Calculated Value:' : 'کل بجٹ تخمینہ:'}</span>
                    <span className="text-wood-accent font-serif">PKR {submittedInquiry.estimatedPrice.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 justify-center">
                <a
                  id="whatsapp-direct-link"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#1ebd55] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="h-4.5 w-4.5" />
                  <span>{lang === 'en' ? 'Send Specs to WhatsApp' : 'تفصیل واٹس ایپ پر بھیجیں'}</span>
                </a>

                <button
                  id="reset-quote-builder"
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-white hover:bg-wood-cream text-wood-dark border border-wood-accent/20 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg transition-all text-center cursor-pointer"
                >
                  {lang === 'en' ? 'New Design Calculation' : 'نیا ڈیزائن کیلکولیٹ کریں'}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
