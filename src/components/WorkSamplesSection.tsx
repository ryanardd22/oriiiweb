import React from 'react';
import { ASSET_PATHS } from '../data/mockupData';
import { Info, ExternalLink } from 'lucide-react';

interface WorkSamplesSectionProps {
  onOpenVisualModal: () => void;
  onOpenChatbotSimulator: () => void;
}

export const WorkSamplesSection: React.FC<WorkSamplesSectionProps> = ({
  onOpenVisualModal,
  onOpenChatbotSimulator,
}) => {
  const samples = [
    {
      title: 'Desain Spesimen Menu Cetak & Aset Fotografi Kuliner',
      category: 'Konsep Visual Cetak',
      image: ASSET_PATHS.cafeMenu,
      caption: 'Buku menu cetak bertekstur fine-casual dengan komposisi fotografi pencahayaan alami.',
      actionLabel: 'Buka Pratinjau Buku Menu',
      action: onOpenVisualModal,
    },
    {
      title: 'Mockup Presentasi Meja Kasir & Display Promosi',
      category: 'Tata Letak Meja & Display',
      image: ASSET_PATHS.mainDesk,
      caption: 'Penempatan kartu promosi meja terintegrasi kode pemesanan WhatsApp terstruktur.',
      actionLabel: 'Lihat Contoh Detail Meja',
      action: onOpenVisualModal,
    },
    {
      title: 'Antarmuka Chatbot Pemesanan Menu WhatsApp',
      category: 'Alur Digital Pemesanan',
      image: ASSET_PATHS.phoneCloseup,
      caption: 'Tampilan WhatsApp smartphone yang memudahkan tamu memilih paket dan merekap pesanan.',
      actionLabel: 'Uji Coba Simulator Chat',
      action: onOpenChatbotSimulator,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#151518] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Spesimen Kerja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Contoh Aset dan Konsep Materi
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Materi visual yang dirancang untuk mendukung kejelasan pesan penawaran dan kenyamanan tamu saat memilih pesanan di kafe Anda.
          </p>
        </div>

        {/* Mandatory Concept Work Disclaimer Banner */}
        <div className="mb-12 p-4 rounded-xl bg-stone-100 dark:bg-neutral-800/80 border border-stone-200 dark:border-neutral-700 text-stone-700 dark:text-neutral-300 flex items-start gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-slate-800 dark:text-slate-200 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-stone-900 dark:text-white font-semibold">Pemberitahuan Etika:</strong> Seluruh materi visual di bawah ini adalah <span className="underline underline-offset-2 font-medium">contoh konsep</span> — bukan proyek resmi atau endorsement dari klien tertentu. Kami tidak menampilkan testimoni buatan atau angka persentase fiktif.
          </p>
        </div>

        {/* Grid of Work Samples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {samples.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-neutral-800 flex flex-col justify-between shadow-xs hover:border-slate-500 transition-all group"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-stone-200 dark:bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-black/70 backdrop-blur-xs text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-neutral-400 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={item.action}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl bg-white dark:bg-neutral-800 text-stone-800 dark:text-neutral-200 hover:bg-stone-100 dark:hover:bg-neutral-700 border border-stone-200 dark:border-neutral-700 transition-colors shadow-2xs cursor-pointer"
                >
                  <span>{item.actionLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
