import { ChatMessage, MenuItem } from '../types';

export const CAFE_MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Avocado & Poached Egg Toast',
    category: 'Breakfast',
    price: 14.0,
    formattedPrice: '£14.00',
    description: 'Sourdough smashed avocado, poached organic egg, watermelon radish, microgreens, toasted chili flakes & virgin olive oil.',
    popular: true,
    ingredients: ['Artisan Sourdough', 'Hass Avocado', 'Organic Poached Egg', 'Watermelon Radish', 'Cold-pressed Olive Oil'],
    dietary: ['Vegetarian', 'Nut-Free'],
  },
  {
    id: 'm2',
    name: 'House Baked Golden Croissant',
    category: 'Bakery & Pastry',
    price: 4.5,
    formattedPrice: '£4.50',
    description: 'Freshly baked French flaky butter croissant served with artisanal raspberry preserve and cultured Normandy butter.',
    popular: true,
    ingredients: ['French Flour', 'Normandy Butter', 'Raspberry Preserve'],
    dietary: ['Vegetarian'],
  },
  {
    id: 'm3',
    name: 'Specialty Flat White / Latte',
    category: 'Specialty Coffee',
    price: 4.8,
    formattedPrice: '£4.80',
    description: 'Double ristretto with velvety steamed oat or whole dairy milk, featuring our single-origin Ethiopian washed beans.',
    popular: true,
    ingredients: ['Double Ristretto', 'Steamed Oat Milk / Whole Milk'],
    dietary: ['Gluten-Free', 'Dairy-Free option'],
  },
  {
    id: 'm4',
    name: 'Truffle Mushroom Brioche',
    category: 'Brunch',
    price: 16.5,
    formattedPrice: '£16.50',
    description: 'Wild forest sautéed mushrooms on toasted brioche with shaved black winter truffles, crème fraîche, and fresh chives.',
    popular: false,
    ingredients: ['Brioche', 'Forest Mushrooms', 'Black Truffle', 'Chives'],
    dietary: ['Vegetarian'],
  },
];

export function calculateOrderSummary(items: { name: string; quantity: number; price: number }[]) {
  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const tax = Number((subtotal * 0.1).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));
  return {
    items,
    subtotal: Number(subtotal.toFixed(2)),
    tax,
    total,
  };
}

export function generateBotResponse(userInput: string, language: 'id' | 'en' = 'id'): ChatMessage {
  const query = userInput.toLowerCase().trim();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 0. Package / Pricing / Promo query
  if (query.includes('paket') || query.includes('harga') || query.includes('promo') || query.includes('growth') || query.includes('starter') || query.includes('pro') || query.includes('panic button')) {
    const text =
      language === 'id'
        ? `Halo! Terima kasih atas ketertarikan Anda pada layanan *Origins AI System* 🚀\n\n` +
          `⭐ *Paket Paling Laris: Paket Growth (Best Value)*\n` +
          `• Harga Promo: *Rp 1.490.000 / bulan* (Hemat Rp 1.510.000/bln)\n` +
          `• 20 Aset Visual AI Fotorealistik\n` +
          `• Full AI Chatbot WhatsApp Otomatis 24/7\n` +
          `• Fitur 'Panic Button' Flash Sale Instan\n` +
          `• Bot SOP & Training Internal Karyawan\n\n` +
          `Sistem siap diaktifkan dalam 7 hari kerja tanpa perlu ganti nomor WhatsApp bisnis Anda. Tim kami siap membantu onboarding!`
        : `Hello! Thank you for your interest in *Origins AI System* 🚀\n\n` +
          `⭐ *Best Value: Growth Package*\n` +
          `• Promo Price: *Rp 1.490.000 / month* (Save Rp 1.510.000/mo)\n` +
          `• 20 Photorealistic AI Visual Assets\n` +
          `• Full WhatsApp AI Automated Chatbot 24/7\n` +
          `• Instant 'Panic Button' Flash Sale Trigger\n` +
          `• Employee SOP & Onboarding AI Assistant\n\n` +
          `Ready to deploy in 7 business days!`;

    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text,
      time,
      quickReplies: [
        language === 'id' ? 'Jadwalkan Konsultasi Gratis' : 'Book Free Consultation',
        language === 'id' ? 'Tanya Fitur Panic Button' : 'Ask Panic Button Info',
        language === 'id' ? 'Lihat Contoh Menu Cetak' : 'View Sample Printed Menu',
      ],
    };
  }

  // 1. Menu query
  if (query.includes('menu') || query.includes('makan') || query.includes('coffee') || query.includes('rekomendasi') || query.includes('food')) {
    const popularItems = CAFE_MENU_ITEMS.filter(item => item.popular);
    const text =
      language === 'id'
        ? `Tentu! Berikut rekomendasi menu artisanal favorit kami di The Daily Bean:\n\n` +
          popularItems.map(item => `✨ *${item.name}* (${item.formattedPrice})\n   _${item.description}_`).join('\n\n') +
          `\n\nKetik nama menu atau klik tombol di bawah untuk memesan langsung!`
        : `Certainly! Here are our most beloved artisanal dishes at The Daily Bean:\n\n` +
          popularItems.map(item => `✨ *${item.name}* (${item.formattedPrice})\n   _${item.description}_`).join('\n\n') +
          `\n\nTap below to order or ask for recommendations!`;

    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text,
      time,
      quickReplies: [
        language === 'id' ? 'Pesan Avocado Toast + Latte' : 'Order Avocado Toast + Latte',
        language === 'id' ? 'Pesan Golden Croissant' : 'Order Golden Croissant',
        language === 'id' ? 'Jam Buka & Lokasi' : 'Hours & Location',
      ],
    };
  }

  // 2. Ordering flow
  if (query.includes('pesan') || query.includes('order') || query.includes('avocado') || query.includes('croissant')) {
    let orderItems = [
      { name: 'Avocado & Poached Egg Toast', quantity: 1, price: 14.0 },
      { name: 'Specialty Flat White (Oat)', quantity: 1, price: 4.8 },
    ];

    if (query.includes('croissant')) {
      orderItems = [
        { name: 'House Baked Golden Croissant', quantity: 2, price: 4.5 },
        { name: 'Specialty Flat White (Oat)', quantity: 1, price: 4.8 },
      ];
    }

    const summary = calculateOrderSummary(orderItems);

    const text =
      language === 'id'
        ? `Pesanan Anda berhasil disiapkan secara otomatis oleh *Origins AI System*! 🧾\n\n` +
          `*Detail Pesanan:* #${Math.floor(1000 + Math.random() * 9000)}\n` +
          orderItems.map(it => `• ${it.quantity}x ${it.name} - £${(it.price * it.quantity).toFixed(2)}`).join('\n') +
          `\n\n*Subtotal:* £${summary.subtotal.toFixed(2)}\n*Pajak (10%):* £${summary.tax.toFixed(2)}\n*Total:* *£${summary.total.toFixed(2)}*\n\n` +
          `Estimasi siap: 10-15 menit di meja/counter Anda. Mohon konfirmasi untuk mengirimkan tiket ke dapur.`
        : `Your order draft has been prepared seamlessly via *Origins AI System*! 🧾\n\n` +
          `*Order Details:* #${Math.floor(1000 + Math.random() * 9000)}\n` +
          orderItems.map(it => `• ${it.quantity}x ${it.name} - £${(it.price * it.quantity).toFixed(2)}`).join('\n') +
          `\n\n*Subtotal:* £${summary.subtotal.toFixed(2)}\n*VAT (10%):* £${summary.tax.toFixed(2)}\n*Total:* *£${summary.total.toFixed(2)}*\n\n` +
          `Estimated prep: 10-15 mins. Tap confirm to send directly to kitchen!`;

    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text,
      time,
      orderData: summary,
      quickReplies: [
        language === 'id' ? 'Konfirmasi & Bayar' : 'Confirm & Pay',
        language === 'id' ? 'Tambah Catatan Dapur' : 'Add Kitchen Note',
        language === 'id' ? 'Lihat Menu Lengkap' : 'View Full Menu',
      ],
    };
  }

  // 3. Opening hours / Location
  if (query.includes('jam') || query.includes('buka') || query.includes('hours') || query.includes('lokasi') || query.includes('location')) {
    const text =
      language === 'id'
        ? `📍 *The Daily Bean & Mourne Cafe*\n` +
          `Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan\n\n` +
          `⏰ *Jam Operasional:*\n` +
          `• Senin - Jumat: 07:00 - 21:00 WIB\n` +
          `• Sabtu - Minggu: 07:30 - 22:00 WIB\n\n` +
          `🌱 Tersedia tempat duduk indoor ber-AC & outdoor terrace berpemandangan taman.`
        : `📍 *The Daily Bean & Mourne Cafe*\n` +
          `Senopati St. No. 42, South Jakarta\n\n` +
          `⏰ *Opening Hours:*\n` +
          `• Mon - Fri: 07:00 AM - 09:00 PM\n` +
          `• Sat - Sun: 07:30 AM - 10:00 PM\n\n` +
          `🌱 Indoor AC seating and outdoor garden terrace available.`;

    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text,
      time,
      quickReplies: [
        language === 'id' ? 'Reservasi Meja' : 'Reserve Table',
        language === 'id' ? 'Lihat Menu Makanan' : 'See Food Menu',
      ],
    };
  }

  // 4. Table reservation
  if (query.includes('reservasi') || query.includes('booking') || query.includes('table') || query.includes('meja')) {
    const text =
      language === 'id'
        ? `🍽️ *Reservasi Meja Otomatis*\n\n` +
          `Kami dengan senang hati menyambut Anda! Berapa orang yang akan hadir dan untuk jam berapa hari ini?\n\n` +
          `_Origins AI akan langsung memeriksa ketersediaan meja secara live._`
        : `🍽️ *Automated Table Reservation*\n\n` +
          `We'd love to host you! How many guests and for what time would you like to book today?\n\n` +
          `_Origins AI checks table availability in real-time._`;

    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text,
      time,
      quickReplies: [
        language === 'id' ? 'Meja 2 Orang (Siang 12:30)' : 'Table for 2 (12:30 PM)',
        language === 'id' ? 'Meja 4 Orang (Sore 16:00)' : 'Table for 4 (04:00 PM)',
        language === 'id' ? 'Lihat Menu Sambil Tunggu' : 'Browse Menu While Waiting',
      ],
    };
  }

  // Default response
  const text =
    language === 'id'
      ? `Halo! Selamat datang di The Daily Bean Cafe, dilayani oleh *Origins AI System* ☕✨\n\n` +
        `Ada yang bisa kami bantu hari ini? Anda bisa memesan makanan, melihat menu cetak visual kami, mengecek jam buka, atau reservasi meja.`
      : `Hello! Welcome to The Daily Bean Cafe, powered by *Origins AI System* ☕✨\n\n` +
        `How can we assist you today? You can browse our visual printed menu, order items, check hours, or book a table.`;

  return {
    id: `bot-${Date.now()}`,
    sender: 'bot',
    text,
    time,
    quickReplies: [
      language === 'id' ? 'Lihat Rekomendasi Menu' : 'See Popular Menu',
      language === 'id' ? 'Pesan Avocado Toast + Latte' : 'Order Avocado Toast + Latte',
      language === 'id' ? 'Jam Buka & Lokasi' : 'Hours & Location',
    ],
  };
}
