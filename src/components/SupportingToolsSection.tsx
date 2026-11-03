import React, { useState } from 'react';
import {
  Image as ImageIcon,
  MessageSquare,
  Zap,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

interface SupportingToolsSectionProps {
  onOpenVisualModal: () => void;
  onOpenChatbotSimulator: () => void;
}

export const SupportingToolsSection: React.FC<SupportingToolsSectionProps> = ({
  onOpenVisualModal,
  onOpenChatbotSimulator,
}) => {
  const [promoSimulated, setPromoSimulated] = useState(false);
  const [sopQuery, setSopQuery] = useState('');
  const [sopAnswer, setSopAnswer] = useState<string | null>(null);

  const handleSimulatePromo = () => {
    setPromoSimulated(true);
    setTimeout(() => setPromoSimulated(false), 5000);
  };

  const handleAskSop = (query: string) => {
    setSopQuery(query);
    if (query.includes('Gramatur') || query.includes('Avocado')) {
      setSopAnswer(
        'SOP Resep Avocado Toast: 1 lembar sourdough panggang 2.5 menit. 80g alpukat tumbuk + 1 sdt perasan lemon & sea salt. Topping 1 soft-boiled egg (3m 20d) & 5ml extra virgin olive oil.'
      );
    } else if (query.includes('Closing') || query.includes('Barista')) {
      setSopAnswer(
        'Checklist Closing Barista: 1) Backflush group head dengan cleaner. 2) Bersihkan steam wand dengan air panas. 3) Kunci hopper grinder. 4) Rekap transaksi POS & kirim ke grup WhatsApp kasir.'
      );
    } else {
      setSopAnswer(
        'SOP Pelayanan Tamu: Sambut pengunjung dalam 10 detik, serahkan buku menu fisik, dan informasikan cara pemesanan cepat meja via WhatsApp kafe.'
      );
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#fafaf9] dark:bg-[#121214] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Infrastruktur Pendukung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Alat Pendukung Sesuai Kebutuhan Kafe Anda
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Teknologi dan materi visual diposisikan sebagai instrumen pendukung jalannya campaign, bukan beban sistem yang rumit. Dikonfigurasi sesuai kesepakatan cakupan kerja.
          </p>
        </div>

        {/* 4 Supporting Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tool 1: Visual Menu dan Promosi */}
          <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-neutral-800 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 border border-stone-200 dark:border-neutral-700">
                <ImageIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">Instrumen 01</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
                Visual Menu dan Promosi
              </h3>
              <p className="text-xs text-stone-600 dark:text-neutral-400 font-medium mt-0.5">
                Pembaruan Desain Grafis &amp; Materi Siap Cetak/Tayang
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
              Materi grafis untuk memperjelas tawaran promo: format poster meja (tent card), banner digital Instagram Story, hingga format buku menu ringkas berbasis aset foto makanan kafe Anda.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenVisualModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:underline cursor-pointer"
              >
                <span>Lihat Contoh Spesimen Buku Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tool 2: Chatbot WhatsApp untuk Info & Rekap */}
          <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-neutral-800 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 border border-stone-200 dark:border-neutral-700">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">Instrumen 02</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
                Chatbot WhatsApp untuk Info &amp; Rekap
              </h3>
              <p className="text-xs text-stone-600 dark:text-neutral-400 font-medium mt-0.5">
                Membantu Alur Tanya Jawab Berulang &amp; Format Pesanan
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
              Chatbot siap menjawab pertanyaan jam buka, lokasi, dan rekomendasi menu, lalu menyusun rekap nama, kuantitas item, serta alamat pengiriman agar admin kasir tinggal melakukan konfirmasi akhir.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenChatbotSimulator}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:underline cursor-pointer"
              >
                <span>Uji Coba Simulator Percakapan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tool 3: Aktivasi Promo */}
          <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-neutral-800 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 border border-stone-200 dark:border-neutral-700">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">Instrumen 03</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
                Aktivasi Promo Terarah
              </h3>
              <p className="text-xs text-stone-600 dark:text-neutral-400 font-medium mt-0.5">
                Pengganti Istilah "Panic Button" · Berdasarkan Izin Pelanggan
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
              Penyebaran penawaran khusus pada jam lengang yang disetujui owner. Pengiriman hanya dilakukan ke daftar kontak pelanggan yang telah memberikan persetujuan menerima pesan berkala (anti-spam).
            </p>

            {/* Interactive Simulation Button */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleSimulatePromo}
                disabled={promoSimulated}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                {promoSimulated ? '✓ Simulasi Penawaran Disiapkan (Demo)' : 'Simulasikan Aktivasi Promo Sore'}
              </button>
              {promoSimulated && (
                <p className="text-[11px] text-stone-600 dark:text-stone-300 font-mono">
                  Simulasi alur aktif: Draft penawaran slot jam 15:00 disiapkan untuk admin.
                </p>
              )}
            </div>
          </div>

          {/* Tool 4: Bot SOP Staf Kafe */}
          <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-neutral-800 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 border border-stone-200 dark:border-neutral-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">Instrumen 04</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
                Bot SOP untuk Staf &amp; Barista
              </h3>
              <p className="text-xs text-stone-600 dark:text-neutral-400 font-medium mt-0.5">
                Bantuan Resep, Checklist Closing &amp; Panduan Operasional
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
              Asisten internal berbasis teks yang membantu barista atau staf kasir baru mencari gramatur resep atau langkah penutupan shift tanpa harus mengganggu jam istirahat pemilik kafe.
            </p>

            {/* Quick interactive test */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-wrap gap-2 text-[11px]">
                <button
                  onClick={() => handleAskSop('Gramatur Avocado Toast')}
                  className="px-2.5 py-1 rounded bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 hover:border-slate-500 border border-stone-200 dark:border-neutral-700 cursor-pointer"
                >
                  Uji SOP: Resep Avocado Toast
                </button>
                <button
                  onClick={() => handleAskSop('Closing Barista')}
                  className="px-2.5 py-1 rounded bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 hover:border-slate-500 border border-stone-200 dark:border-neutral-700 cursor-pointer"
                >
                  Uji SOP: Checklist Closing
                </button>
              </div>

              {sopAnswer && (
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-neutral-800 border border-stone-300 dark:border-neutral-700 text-xs text-stone-800 dark:text-neutral-200 leading-relaxed">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Hasil SOP ({sopQuery}):
                  </span>
                  {sopAnswer}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
