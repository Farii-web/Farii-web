import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutChiniot from './components/AboutChiniot';
import Catalog from './components/Catalog';
import QuoteBuilder from './components/QuoteBuilder';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Product, Inquiry } from './types';

// Import our beautiful custom-generated high-quality Chinioti furniture photos
import heroImage from './assets/images/chinioti_furniture_hero_1784559738859.jpg';
import sofaImage from './assets/images/chinioti_carved_sofa_1784559762922.jpg';
import diningImage from './assets/images/chinioti_dining_table_1784559784870.jpg';
import bedImage from './assets/images/chinioti_carved_bed_1784559807771.jpg';
import roomSetImage from './assets/images/chinioti_room_set_1784617930498.jpg';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en'); // Default to English as requested
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [inquiriesList, setInquiriesList] = useState<Inquiry[]>([]);

  // Load inquiries from localStorage on initial render
  useEffect(() => {
    try {
      const stored = localStorage.getItem('al_haram_inquiries_v1');
      if (stored) {
        const parsed: Inquiry[] = JSON.parse(stored);
        const filtered = parsed.filter(inq => !inq.customerName.toLowerCase().includes('hashim'));
        setInquiriesList(filtered);
        localStorage.setItem('al_haram_inquiries_v1', JSON.stringify(filtered));
      } else {
        // Seed default initial registries to make the showroom look active and professional!
        const initialSeed: Inquiry[] = [
          {
            id: "inq-seed-1",
            customerName: "Imran Khan (Karachi)",
            phone: "0321 **** 921",
            selectedProduct: "Sovereign Shahan-e-Mughlia Bed Set",
            woodType: "Sheesham",
            carvingDepth: "Deep (3D Mughal)",
            polishType: "Glossy",
            customNotes: "Mattress size 72x78 inches, custom walnut gloss coat",
            estimatedPrice: 230000,
            status: "responded",
            date: "Jul 18, 2026"
          },
          {
            id: "inq-seed-2",
            customerName: "Ayesha Bibi (Lahore)",
            phone: "0300 **** 156",
            selectedProduct: "Grand Darbar Royal Sofa Set (5-Seater)",
            woodType: "Sheesham",
            carvingDepth: "Deep (3D Mughal)",
            polishType: "Antique Gold",
            customNotes: "Need pure royal green velvet upholstery on wood borders",
            estimatedPrice: 300000,
            status: "responded",
            date: "Jul 19, 2026"
          }
        ];
        setInquiriesList(initialSeed);
        localStorage.setItem('al_haram_inquiries_v1', JSON.stringify(initialSeed));
      }
    } catch (e) {
      console.error("LocalStorage load error:", e);
    }
  }, []);

  // Update scroll intersection observers to set current active section highlights in Header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'catalog', 'quote', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Callback when a user finishes configuring their furniture and submits a Quote ticket
  const handleInquirySubmitted = (newInquiry: Inquiry) => {
    const updatedList = [newInquiry, ...inquiriesList];
    setInquiriesList(updatedList);
    try {
      localStorage.setItem('al_haram_inquiries_v1', JSON.stringify(updatedList));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  const handleDeleteInquiry = (id: string) => {
    const updatedList = inquiriesList.filter(inq => inq.id !== id);
    setInquiriesList(updatedList);
    try {
      localStorage.setItem('al_haram_inquiries_v1', JSON.stringify(updatedList));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  const handleActionScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-wood-cream text-wood-dark selection:bg-wood-accent/20">
      
      {/* Sticky Bilingual Header Navigation */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        activeSection={activeSection} 
      />

      {/* Main Sections Stack */}
      <main className="flex-1">
        
        {/* Immersive Brand Hero Showcase */}
        <Hero 
          lang={lang} 
          heroImage={heroImage} 
          bedImage={bedImage}
          onActionClick={handleActionScroll} 
        />

        {/* Legend of Chiniot Artisanal Woodwork & Seasoning Education */}
        <AboutChiniot 
          lang={lang} 
        />

        {/* Showroom Interactive Gallery & Specification Modals */}
        <Catalog 
          lang={lang} 
          onSelectProductForQuote={setSelectedProductForQuote}
          bedImage={bedImage}
          sofaImage={sofaImage}
          diningImage={diningImage}
          roomSetImage={roomSetImage}
        />

        {/* Interactive Custom Furniture Cost Calculator & WhatsApp generator */}
        <QuoteBuilder 
          lang={lang} 
          selectedProductFromGallery={selectedProductForQuote}
          onInquirySubmitted={handleInquirySubmitted}
        />

        {/* Map Coordinates, Cargo Security details, & Dynamic Inquiry Board */}
        <ContactSection 
          lang={lang} 
          inquiriesList={inquiriesList} 
          onDeleteInquiry={handleDeleteInquiry}
        />

      </main>

      {/* Footer Branding & Pride Signature */}
      <Footer 
        lang={lang} 
      />

    </div>
  );
}
