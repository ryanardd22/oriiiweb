import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react';

interface PricingSectionProps {
  onClaimPromo: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onClaimPromo }) => {
  return (
    <section id="pricing" className="py-12 border-t border-neutral-200 dark:border-neutral-800 space-y-10">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase">
          <span>Origins System</span>
          <span aria-hidden="true">·</span>
          <span>Pricelist & Paket</span>
          <span aria-hidden="true">·</span>
          <span>Investasi Terukur</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white tracking-tight">
          Pricelist & Paket Otomasi Bisnis Anda
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
          Transparan, tanpa biaya tersembunyi, dan dirancang untuk memberikan pengembalian investasi (ROI) langsung sejak bulan pertama beroperasi.
        </p>
      </div>

      {/* 3-Column Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Card 1: Starter (The Decoy) */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between opacity-85 hover:opacity-100 transition-all">
          <div className="space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
                Tingkat Dasar
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-1">
                Paket Starter
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Cocok untuk bisnis baru yang hanya membutuhkan setup profil awal.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-400">Investasi:</span>
              <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-100 mt-0.5">
                Rp 350.000 – 990.000
              </div>
              <span className="text-xs text-neutral-400 font-sans italic">
                (Sekali bayar / setup awal)
              </span>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-3">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                Fasilitas Termasuk:
              </p>
              <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>5 Aset Visual Desain Grafis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Setup Auto-reply WA Statis (Pesan Sambutan Sederhana)</span>
                </li>
                <li className="flex items-start gap-2.5 text-neutral-400 dark:text-neutral-600 line-through">
                  <span className="w-4 h-4 text-center shrink-0">✕</span>
                  <span>Tanpa AI interaktif / Tanpa asisten pintar</span>
                </li>
                <li className="flex items-start gap-2.5 text-neutral-400 dark:text-neutral-600 line-through">
                  <span className="w-4 h-4 text-center shrink-0">✕</span>
                  <span>Tanpa Panic Button Broadcast</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => onClaimPromo('Paket Starter')}
            className="mt-8 w-full py-2.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Pilih Paket Starter
          </button>
        </div>

        {/* Card 2: Growth (The Sweet Spot - Highlighted) */}
        <div className="relative bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border-2 border-black dark:border-white shadow-xl flex flex-col justify-between transform md:-translate-y-2 transition-all">
          {/* Top Tag without pill slop */}
          <div className="absolute -top-3.5 left-6 bg-black dark:bg-white text-white dark:text-black text-[11px] font-mono uppercase tracking-widest px-3 py-0.5 rounded shadow-sm border border-neutral-800 dark:border-neutral-200 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paling Laris / Best Value</span>
          </div>

          <div className="space-y-5 pt-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black dark:text-white font-bold">
                Rekomendasi Utama
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white mt-1">
                Paket Growth
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                Solusi komprehensif: visual kelas agensi + admin AI WhatsApp pintar 24/7.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-400">Harga Normal:</span>
              <div className="text-sm text-neutral-400 dark:text-neutral-500 line-through font-mono">
                Rp 3.000.000
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-black dark:text-white mt-1 tracking-tight">
                Rp 1.490.000
                <span className="text-xs sm:text-sm font-normal text-neutral-500 dark:text-neutral-400 ml-1.5">
                  / bulan
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-semibold block mt-1">
                Hemat Rp 1.510.000 per bulan
              </span>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-3">
              <p className="text-xs font-mono text-black dark:text-white uppercase tracking-wider font-semibold">
                Fasilitas Lengkap Termasuk:
              </p>
              <ul className="space-y-3 text-sm text-neutral-800 dark:text-neutral-100">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span className="font-semibold text-black dark:text-white">20 Aset Visual AI Fotorealistik & Promosi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span className="font-semibold text-black dark:text-white">Full AI Chatbot WhatsApp Otomatis 24/7</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Sistem Rekap Order & Hitung Struk Tagihan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span className="font-bold underline underline-offset-4">
                    Fitur 'Panic Button' (Flash Sale Instan)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Bot SOP & Training Karyawan Internal</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Pembaruan Memori & Katalog Setiap Bulan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <button
              onClick={() => onClaimPromo('Paket Growth (Promo)')}
              className="w-full py-3 px-4 rounded-xl bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Klaim Harga Promo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 3: Pro (The Anchor) */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between transition-all">
          <div className="space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
                Skala Bisnis Besar / Multi-Outlet
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                Paket Pro
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Dirancang untuk brand yang membutuhkan multi-kanal dan volume tinggi.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-400">Investasi:</span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-900 dark:text-white mt-0.5">
                Rp 4.990.000
                <span className="text-xs sm:text-sm font-normal text-neutral-500 ml-1.5">
                  / bulan
                </span>
              </div>
              <span className="text-xs text-neutral-400 italic">
                (Kapasitas enterprise & multi-cabang)
              </span>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-3">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                Fasilitas Termasuk:
              </p>
              <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span className="font-medium text-black dark:text-white">50 Aset Visual & Motion Promosi per Bulan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span className="font-medium text-black dark:text-white">Bot Multi-channel (WhatsApp & Instagram DM)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Manajemen Sistem Skala Besar & Multi-outlet</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Integrasi Kustom Sistem POS / Printer Dapur</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                  <span>Prioritas Dedicated Account Manager</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => onClaimPromo('Paket Pro')}
            className="mt-8 w-full py-2.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Pilih Paket Pro
          </button>
        </div>
      </div>

      {/* ROI & Psychological Comparison Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-black text-white border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Kalkulasi Penghematan Riil</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Mengapa Paket Growth Jauh Lebih Menguntungkan?
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Biaya konvensional bulanan: Sewa fotografer studio (Rp 2.500.000) + Gaji 1 orang admin kasir shift penuh (Rp 3.500.000) = <strong className="text-white underline underline-offset-4">Rp 6.000.000+/bulan</strong>. Dengan Paket Growth Origins AI, Anda berhemat lebih dari <strong className="text-white">75%</strong> dan sistem bekerja otomatis 24 jam nonstop tanpa mengenal lelah.
          </p>
        </div>

        <button
          onClick={() => onClaimPromo('Paket Growth (Promo)')}
          className="whitespace-nowrap px-5 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold transition-colors shrink-0 shadow-md"
        >
          Klaim Promo Paket Growth Sekarang →
        </button>
      </div>
    </section>
  );
};
