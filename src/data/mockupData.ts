import mainDeskImg from '../assets/images/origins_desk_mockup_main_1793123667894.jpg';
import phoneCloseupImg from '../assets/images/origins_phone_closeup_1793123668559.jpg';
import cafeMenuImg from '../assets/images/origins_cafe_menu_food_1793123668544.jpg';

export const ASSET_PATHS = {
  mainDesk: mainDeskImg,
  phoneCloseup: phoneCloseupImg,
  cafeMenu: cafeMenuImg,
};

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  subtitle: string;
  icon: 'phone' | 'menu' | 'coffee' | 'typography';
  actionType: 'open-chat' | 'open-menu' | 'info';
}

export const MAIN_HOTSPOTS: Hotspot[] = [
  {
    id: 'hp-phone',
    x: 41,
    y: 74,
    title: 'Smartphone • WhatsApp Chatbot',
    subtitle: 'Automated 24/7 customer service & instant ordering',
    icon: 'phone',
    actionType: 'open-chat',
  },
  {
    id: 'hp-menu',
    x: 56,
    y: 60,
    title: 'Printed Cafe Menu • Visual Service',
    subtitle: 'Appetizing culinary photography & editorial layout',
    icon: 'menu',
    actionType: 'open-menu',
  },
  {
    id: 'hp-coffee',
    x: 76,
    y: 56,
    title: 'Artisanal Latte Art',
    subtitle: 'Warm ceramic mug bathed in bright morning daylight',
    icon: 'coffee',
    actionType: 'info',
  },
];

export const INITIAL_WHATSAPP_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'system' as const,
    text: 'Pesan ini dienkripsi secara end-to-end dengan verifikasi resmi Origins AI System.',
    time: '10:48',
  },
  {
    id: 'msg-2',
    sender: 'bot' as const,
    text: 'Halo! Selamat datang di *The Daily Bean & Mourne Cafe* ☕\n\nSaya adalah asisten virtual otomatis bertenaga *Origins AI*. Ada yang bisa kami sajikan untuk Anda hari ini?',
    time: '10:49',
    quickReplies: [
      'Lihat Rekomendasi Menu',
      'Pesan Avocado Toast + Latte',
      'Jam Buka & Lokasi',
    ],
  },
];

export const SERVICE_PILLARS = [
  {
    number: '01',
    title: 'Layanan Visual & Culinary Branding',
    subtitle: 'Desain Menu Cetak & Fotografi Makanan Berkualitas Tinggi',
    description:
      'Kami menciptakan materi visual F&B yang menggugah selera: layout menu cetak editorial, tata letak tipografi presisi, dan fotografi makanan profesional yang meningkatkan nilai estetika bisnis cafe & resto Anda.',
    deliverables: [
      'Desain Buku Menu Cetak & Digital (Editorial Layout)',
      'Aset Fotografi Kuliner Appetizing & High-Resolution',
      'Identitas Tipografi & Desain Meja Minimalis',
      'Mockup Presentasi Agency-Grade untuk Promosi',
    ],
  },
  {
    number: '02',
    title: 'Layanan Chatbot AI WhatsApp',
    subtitle: 'Otomatisasi Customer Service & Order Taking 24/7',
    description:
      'Integrasi chatbot cerdas berbasis WhatsApp yang siap melayani pesanan pelanggan, menjawab pertanyaan menu, menangani reservasi meja, dan menghitung total tagihan seketika tanpa jeda antrean.',
    deliverables: [
      'Respon Otomatis 24/7 Bahasa Indonesia & English',
      'Sistem Pemesanan Langsung & Rekap Struk Real-Time',
      'Manajemen Tanya Jawab Menu, Alergen & Jam Operasional',
      'Integrasi Notifikasi Meja & Tiket Dapur Otomatis',
    ],
  },
];
