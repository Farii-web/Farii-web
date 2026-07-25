import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Eye, HelpCircle, Heart, PlusCircle, Check, X, Shield, Landmark } from 'lucide-react';
import { Product } from '../types';
import longChairsShowroomImage from '../assets/images/alharam_chairs_clean_1784950098324.jpg';
import safeAlmariImage from '../assets/images/chinioti_safe_almari_1784739769587.jpg';
import royalWardrobeImage from '../assets/images/chinioti_royal_wardrobe_1784906332729.jpg';
import roomDividerImage from '../assets/images/chinioti_room_divider_1784906741385.jpg';
import consoleMirrorImage from '../assets/images/chinioti_console_mirror_1784739788572.jpg';
import jhulaImage from '../assets/images/chinioti_royal_jhula_1784740393068.jpg';
import dressingImage from '../assets/images/chinioti_dressing_table_1784740414730.jpg';
import cornerCabinetImage from '../assets/images/chinioti_corner_cabinet_1784740434049.jpg';
import deewanImage from '../assets/images/chinioti_royal_deewan_1784740450170.jpg';
import showcaseWorkshopImage from '../assets/images/chinioti_showcase_workshop_1784950770746.jpg';
import goldenBedsetImage from '../assets/images/no_sheet_tufted_bed_1784952087728.jpg';
import beforeAfterCraftImage from '../assets/images/chiniot_craft_nosheet_split_1784952563441.jpg';

interface CatalogProps {
  lang: 'en' | 'ur';
  onSelectProductForQuote: (product: Product) => void;
  // Dynamic images passed from App
  bedImage: string;
  sofaImage: string;
  diningImage: string;
  roomSetImage: string;
}

export default function Catalog({ lang, onSelectProductForQuote, bedImage, sofaImage, diningImage, roomSetImage }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});

  // Static list of premium Chinioti products
  const products: Product[] = useMemo(() => [
    {
      id: "prod-craft-transformation",
      name: "Chinioti Masterpiece: Raw Hand Carving to Royal Finished Furniture",
      nameUrdu: "چنیوٹی شاہکار: خام تراش سے مکمل تیار اینٹیک فرنیچر تک",
      category: "masterpieces",
      description: "An authentic split comparison image showcasing the Chinioti craftsmanship journey. Left shows our skilled artisan hand-carving raw Sheesham wood in the workshop; Right shows the completed gold-leaf polished tufted bed set.",
      descriptionUrdu: "ایک ہی تصویر میں دیکھئے: بائیں طرف ہمارے ماہر کاریگر کو ورکشاپ میں خام لکڑی پر چھینی سے نقش کاری کرتے ہوئے اور دائیں طرف وہی مکمل تیار اور اینٹیک پالش شدہ شاندار شاہکار۔",
      priceEstimate: 245000,
      image: beforeAfterCraftImage,
      woodType: "100% Solid Seasoned Sheesham Wood (Tali)",
      carvingStyle: "Manual Hand Chisel Naqashi & Imperial Polish",
      polishType: "Raw Wood to High-Gloss Antique Gold Leaf Polish",
      features: ["Side-by-Side Craftsmanship Transformation View", "Authentic Pakistani Artisan Hand-Carving Process", "100% Solid Seasoned Sheesham Wood Frame", "Custom Polish & Upholstery Available"],
      featuresUrdu: ["ایک ہی فریم میں پہلے اور بعد کا مکمل منظر", "پاکستانی ماہر کاریگر کا روایتی ہاتھ کا کام", "خالص اور پکی سیزنڈ شیشم کی لکڑی", "حسب منشا پالش اور کپڑے کی سہولت"]
    },
    {
      id: "prod-golden-royal-bed",
      name: "Imperial Golden Antique Crown Chinioti Royal Bed Set",
      nameUrdu: "امپیریل گولڈن اینٹیک تاج شاہی چنیوٹی بیڈ سیٹ",
      category: "bedroom",
      description: "A breathtaking royal Chinioti king bed set featuring intricate heavy crown (Taj) carving in antique gold leaf finish with off-white diamond-tufted velvet upholstery, 2 matching side tables, and front bench.",
      descriptionUrdu: "ایک شاندار اینٹیک گولڈن ورک والا شاہی چنیوٹی بیڈ سیٹ جس پر بھاری ہاتھ کی تاج کاری اور کریم مخمل کشننگ کی گئی ہے۔ اس سیٹ میں 2 عدد سائیڈ ٹیبلز اور سامنے والی بینچ شامل ہیں۔",
      priceEstimate: 245000,
      image: goldenBedsetImage,
      woodType: "100% Solid Seasoned Sheesham Wood (Tali)",
      carvingStyle: "Heavy Imperial Taj (Crown) & Acanthus Scrollwork",
      polishType: "Antique Royal Gold Leaf & Rosewood Polish",
      features: ["Heavy Hand-Carved Royal Crown Headboard & Footboard", "Premium Off-White Diamond Tufted Velvet Cushioning", "Includes 2 Carved Golden Side Tables & Front Bench", "100% Pure Seasoned Sheesham Solid Wood Frame"],
      featuresUrdu: ["بھاری شاہی تاج کاری والا ہیڈ بورڈ اور فٹ بورڈ", "پریمیئم کریم کلر ڈائمنڈ ٹفٹڈ مخمل کشننگ", "شامل ہیں 2 عدد گولڈ سائیڈ ٹیبلز اور فرنچ بینچ", "خالص اور مضبوط شیشم کا فریم"]
    },
    {
      id: "prod-royal-showcase",
      name: "3-Door Arched Imperial Chinioti Glass Showcase Cabinet",
      nameUrdu: "3 دروں والا محرابی شاہی چنیوٹی ڈسپلے شوکیس",
      category: "storage",
      description: "An elegant 3-door arched Chinioti royal glass display showcase cabinet. Hand-crafted in pure solid Sheesham wood with deep Mughal arch carving, clean clear glass shelves, and brass hardware.",
      descriptionUrdu: "3 دروازوں والا محرابی شاہی چنیوٹی ڈسپلے شوکیس۔ خالص کالی شیشم کی لکڑی، ہاتھ کی مغلائی محرابی تاج کاری، شفاف شیشے کی طاقیں اور عالي شان پیتل کے ہینڈلز۔",
      priceEstimate: 165000,
      image: showcaseWorkshopImage,
      woodType: "100% Seasoned Sheesham Wood (Tali)",
      carvingStyle: "Mughal Imperial Arch (Mehrab) & Floral Relief",
      polishType: "High-Gloss Antique Mahogany Rosewood Polish",
      features: ["Traditional 3-Door Arched Glass Display Design", "Clear glass shelves & full view display sides", "Hand-carved solid Sheesham Mehrab arch & floral trim", "Solid brass lock mechanisms & authentic handles"],
      featuresUrdu: ["روایتی 3 دروں والا محرابی شیشہ شوکیس", "شفاف شیشے کے شیلف اور فل ویو سائیڈز", "خالص شیشم کا ہاتھ سے تراشیدہ مغلائی محراب", "پیتل کے چمکدار ہینڈلز اور لاک"]
    },
    {
      id: "prod-wardrobe-royal",
      name: "Grand Imperial Chinioti 4-Door Royal Wooden Wardrobe",
      nameUrdu: "گرینڈ امپیریل چنیوٹی 4 در شاہی الماری",
      category: "storage",
      description: "A monumental 4-door royal wooden wardrobe crafted from pure seasoned dark Sheesham rosewood. Features grand hand-carved Mughal crown (Taj) top crests, ornate floral panel carvings, brass locks, inner secret drawers, and clothes hanging rods.",
      descriptionUrdu: "خالص سیزن شدہ کالی شیشم کی لکڑی سے تیار کردہ 4 دروں والی شاہی الماری۔ اس پر ہاتھ سے تراشیدہ دلکش مغلائی تاج، پھولدار کندہ کاری، پیتل کے شاہی ہینڈل، اور اندرونی خفیہ درازیں موجود ہیں۔",
      priceEstimate: 215000,
      image: royalWardrobeImage,
      woodType: "100% Seasoned Sheesham Heartwood",
      carvingStyle: "Mughal Imperial Crown (Taj) & Floral Relief",
      polishType: "High-Gloss Natural Dark Rosewood Polish",
      features: ["4 Massive Hand-Carved Sheesham Doors", "Top ornate Mughal Taj (Crown) carving", "Built-in velvet jewelry & secret locker drawers", "Heavy solid brass hinges, handles & locks"],
      featuresUrdu: ["4 بھاری منقش شیشم کے دروازے", "اوپری شاہی مغلائی تاج کی کندہ کاری", "خفیہ مخملی زیورات اور والٹ درازیں", "پیتل کے پائیدار شاہی قبضے اور ہینڈلز"]
    },
    {
      id: "prod-100",
      name: "Grand Royal Mughal Shadi Complete Room Set",
      nameUrdu: "گرینڈ شاہی مغل شادی مکمل بیڈ روم سیٹ",
      category: "bedroom",
      description: "A complete, luxurious matching Chinioti bedroom package. Includes our magnificent hand-carved Mughal Crown King-Size Bed, two royal bedside tables with ornate detailing, a massive matching 4-door wardrobe, and a majestic dressing table with a large arched frame.",
      descriptionUrdu: "ایک ہی تھیم پر تیار کردہ مکمل اور پرتعیش چنیوٹی دولہا دلہن بیڈ روم پیکیج۔ اس میں ہمارا ہاتھ کا بنا شاہی تاج والا کنگ سائز بیڈ، دو عدد سائیڈ ٹیبلز، ایک بڑی 4 دروازوں والی الماری، اور مغلائی محراب والا سنگھار میز (ڈریسنگ ٹیبل) شامل ہے۔",
      priceEstimate: 495000,
      image: roomSetImage,
      woodType: "100% Pure Seasoned Sheesham Heartwood",
      carvingStyle: "Continuous Imperial 3D Deep Relief",
      polishType: "Premium Antique Gold & Natural Walnut Polish",
      features: ["Complete 5-Piece matching luxury master bedroom set", "Authentic 3D royal crown deep hand carving", "100% seasoned solid Sheesham timber warranty", "Custom size, upholstery fabric and finish adjustment"],
      featuresUrdu: ["مکمل 5 پیسز کا میچنگ پریمیم بیڈ روم سیٹ", "خالص روایتی ہاتھ کی گہری منقش کاری", "۱۰۰ فیصد پکی کالی ٹالی کی لکڑی کی گارنٹی", "سائز، کپڑے کا رنگ اور پالش آپ کی پسند کے مطابق"]
    },
    {
      id: "prod-1",
      name: "Chinioti Royal High-Back Long Chairs",
      nameUrdu: "چنیوٹی لمبی پشت والی شاہی کرسیاں",
      category: "living",
      description: "Grand high-back hand-carved Chinioti long chairs set in solid dark Sheesham rosewood. Adorned with magnificent crown carvings and plush golden velvet cushioning.",
      descriptionUrdu: "ہاتھ سے تراشیدہ چنیوٹی لمبی اور اونچی پشت والی شاہی کرسیاں۔ خالص کالی شیشم کی لکڑی، شاہی تاج کی نقش نگاری اور قیمتی سنہری مخمل کشن کے ساتھ۔",
      priceEstimate: 135000,
      image: longChairsShowroomImage,
      woodType: "100% Pure Seasoned Sheesham (Tali)",
      carvingStyle: "Mughal High-Crown Relief (Deep Carving)",
      polishType: "Natural Rosewood Walnut Gloss Polish",
      features: ["5.5ft Extra Tall High-Back Design", "Authentic Chinioti master craftsmanship", "High-density Master foam velvet cushioning", "Heavy solid Sheesham timber frame"],
      featuresUrdu: ["ساڑھے ۵ فٹ اونچی پشت والا شاہی ماڈل", "چنیوٹ کے ماہرین کا بہترین شاہکار", "پریمیئم ماسٹر فوم اور گولڈن مخمل", "خالص اور مضبوط کالی شیشم لکڑی"]
    },
    {
      id: "prod-2",
      name: "Grand Darbar Royal Sofa Set (5-Seater)",
      nameUrdu: "دیوانِ خاص شاہی صوفہ سیٹ (5 سیٹر)",
      category: "living",
      description: "Traditional royal sofa set with heavy 3-inch thick solid wood frames containing deep 3D floral carvings. Features premium high-density master foam seats upholstered in royal gold brocade.",
      descriptionUrdu: "بھاری 3 انچ موٹی خالص لکڑی کے فریموں اور گہرے پھولوں کی نقش و نگار سے بنا روایتی شاہی صوفہ سیٹ۔ اس میں بہترین ہائی ڈینسٹی ماسٹر فوم اور سنہری بروکیڈ کپڑا استعمال کیا گیا ہے۔",
      priceEstimate: 240000,
      image: sofaImage,
      woodType: "Pure Seasoned Sheesham (Tali)",
      carvingStyle: "Double-sided Intricate Floral Carving",
      polishType: "Antique Walnut Polishing",
      features: ["3-Seater Sofa & 2 Single Chairs", "Mughal-style curved legs", "Genuine high-density master foam", "Removable velvet seat cushions"],
      featuresUrdu: ["3 سیٹر صوفہ اور 2 سنگل کرسیاں", "مغلائی سٹائل گول اور خم دار پائے", "خالص ہائی ڈینسٹی فوم", "دھونے کے لائق مخمل کشن"]
    },
    {
      id: "prod-3",
      name: "Shalimar Imperial 8-Seater Dining Set",
      nameUrdu: "شالیمار امپیریل ڈائننگ سیٹ (8 سیٹر)",
      category: "dining",
      description: "A gorgeous banquet-style dining table with an intricate hand-carved floral border beneath a thick tempered glass top. Surrounded by 8 high-back solid wood chairs with royal gold patterns.",
      descriptionUrdu: "ایک شاندار بینکیٹ اسٹائل ڈائننگ ٹیبل جس کے گلاس ٹاپ کے نیچے ہاتھ سے بنے خوبصورت نقوش ہیں۔ اس کے ساتھ سنہری شاہی کپڑے سے سجی 8 اونچی پشت والی کرسیاں موجود ہیں۔",
      priceEstimate: 165000,
      image: diningImage,
      woodType: "Pure Seasoned Sheesham (Tali)",
      carvingStyle: "Traditional Jali & Crown Carving",
      polishType: "High-Gloss Lacquer Finish",
      features: ["8 Hand-carved Highback Chairs", "10mm Toughened Tempered Glass", "Sturdy central support pillar design", "Scratch-resistant lacquer"],
      featuresUrdu: ["8 ہاتھ سے تیار کردہ اونچی پشت والی کرسیاں", "10 ملی میٹر پکی ٹمپرڈ گلاس شیٹ", "مضبوط درمیانی ستون پائے", "خراشوں سے محفوظ لکیر پالش"]
    },
    {
      id: "prod-4",
      name: "Classic Chinioti 4-Panel Room Divider",
      nameUrdu: "چنیوٹی روایتی چار پینل لکڑی کا پارٹیشن",
      category: "handicrafts",
      description: "An exquisite four-panel wooden partition screen crafted from finest seasoned Sheesham wood. Adorned with delicate floral lattice-work and brass details, this masterpiece serves as a grand divider or an iconic statement piece.",
      descriptionUrdu: "خالص پکی شیشم سے بنے روایتی چار پینل والا آرائشی روم ڈیوائیڈر۔ اس پر چنیوٹ کے نامور کاریگروں کی ہاتھ سے بنائی گئی دلکش جالی دار پتیوں کی باریک نقش و نگار اور پیتل کا نفیس کام موجود ہے۔",
      priceEstimate: 45000,
      image: roomDividerImage,
      woodType: "Pure Seasoned Sheesham (Tali)",
      carvingStyle: "Traditional Lattice & Floral Carving",
      polishType: "Antique Matte Walnut Finish",
      features: ["100% Solid Seasoned Sheesham Wood", "Double-sided premium finishing", "Foldable brass-hinged mechanism", "Aesthetic divider for drawing rooms"],
      featuresUrdu: ["100٪ خالص پکی شیشم لکڑی", "دونوں اطراف سے اعلی پالش اور صفائی", "مضبوط پیتل کے قبضوں کے ساتھ فولڈ ایبل", "ڈرائنگ روم تقسیم کرنے کے لئے بہترین آپشن"]
    },
    {
      id: "prod-safe-1",
      name: "Sovereign Chinioti Safe Vault Almari (3-Door)",
      nameUrdu: "چنیوٹی شاہی سیف الماری مع فولادی والٹ (3 در)",
      category: "storage",
      description: "A monumental solid Sheesham wardrobe featuring deep hand-carved floral crests and brass Tarkashi wire inlay. Inside houses a heavy-duty steel safety vault locker (Tizori), velvet-lined jewelry drawers, and double-bolt security locks.",
      descriptionUrdu: "خالص پکی کالی ٹالی کی لکڑی سے تیار کردہ شاہی 3 در الماری جس پر پیتل کا باریک تارکشی کا کام اور پھولدار تاج بنا ہے۔ اس میں اندرونی فولادی سیف والٹ (تزوری)، مخملی جیولری درازیں اور ڈبل سیکیورٹی لاکس موجود ہیں۔",
      priceEstimate: 195000,
      image: safeAlmariImage,
      woodType: "100% Seasoned Sheesham Wood (Tali)",
      carvingStyle: "Deep Floral Relief & Brass Tarkashi Wire Inlay",
      polishType: "High-Gloss Natural Rosewood Polish",
      features: ["Built-in heavy steel security vault (Tizori)", "3 spacious doors with solid brass ring handles", "Secret velvet jewelry drawer compartments", "15-year termite & warp-free warranty"],
      featuresUrdu: ["مضبوط اندرونی سٹیل سیف والٹ (تزوری)", "پیتل کے شاہی کڑوں والے 3 بھاری دروازے", "خفیہ مخملی زیورات کی درازیں", "15 سال دیمک اور لکڑی کی پکی وارنٹی"]
    },
    {
      id: "prod-console-1",
      name: "Mughal Craft Console Table & Arched Mirror Frame",
      nameUrdu: "مغلائی نقش کنسول ٹیبل مع محرابی آئینہ فریم",
      category: "handicrafts",
      description: "A breathtaking entryway console table with intricate brass Tarkashi wire inlay work on solid rosewood, topped with a tall hand-carved arched mirror frame.",
      descriptionUrdu: "ڈرائنگ روم اور ہال کی شان بڑھانے والا کنسول ٹیبل جس پر پیتل کا دلکش تارکشی کام اور مغلائی محراب والا نفیس منقش شیشے کا فریم موجود ہے۔",
      priceEstimate: 85000,
      image: consoleMirrorImage,
      woodType: "100% Pure Seasoned Sheesham",
      carvingStyle: "Hand Tarkashi Brass Inlay & Crown Relief",
      polishType: "Antique Golden Walnut Polish",
      features: ["Heavy solid Sheesham frame construction", "High-grade clarity distortion-free mirror", "Brass Tarkashi floral motifs on tabletop", "Elegant curved cabriole legs"],
      featuresUrdu: ["خالص شیشم لکڑی کا بھاری فریم", "واضح اور شاندار بڑا شیشہ", "ٹیبل پر پیتل کی باریک پھولدار تارکشی", "مغلائی انداز کے خم دار پائے"]
    },
    {
      id: "prod-jhula-1",
      name: "Sovereign Chinioti Royal Swing (Jhula)",
      nameUrdu: "شاہی چنیوٹی لکڑی کا منقش جھولا",
      category: "handicrafts",
      description: "A grand heirloom wooden swing crafted with intricate floral carvings and brass chains, complete with plush velvet cushion seating for courtyards and grand living rooms.",
      descriptionUrdu: "چنیوٹ کے ماہر نقاشوں کا تیار کردہ شاہی منقش جھولا، جس میں پیتل کی کڑا زنجیریں اور مخملی گدا موجود ہے۔",
      priceEstimate: 165000,
      image: jhulaImage,
      woodType: "100% Seasoned Sheesham",
      carvingStyle: "Mughal Floral Carving & Brass Chains",
      polishType: "Dark Rosewood Polish",
      features: ["Solid heavy Sheesham arch frame", "Authentic pure brass hanging chains", "Includes premium velvet cushion", "15-year termite resistance warranty"],
      featuresUrdu: ["مضبوط شیشم لکڑی کا محرابی فریم", "خالص پیتل کی وزنی سندر زنجیریں", "شاہی مخمل کا آرام دہ کشن", "15 سال دیمک سے پاک لکڑی"]
    },
    {
      id: "prod-dressing-1",
      name: "Bridal Royal Dressing Vanity Table (Singhar Table)",
      nameUrdu: "شاہی دلہن سنگھار ٹیبل مع بڑا آئینہ",
      category: "bedroom",
      description: "A lavish bridal dressing vanity with an ornate arched mirror, brass Tarkashi wire inlay, velvet-lined jewelry drawers, and matching carved stool.",
      descriptionUrdu: "دلہن کے لیے شاہی سنگھار ٹیبل جس پر پیتل کی تارکشی، مخملی درازیں اور ہاتھ کا باریک نقش و نگار موجود ہے۔",
      priceEstimate: 115000,
      image: dressingImage,
      woodType: "Pure Seasoned Sheesham",
      carvingStyle: "Brass Tarkashi & Floral Relief",
      polishType: "Glossy Walnut Polish",
      features: ["Large high-clarity arched mirror", "Velvet inner jewelry drawers", "Matching carved sitting stool", "Brass handles and locks"],
      featuresUrdu: ["بڑا صاف و شفاف محرابی آئینہ", "زیورات کے لیے خصوصی مخملی درازیں", "ساتھ میچنگ منقش ڈریسنگ اسٹول", "پیتل کے فینسی ہینڈلز"]
    },
    {
      id: "prod-deewan-1",
      name: "Mughal Empire Royal Carved Deewan Bench",
      nameUrdu: "مغلائی ملوکاتی شاہی دیوان (کتھی صوفہ)",
      category: "living",
      description: "A classic oriental daybed bench featuring carved Sheesham side handles, brass Tarkashi inlay, and maroon velvet upholstery.",
      descriptionUrdu: "روایتی مغلائی انداز کا شاہی دیوان جس پر شیشم لکڑی کے خم دار ہینڈل، پیتل کی تارکشی اور لال مخمل کا کپڑا لگا ہے۔",
      priceEstimate: 95000,
      image: deewanImage,
      woodType: "100% Seasoned Sheesham",
      carvingStyle: "Double Floral Carving & Brass Inlay",
      polishType: "Antique Rosewood Polish",
      features: ["Heavy solid Sheesham frame", "Rich velvet tufted seating", "Scalloped carved legs", "Durable high-density foam"],
      featuresUrdu: ["بھاری شیشم فریم مع خم دار پائے", "شاہی سرخ مخمل کی نرم نشست", "پیتل کے تارکشی کے نقش", "ہائی ڈینسٹی پائیدار فوم"]
    },
    {
      id: "prod-corner-1",
      name: "Heritage Glass Corner Showcase Cabinet",
      nameUrdu: "شاہی لکڑی کا کارنر شوکیس (شیشے والی الماری)",
      category: "storage",
      description: "A tall 6-foot wooden corner display cabinet with glass doors, illuminated interior, and delicate brass wire inlay on solid Sheesham.",
      descriptionUrdu: "ہال یا ڈرائنگ روم کے کونے کو سجانے والی 6 فٹ اونچی شیشے والی منقش الماری جس میں برتن اور سجاوٹی اشیاء رکھی جا سکتی ہیں۔",
      priceEstimate: 78000,
      image: cornerCabinetImage,
      woodType: "Pure Seasoned Sheesham",
      carvingStyle: "Crown Carving & Glass Panel Joinery",
      polishType: "High-Gloss Natural Finish",
      features: ["6-foot tall corner design", "Toughened glass display shelves", "Built-in spotlight fixture", "Termite-proof seasoned wood"],
      featuresUrdu: ["6 فٹ اونچا خوبصورت کارنر ڈیزائن", "مضبوط گلاس شیلفیں", "لائٹنگ کی سہولت", "دیمک سے محفوظ پکی لکڑی"]
    },
    {
      id: "prod-6",
      name: "Sarmast Slatted Accent Chair",
      nameUrdu: "سرمست لکڑی کی منفرد کرسی",
      category: "masterpieces",
      description: "An artistic accent chair constructed from carefully layered, rounded wooden slats. Perfectly contouring to the body, it represents a bold blend of rustic art and contemporary luxury.",
      descriptionUrdu: "گول لکڑی کے فلیٹس سے تیار کردہ ایک منفرد اور اچھوتی آرائشی کرسی۔ جسمانی ساخت کے عین مطابق آرام دہ ڈیزائن، جو روایتی اور جدید آرٹ کا شاندار ملاپ ہے۔",
      priceEstimate: 35000,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop",
      woodType: "Pure Seasoned Sheesham (Tali)",
      carvingStyle: "Custom Rounded Slat Joinery",
      polishType: "Natural Sheesham Matte Varnish",
      features: ["Solid seasoned round timber bars", "Ergonomically contoured seat", "Highly unique luxury design", "Termite warranty included"],
      featuresUrdu: ["خالص پکی شیشم کی لکڑی کے پائپ فریم", "جسم کے آرام کے مطابق خم دار نشست", "انتہائی منفرد اور اچھوتا آرٹ ورک", "دیمک سے بچاؤ کی پکی وارنٹی"]
    },



  ], [bedImage, sofaImage, diningImage]);

  // Categories translate
  const categories = [
    { id: 'all', label: 'All Furniture', labelUr: 'تمام فرنیچر' },
    { id: 'bedroom', label: 'Bedroom Sets', labelUr: 'بیڈ روم سیٹس' },
    { id: 'storage', label: 'Wardrobes & Safes', labelUr: 'سیف الماری و وارڈروب' },
    { id: 'living', label: 'Sofa & Living', labelUr: 'صوفہ اور نشستیں' },
    { id: 'dining', label: 'Dining & Tables', labelUr: 'ڈائننگ ٹیبلز' },
    { id: 'handicrafts', label: 'Handicrafts & Decor', labelUr: 'روایتی سجاوٹ' },
    { id: 'masterpieces', label: 'Creative Masterpieces', labelUr: 'تخلیقی شاہکار' }
  ];

  // Filtering products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.nameUrdu.includes(searchQuery) ||
                            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.woodType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProducts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleConfigureQuote = (product: Product) => {
    onSelectProductForQuote(product);
    setSelectedProduct(null);
    // Smooth scroll to quote section
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-wood-cream/20 border-b border-wood-accent/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-wood-accent font-mono text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
            <Landmark className="h-4 w-4" />
            {lang === 'en' ? 'Showroom Treasures' : 'ہمارے تیار کردہ شاہکار'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-wood-dark">
            {lang === 'en' ? 'Explore Our Signature Collection' : 'الحرم کے مایہ ناز ڈیزائنز'}
          </h2>
          <p className="text-wood-dark/80 text-sm sm:text-base leading-relaxed">
            {lang === 'en' 
              ? 'Each product showcased is a testament to authentic manual woodwork. Filter our showroom items or search to find your dream piece.'
              : 'الحرم فرنیچر چنیوٹ کا ہر ڈیزائن ہمارے نامور کاریگروں کی دن رات کی محنت کا منہ بولتا ثبوت ہے۔ اپنی پسند کے مطابق انتخاب کیجئے۔'}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-10 pb-4 border-b border-wood-accent/15">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                id={`cat-filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-wood-accent text-white font-bold shadow-xs'
                    : 'bg-white border border-wood-accent/15 text-wood-dark/80 hover:border-wood-accent hover:text-wood-dark'
                }`}
              >
                {lang === 'en' ? cat.label : cat.labelUr}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-wood-dark/50" />
            <input
              type="text"
              id="product-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? "Search wood, product name..." : "فرنیچر کا نام، بیڈ یا صوفہ تلاش کریں..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-wood-accent/25 bg-white shadow-xs focus:border-wood-accent focus:outline-none text-sm text-wood-dark"
            />
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => {
              const isLiked = likedProducts[product.id];
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-2xl border border-wood-accent/15 overflow-hidden shadow-xs hover:shadow-lg hover:border-wood-accent/30 hover:bg-wood-cream/10 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer relative"
                >
                  {/* Image Holder */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Label */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 text-wood-dark text-[10px] font-mono tracking-widest uppercase rounded-sm font-semibold shadow-xs">
                      {product.category}
                    </span>

                    {/* Like button */}
                    <button
                      id={`like-btn-${product.id}`}
                      onClick={(e) => toggleLike(product.id, e)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/95 shadow-sm text-stone-400 hover:text-rose-500 transition-colors"
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Quick wood stamp */}
                    <div className="absolute bottom-3 right-3 bg-white/95 border border-wood-accent/30 px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                      <span className="text-[10px] font-semibold text-wood-dark">Pure Sheesham</span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-wood-dark group-hover:text-wood-accent transition-colors leading-tight">
                          {lang === 'en' ? product.name : product.nameUrdu}
                        </h3>
                      </div>
                      <p className="text-wood-dark/70 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {lang === 'en' ? product.description : product.descriptionUrdu}
                      </p>
                    </div>

                    {/* Specifications badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] bg-wood-cream text-wood-accent px-2 py-0.5 rounded-sm font-medium border border-wood-accent/15">
                        {product.carvingStyle.split(' ')[0]} Carving
                      </span>
                      <span className="text-[10px] bg-wood-cream text-wood-accent px-2 py-0.5 rounded-sm font-medium border border-wood-accent/15">
                        {product.woodType.split(' ')[0]}
                      </span>
                    </div>

                    {/* Pricing and Action */}
                    <div className="pt-4 border-t border-wood-accent/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-wood-dark/50 block uppercase tracking-wider font-mono">Estimated Base Price</span>
                        <span className="text-wood-accent font-serif text-lg font-bold">
                          PKR {product.priceEstimate.toLocaleString()}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-wood-accent font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <Eye className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-wood-accent/15 p-8 max-w-lg mx-auto shadow-xs">
            <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-wood-dark">No products found</h3>
            <p className="text-wood-dark/70 text-sm mt-1">
              We couldn't find matching Chinioti items. Try searching for "wood", "bed", "sofa", or select a different filter.
            </p>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          id="product-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fadeIn"
        >
          <div className="bg-wood-cream rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-wood-accent/35 p-5 md:p-8 relative text-wood-dark">
            
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 text-wood-dark/70 hover:text-wood-dark bg-white hover:bg-wood-cream border border-wood-accent/15 rounded-full transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-4">
              
              {/* Left image and warranty card */}
              <div className="md:col-span-6 space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-wood-accent/15">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Lifetime Warranty Banner */}
                <div className="bg-wood-accent/10 border border-wood-accent/20 rounded-xl p-4 flex gap-3">
                  <Shield className="h-6 w-6 text-wood-accent shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-wood-dark uppercase tracking-wider">
                      {lang === 'en' ? 'Lifetime Wood Guarantee' : 'شیشم لکڑی کی لائف ٹائم گارنٹی'}
                    </h4>
                    <p className="text-wood-dark/80 text-xs mt-0.5 leading-relaxed">
                      {lang === 'en' 
                        ? 'Guaranteed 100% seasoned genuine solid Sheesham. Safe from warp, bugs, and shrinkage.' 
                        : 'خالص پکی شیشم کی تحریری گارنٹی۔ دیمک یا ٹیڑھا ہونے پر فری تبدیلی کی گارنٹی۔'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content details */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-wood-accent font-mono tracking-widest uppercase font-bold">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-wood-dark leading-tight">
                      {lang === 'en' ? selectedProduct.name : selectedProduct.nameUrdu}
                    </h3>
                  </div>

                  <p className="text-wood-dark/90 text-sm leading-relaxed urdu-text">
                    {lang === 'en' ? selectedProduct.description : selectedProduct.descriptionUrdu}
                  </p>

                  {/* Specifications list */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex justify-between text-xs py-1.5 border-b border-wood-accent/15">
                      <span className="text-wood-dark/50">{lang === 'en' ? 'Wood Type' : 'لکڑی کا قسم'}</span>
                      <span className="font-semibold text-wood-dark">{selectedProduct.woodType}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1.5 border-b border-wood-accent/15">
                      <span className="text-wood-dark/50">{lang === 'en' ? 'Carving Artistry' : 'تراش کا طریقہ'}</span>
                      <span className="font-semibold text-wood-dark">{selectedProduct.carvingStyle}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1.5 border-b border-wood-accent/15">
                      <span className="text-wood-dark/50">{lang === 'en' ? 'Default Polish' : 'پالش کا رنگ'}</span>
                      <span className="font-semibold text-wood-dark">{selectedProduct.polishType}</span>
                    </div>
                  </div>

                  {/* Key features checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-wood-dark uppercase block">{lang === 'en' ? 'Premium Advantages' : 'خصوصیات:'}</span>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-wood-dark/80">
                      {(lang === 'en' ? selectedProduct.features : selectedProduct.featuresUrdu).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer price and quote action */}
                <div className="pt-4 border-t border-wood-accent/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
                  <div>
                    <span className="text-[10px] text-wood-dark/50 block uppercase font-mono tracking-wider">Estimated Showroom Price</span>
                    <span className="text-wood-accent font-serif text-xl font-bold">
                      PKR {selectedProduct.priceEstimate.toLocaleString()}
                    </span>
                  </div>

                  <button
                    id={`modal-config-quote-btn-${selectedProduct.id}`}
                    onClick={() => handleConfigureQuote(selectedProduct)}
                    className="px-5 py-2.5 bg-wood-accent hover:bg-wood-brown text-white font-bold text-xs tracking-widest uppercase rounded-lg shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span>{lang === 'en' ? 'Configure Quote' : 'بجٹ اور چوڑائی سلیکٹ کریں'}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
