import React from 'react';
import { Camera, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICE_PILLARS, ASSET_PATHS } from '../data/mockupData';

interface ServicesOverviewProps {
  onOpenChat: () => void;
  onOpenMenu: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onOpenChat,
  onOpenMenu,
}) => {
  return (
    <section id="services" className="space-y-12 py-8">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase font-semibold">
          <span>Origins System</span>
          <span aria-hidden="true">·</span>
          <span>Dual Core Solution</span>
          <span aria-hidden="true">·</span>
          <span>Agency Grade</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white tracking-tight">
          Harmoni Visual Meja & Layanan Cerdas WhatsApp
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
          Kekuatan utama Origins AI System adalah menjembatani daya pikat fisik di atas meja makan dengan kemudahan otomasi digital. Pelanggan menikmati keindahan menu cetak berkualitas tinggi, lalu memesan dengan kecepatan instan via WhatsApp.
        </p>
      </div>

      {/* Two Flagship Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pillar 1: Layanan Visual */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-6 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">01</span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                Layanan Desain Visual & Fotografi Menu
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1 font-semibold">
                Desain Cetak Bertaraf Fine-Casual & Fotografi Kuliner Berselera Tinggi
              </p>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              Materi visual F&B yang dirancang untuk menggugah selera: tata letak menu editorial yang rapi, hierarki tipografi presisi, dan fotografi makanan berdaya pikat tinggi yang terbukti mendongkrak rata-rata nilai pesanan meja.
            </p>

            {/* Visual thumbnail */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-16/9 relative group">
              <img
                src={ASSET_PATHS.cafeMenu}
                alt="Contoh Hasil Desain Menu Cetak & Fotografi Kuliner"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium">
                  Spesimen Foto: Toast Alpukat & Telur Poached Organik
                </span>
              </div>
            </div>

            {/* Deliverables */}
            <ul className="space-y-2.5 pt-2">
              {SERVICE_PILLARS[0].deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onOpenMenu}
            className="w-full py-2.5 px-4 bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <span>Inspeksi Buku Menu Cetak</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 2: Layanan Chatbot AI */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-6 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">02</span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                Layanan Chatbot AI WhatsApp
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-1 font-semibold">
                Otomatisasi Pelayanan Tamu, Reservasi & Pemesanan 24/7
              </p>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              Integrasi asisten cerdas WhatsApp yang langsung merespons pertanyaan menu, menangani pemesanan meja, dan menghitung rincian tagihan secara instan tanpa jeda antrean kasir.
            </p>

            {/* Chatbot preview thumbnail */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-16/9 relative group">
              <img
                src={ASSET_PATHS.phoneCloseup}
                alt="Smartphone menampilkan WhatsApp Customer Service Bot"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium">
                  Antarmuka Percakapan WhatsApp Otomatis Seketika
                </span>
              </div>
            </div>

            {/* Deliverables */}
            <ul className="space-y-2.5 pt-2">
              {SERVICE_PILLARS[1].deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onOpenChat}
            className="w-full py-2.5 px-4 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <span>Uji Coba Percakapan WhatsApp Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quantitative proof adjacent to claims - pure black & white */}
      <div className="bg-black text-white rounded-3xl p-8 sm:p-10 border border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          <div className="space-y-1">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-white">+28%</p>
            <p className="text-xs text-neutral-300 font-semibold">Peningkatan Rata-rata Pesanan Meja</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Didorong oleh fotografi menu yang menggoda & kemudahan pesan via chatbot
            </p>
          </div>
          <div className="space-y-1 pt-6 md:pt-0 md:pl-8">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-white">&lt; 1 Detik</p>
            <p className="text-xs text-neutral-300 font-semibold">Kecepatan Respon WhatsApp</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Pelanggan mendapatkan rekomendasi & struk tanpa menunggu pelayan yang sibuk
            </p>
          </div>
          <div className="space-y-1 pt-6 md:pt-0 md:pl-8">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-white">100%</p>
            <p className="text-xs text-neutral-300 font-semibold">Pencahayaan & Visual Alami</p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Bebas dari efek neon atau distorsi; murni estetika modern daylight
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
