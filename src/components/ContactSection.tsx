import React from 'react';
import { Phone, MapPin, Mail, Box, Calendar, Clock, Sparkles, Trash2 } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactSectionProps {
  lang: 'en' | 'ur';
  inquiriesList: Inquiry[];
  onDeleteInquiry?: (id: string) => void;
}

export default function ContactSection({ lang, inquiriesList, onDeleteInquiry }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-linear-to-b from-wood-cream/95 via-wood-cream to-wood-cream/90 border-b border-wood-accent/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-wood-accent font-mono text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-1">
            <Clock className="h-4 w-4" />
            {lang === 'en' ? 'Get In Touch' : 'رابطہ اور شوروم کی تفصیلات'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-wood-dark">
            {lang === 'en' ? 'Visit Our Chiniot Showroom or Order Online' : 'چنیوٹ شوروم وزٹ کریں یا آن لائن آرڈر دیں'}
          </h2>
          <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Our physical showroom is located at Shaheed Chowk near Sabz Mehal, Chiniot. We provide secure double-crated wooden cargo delivery to Lahore, Karachi, Islamabad, and all over Pakistan.'
              : 'ہمارا فزیکل شوروم شہید چوک، سبز محل کے قریب، چنیوٹ پر واقع ہے۔ ہم پورے پاکستان بشمول لاہور، کراچی، اور اسلام آباد میں مضبوط لکڑی کے کریٹس میں فرنیچر کارگو ڈیلیور کرتے ہیں۔'}
          </p>
        </div>

        {/* Contact and Showroom Registry Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact details & Delivery Protocol */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="bg-white border border-wood-accent/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="font-serif text-lg font-bold text-wood-dark flex items-center gap-1.5 border-b border-wood-accent/15 pb-2">
                <Sparkles className="h-4.5 w-4.5 text-wood-accent" />
                {lang === 'en' ? 'Al Haram Showroom Address' : 'الحرم شوروم رابطہ معلومات'}
              </h3>

              {/* Detail Blocks */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-wood-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-wood-dark block">{lang === 'en' ? 'Location Address:' : 'شوروم پتا:'}</strong>
                    <span className="text-wood-dark/80">
                      {lang === 'en'
                        ? 'Al Haram Furniture, Shaheed Chowk near Sabz Mehal, Chiniot, Punjab, Pakistan.'
                        : 'الحرم فرنیچر، شہید چوک، نزد سبز محل، چنیوٹ، پنجاب، پاکستان۔'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-wood-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-wood-dark block">{lang === 'en' ? 'Phone & WhatsApp:' : 'فون اور واٹس ایپ:'}</strong>
                    <span className="text-wood-dark/80">0343 1778196</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-wood-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-wood-dark block">{lang === 'en' ? 'Email Support:' : 'ای میل رابطہ:'}</strong>
                    <span className="text-wood-dark/80">info@alharamfurniturechiniot.com</span>
                  </div>
                </div>

              </div>

              {/* Map simulation */}
              <div className="rounded-lg overflow-hidden border border-wood-accent/15 bg-wood-cream h-40 relative">
                {/* Simulated map graphic */}
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop')` }}></div>
                <div className="absolute inset-0 bg-wood-cream/85 backdrop-blur-[1px] flex flex-col justify-center items-center text-center p-4">
                  <MapPin className="h-7 w-7 text-wood-accent animate-bounce mb-1" />
                  <span className="text-wood-dark text-xs font-bold font-sans">SHAHEED CHOWK, CHINIOT</span>
                  <span className="text-wood-dark/80 text-[10px] uppercase font-mono mt-0.5">{lang === 'en' ? 'Near Sabz Mehl' : 'سبز محل کے قریب'}</span>
                </div>
              </div>
            </div>

            {/* Packing security security banner */}
            <div className="bg-wood-cream text-wood-dark rounded-2xl p-6 sm:p-8 flex gap-4 border border-wood-accent/20 shadow-xs">
              <Box className="h-8 w-8 text-wood-accent shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-wood-accent">
                  {lang === 'en' ? 'Secure Double-Crate Wooden Packaging' : 'لکڑی کے مضبوط کریٹ پیکیجنگ'}
                </h4>
                <p className="text-wood-dark/80 text-xs mt-1 leading-relaxed">
                  {lang === 'en' 
                    ? 'All outward shipments are packed in a custom-built secondary pine-wood crate frame to prevent any transport friction or polish damage during long-distance shipping.' 
                    : 'ہم فرنیچر کارگو کرتے وقت اس کے گرد فوم کی تہہ چڑھا کر لکڑی کا پکا شیلڈ ڈبہ (کریٹ) بناتے ہیں، تا کہ طویل سفر میں فرنیچر پر معمولی خراش بھی نہ آئے۔'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Showroom Registry Board (Dynamic inquiries logged locally) */}
          <div className="lg:col-span-7 bg-white border border-wood-accent/20 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-wood-accent/15 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-wood-accent" />
                  <h4 className="font-serif text-sm sm:text-base font-bold text-wood-dark">
                    {lang === 'en' ? 'Showroom Custom Inquiries Registry' : 'شوروم کسٹم آرڈر بکنگ بورڈ'}
                  </h4>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full font-bold">
                  {lang === 'en' ? 'Real-time Updates' : 'لائیو اپ ڈیٹس'}
                </span>
              </div>

              <p className="text-wood-dark/80 text-xs leading-relaxed">
                {lang === 'en' 
                  ? 'Below are recently calculated quotes and customization inquiries submitted by users in this session. These specs are stored locally in your browser memory.' 
                  : 'اس سیشن میں گاہکوں کی طرف سے تیار کی جانے والی مختلف کسٹم رسیدوں کا ریکارڈ مندرجاجہ ذیل ہے۔ یہ ریکارڈ آپ کے براؤزر میموری میں محفوظ ہے۔'}
              </p>

              {/* Inquiries table display */}
              {inquiriesList.length > 0 ? (
                <div className="overflow-x-auto border border-wood-accent/15 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-wood-cream/40 border-b border-wood-accent/15 text-wood-dark/80">
                        <th className="p-3 font-semibold">{lang === 'en' ? 'Customer' : 'گاہک'}</th>
                        <th className="p-3 font-semibold">{lang === 'en' ? 'Custom Item' : 'مٹیریل کسٹمائزیشن'}</th>
                        <th className="p-3 font-semibold">{lang === 'en' ? 'Specs' : 'لکڑی'}</th>
                        <th className="p-3 font-semibold text-right">{lang === 'en' ? 'Estimated PKR' : 'تخمینہ رقم'}</th>
                        {onDeleteInquiry && <th className="p-3 text-center w-12"></th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-wood-accent/10 text-wood-dark/95">
                      {inquiriesList.map((inq) => (
                        <tr key={inq.id} className="hover:bg-wood-cream/40">
                          <td className="p-3">
                            <span className="font-bold block text-wood-dark">{inq.customerName}</span>
                            <span className="text-[10px] text-wood-dark/60 font-mono block">{inq.phone}</span>
                          </td>
                          <td className="p-3">
                            <span className="font-semibold block text-wood-dark/90">{inq.selectedProduct}</span>
                            <span className="text-[9px] text-wood-dark/60 font-mono block">Date: {inq.date}</span>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col gap-0.5 text-[10px] text-wood-dark/70">
                              <span>Wood: <strong className="text-wood-dark">{inq.woodType}</strong></span>
                              <span>Carving: <strong className="text-wood-dark">{inq.carvingDepth}</strong></span>
                              <span>Polish: <strong className="text-wood-dark">{inq.polishType}</strong></span>
                            </div>
                          </td>
                          <td className="p-3 text-right font-bold text-wood-accent">
                            PKR {inq.estimatedPrice.toLocaleString()}
                          </td>
                          {onDeleteInquiry && (
                            <td className="p-3 text-center">
                              <button
                                onClick={() => onDeleteInquiry(inq.id)}
                                className="text-red-500 hover:text-red-700 p-1 rounded-md hover:bg-red-50 transition-colors"
                                title={lang === 'en' ? 'Remove record' : 'ریکارڈ حذف کریں'}
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-10 border border-dashed border-wood-accent/20 rounded-xl p-4">
                  <Box className="h-8 w-8 text-wood-dark/40 mx-auto mb-2 animate-pulse" />
                  <span className="text-wood-dark/70 text-xs block">
                    {lang === 'en' ? 'No custom ticket created yet.' : 'کوئی رسید ابھی تک تیار نہیں کی گئی۔'}
                  </span>
                  <span className="text-wood-accent text-[10px] font-semibold block mt-1">
                    {lang === 'en' ? 'Use the Interactive Quote Builder above!' : 'بجٹ معلوم کرنے کے لیے اوپر کیلکولیٹر استعمال کریں!'}
                  </span>
                </div>
              )}
            </div>

            {/* Shipping Trust logo banner */}
            <div className="pt-4 border-t border-wood-accent/15 text-[10px] text-wood-dark/60 flex flex-wrap items-center justify-between gap-2 mt-4">
              <span>Showroom Code: CHN-ALH-992</span>
              <span className="font-medium text-wood-dark/80">
                {lang === 'en' ? '★ Verified Chinioti Guild Member' : '★ رجسٹرڈ چنیوٹی کارپینٹری ممبر'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
