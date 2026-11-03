export interface MenuItem {
  id: string;
  name: string;
  category: 'Breakfast' | 'Bakery & Pastry' | 'Specialty Coffee' | 'Brunch';
  price: number;
  formattedPrice: string;
  description: string;
  popular?: boolean;
  ingredients: string[];
  dietary?: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'system';
  text: string;
  time: string;
  quickReplies?: string[];
  orderData?: {
    items: { name: string; quantity: number; price: number }[];
    subtotal: number;
    tax: number;
    total: number;
  };
  menuItemPreview?: MenuItem;
}

export type MockupViewMode = 'desk-main' | 'phone-closeup' | 'cafe-menu' | 'dual-split';
export type LightingPreset = 'daylight-natural' | 'morning-warmth' | 'clean-neutral';

export interface MockupConfig {
  viewMode: MockupViewMode;
  lighting: LightingPreset;
  showOverlay: boolean;
  showHotspots: boolean;
  scriptScale: number; // 0.8 to 1.4
  titleText: string;
  subtitleText: string;
}
