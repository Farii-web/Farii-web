export interface Product {
  id: string;
  name: string;
  nameUrdu: string;
  category: 'bedroom' | 'living' | 'dining' | 'handicrafts' | 'masterpieces' | 'storage';
  description: string;
  descriptionUrdu: string;
  priceEstimate: number; // Base price in PKR
  image: string;
  woodType: string;
  carvingStyle: string;
  polishType: string;
  features: string[];
  featuresUrdu: string[];
}

export interface QuoteConfig {
  selectedProduct: Product | null;
  woodType: 'Sheesham' | 'Walnut' | 'Teak';
  carvingDepth: 'Light' | 'Medium' | 'Deep (3D Mughal)';
  polishType: 'Glossy' | 'Deco' | 'Walnut Matt' | 'Antique Gold';
  upholsteryType: 'Premium Velvet' | 'Brocade Fabric' | 'None';
  size: 'Standard' | 'Custom';
  customNotes: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export interface Inquiry {
  id: string;
  customerName: string;
  phone: string;
  selectedProduct: string;
  woodType: string;
  carvingDepth: string;
  polishType: string;
  customNotes: string;
  estimatedPrice: number;
  status: 'pending' | 'responded';
  date: string;
}
